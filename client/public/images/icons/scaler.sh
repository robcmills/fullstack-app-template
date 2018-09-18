# This script is handy for quickly creating all the different icon resolutions.
# Of course you will need to add ffmpeg to your path.
# ffmpeg [options] [[infile options] -i infile]... {[outfile options] outfile}...
# -y Overwrite output files without asking

ffmpeg -y \
	-i 256x256.png -vf scale=192:192 192x192.png \
	-i 256x256.png -vf scale=152:152 152x152.png \
	-i 256x256.png -vf scale=144:144 144x144.png \
	-i 256x256.png -vf scale=128:128 128x128.png
