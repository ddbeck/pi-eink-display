#!./venv/bin/python3

from PIL import Image
from inky import InkyWHAT

inkywhat = InkyWHAT("red")

im = Image.open("../image-generation/output/eink.png")
inkywhat.set_image(im)
