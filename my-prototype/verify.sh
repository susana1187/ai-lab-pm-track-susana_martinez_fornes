#!/usr/bin/env bash
# Session 2 prototype verifier. Scans a source directory for drift from the
# UI Context Brief and prints, per problem:
#   file:line: [SEV] what's wrong (fix: how to fix it)
# Severity is HIGH (real drift, fix it), MED (usually drift, check it), or
# LOW (leaky, often a false positive). It ends with a summary count.
#
# Usage: ./verify.sh src/
# Exit 0 = clean, exit 1 = at least one flag.
#
# Triage, don't chase zero: the session's bar is ~80% Motif. Clear the HIGH
# flags, look at the MED ones, ignore LOW false positives. A stray plain <p>
# is not the same problem as a non-Motif import.
#
# Extend with your own grep rules in the marked section. The verifier compounds
# across prototypes; by prototype five it's a real linter for your house style.

set -u

DIR="${1:-src}"

if [ ! -d "$DIR" ]; then
  echo "verify.sh: directory not found: $DIR" >&2
  exit 2
fi

FOUND=0
TMP="$(mktemp)"
trap 'rm -f "$TMP"' EXIT

flag() {
  # $1 severity (HIGH|MED|LOW); $2 label; $3 fix. Reads grep output on stdin.
  local sev="$1" label="$2" fix="$3"
  while IFS= read -r line; do
    [ -z "$line" ] && continue
    local file_part="${line%%:*}"
    local rest="${line#*:}"
    local line_num="${rest%%:*}"
    echo "${file_part}:${line_num}: [${sev}] ${label} (fix: ${fix})" >> "$TMP"
  done
}

# 1. Imports from outside the allowed package set.
# Allowed: @liveramp/motif, @liveramp/icons, @liveramp/rich-data-table (the
# RichDataTable / RDT component), react (incl. subpaths like react/jsx-runtime),
# react-dom (incl. subpaths like react-dom/client).
grep -rnE "from ['\"]" "$DIR" --include='*.jsx' --include='*.js' 2>/dev/null \
  | grep -vE "from ['\"](@liveramp/motif|@liveramp/icons|@liveramp/rich-data-table|react|react-dom)(/[^'\"]*)?['\"]" \
  | grep -vE "from ['\"]\." \
  | flag HIGH "non-allowlisted import" "import from @liveramp/motif, @liveramp/icons, or @liveramp/rich-data-table; if the package is genuinely house, add it to the allowlist here and in the brief"

# 2a. Plain interactive HTML elements where a Motif component exists.
for tag in button input a select textarea; do
  grep -rnE "<${tag}([ >/])" "$DIR" --include='*.jsx' 2>/dev/null \
    | flag HIGH "plain <${tag}> element" "use the Motif component (Button / TextField / Link / Select); look it up with search_motif_components"
done

# 2b. Plain structural / typography HTML elements.
for tag in div span h1 h2 h3 h4 h5 h6 p ul ol li form label table thead tbody tr td th; do
  grep -rnE "<${tag}([ >/])" "$DIR" --include='*.jsx' 2>/dev/null \
    | flag MED "plain <${tag}> element" "use a Motif layout/typography component (Stack, Grid, Heading, Text, RichDataTable) instead of raw HTML"
done

# 3. Inline style attribute.
grep -rnE 'style=\{' "$DIR" --include='*.jsx' 2>/dev/null \
  | flag MED "inline style attribute" "move styling to Motif components and tokens; no inline style blocks"

# 4. Hardcoded hex colors.
grep -rnE "#[0-9A-Fa-f]{3,6}\\b" "$DIR" --include='*.jsx' --include='*.js' 2>/dev/null \
  | flag LOW "hardcoded hex color" "use a Motif color token via search_motif_api (ignore if this is an href anchor or a real id, not a color)"

# 5. CSS imports (style with Motif components and tokens, not stylesheets).
grep -rnE "^import ['\"].*\.css['\"]" "$DIR" --include='*.jsx' --include='*.js' 2>/dev/null \
  | flag HIGH "CSS import" "remove it; style with Motif components and tokens, not a stylesheet"

# 6. Hardcoded font-size in inline-style blocks.
grep -rnE "fontSize:\s*['\"][0-9]+" "$DIR" --include='*.jsx' 2>/dev/null \
  | flag MED "hardcoded fontSize" "use Motif typography components (Heading, Text), which carry the type scale"

# 7. Flexbox CSS in JSX (should be Motif Stack/Grid).
grep -rnE "display:\s*['\"](flex|inline-flex|grid)" "$DIR" --include='*.jsx' --include='*.js' 2>/dev/null \
  | flag MED "flexbox/grid CSS in JSX" "use Motif Stack for vertical sequences and Grid for 2D layouts"

# 8. Modal-as-div anti-pattern (a div with role="dialog").
# The class ['\"] matches a single OR double quote, written in the same
# double-quoted-grep style as checks 6 and 7 so it works on stock macOS grep
# (BSD grep does not expand \x27, which would silently miss role='dialog').
grep -rnE "<div[^>]*role=['\"]dialog" "$DIR" --include='*.jsx' 2>/dev/null \
  | flag HIGH "modal built from <div role=dialog>" "use the Motif Dialog component"

# --- Add your own checks below this line ---
# Add checks HERE, above the collation block, so their flags get printed and
# counted. Each must pipe into flag() with a severity, a label, and a fix:
#
#   grep -rnE "className=['\"]btn" "$DIR" --include='*.jsx' 2>/dev/null \
#     | flag MED "bootstrap-style className" "use a Motif component instead of utility classes"
#
#   grep -rnE 'tailwind' "$DIR" --include='*.jsx' --include='*.js' 2>/dev/null \
#     | flag MED "tailwind reference" "remove Tailwind; this prototype is Motif-only"
# --- End of your checks ---

# Collate every flag (built-in and your own), grouped HIGH then MED then LOW, with
# a summary count. This must stay last; checks added below it are ignored.
if [ -s "$TMP" ]; then
  grep -F '[HIGH]' "$TMP" || true
  grep -F '[MED]' "$TMP" || true
  grep -F '[LOW]' "$TMP" || true
  hi=$(grep -cF '[HIGH]' "$TMP"); me=$(grep -cF '[MED]' "$TMP"); lo=$(grep -cF '[LOW]' "$TMP")
  echo "verify.sh: $((hi + me + lo)) flags (${hi} high, ${me} med, ${lo} low) in $DIR"
  FOUND=1
fi

if [ "$FOUND" -eq 0 ]; then
  echo "verify.sh: clean (0 flags in $DIR)"
fi

exit $FOUND
