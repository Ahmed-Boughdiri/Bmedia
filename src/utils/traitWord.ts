
export default function(
    word: String,
    length: Number
) {
    if(word.length < length)
        return word
    else
        return word.trim().slice(0, length as number) + "..."
}
