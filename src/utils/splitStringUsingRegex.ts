export function splitTheWord(word: string): string[] {
    if (word.length > 0) {
        return word.split('')
    }
    return []
}