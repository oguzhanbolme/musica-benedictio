export default function shortenText(text = '', limit = 17) {
    if (text.length <= limit) return text

    return `${text.slice(0, limit)}...`
}
