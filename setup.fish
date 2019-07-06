#!/usr/bin/env fish

cd image-generation
npm ci
mkdir -p output
cd -

cd image-writing
fish setup.fish
./venv/bin/python3 eink.py
cd -
