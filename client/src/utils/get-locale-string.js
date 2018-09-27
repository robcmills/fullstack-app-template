export default function getLocaleString (iso) {
	return (new Date(iso)).toLocaleString()
}