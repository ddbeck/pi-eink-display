#!/usr/bin/env fish

cd image-generation
npm run capture
cd -

cd image-writing
./venv/bin/python3 eink.py
cd -
