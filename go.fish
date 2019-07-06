#!/usr/bin/env fish

cd image-generation
npm run capture
cd -

cd image-writing
fish setup.fish
./venv/bin/python3 eink.py
cd -
