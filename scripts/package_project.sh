#!/usr/bin/env bash
set -euo pipefail

OUT_NAME="upi-offline-payments-project.zip"
rm -f "$OUT_NAME"
zip -r "$OUT_NAME" project README.md .github/workflows/ci.yml .gitignore \
  -x "*/__pycache__/*" "*/.pytest_cache/*" "*/node_modules/*"

echo "Created $OUT_NAME"
