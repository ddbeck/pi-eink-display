#!/usr/bin/env fish

set -x CHROMIUM_BIN "/usr/bin/chromium-browser"

cd image-generation
npm run capture
cd -

cd image-writing
./venv/bin/python3 eink.py
cd -
