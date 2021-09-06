
// eslint-disable-next-line import/no-anonymous-default-export
export default function(
    word: String | null,
    length: Number
) {
    if(!word)
        return;
    if(word.length < length)
        return word
    else
        return word.trim().slice(0, length as number) + "..."
}
