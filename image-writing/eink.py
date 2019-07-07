#!./venv/bin/python3

from PIL import Image
from inky import InkyWHAT

# get image from disk
im = Image.open("../image-generation/output/eink.png")

# convert to black, white, and red
palette = Image.new("P", (1, 1))
palette.putpalette((255, 255, 255, 0, 0, 0, 255, 0, 0) + (0, 0, 0) * 252)
bwr_image = im.convert("RGB").quantize(palette=palette)

# write to eink display
inkywhat = InkyWHAT("red")
inkywhat.set_image(bwr_image)
inkywhat.show()
