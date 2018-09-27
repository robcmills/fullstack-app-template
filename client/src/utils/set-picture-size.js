export default function setPictureSize (picture, size) {
	return picture.replace(/sz=(\d*)/, `sz=${size}`)
}