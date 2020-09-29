//1.1
function isUnique(string) {
    let freq = {}
    for (let char in string) {
        freq[char] = (freq[char] || 0) + 1
        if (freq[char] > 1) {
            return false
        }
    }
    return true
}

//1.3

function URLify(string) {
    let arr = string.split('')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == ' ') {
            arr[i] = '%20'
        }
    }
    return arr.join('')
}

function alphaCode() {
    let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
        'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'u', 'v', 'w', 'x', 'y', 'z']
    arr.forEach(char => console.log(char.charCodeAt() - 96))
}

alphaCode()