/*Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.
Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.
The order of output does not matter. */
// s: "cbaebabacd" p: "abc"
//Output: [0, 6]
//s: "abab" p: "ab"
//Output:[0, 1, 2]

function findAnagrams(s, p) {
    if (!s || s.length < p.length) return [];
    const result = []
    let sortedP = p.split('').sort().join('')
    for (let i = 0; i <= s.length - p.length; i++) {
        let substri = s.slice(i, i + p.length)
        let sortedSubString = substri.split('').sort().join('')
        if (sortedSubString === sortedP) result.push(i)
    }
    return result
}

var findAnagrams1 = function (s, p) {
    if (!s || s.length < p.length) return [];

    // Result is the output array that stores start indices, 
    // freqMap maps each character in p to its count

    const result = [], freqMap = {};
    let count = 0, start = 0, end = 0;

    for (let char of p) {
        if (freqMap[char] === undefined) count++
        freqMap[char] = (freqMap[char] || 0) + 1
    }

    // Iterate over s using two pointers (start and end)
    while (end < s.length) {
        let char = s[end] // The 'current' character
        // If the current character exists in the frequency map, then decrement it's count
        // and if the count reaches 0, then we know we got the right # of occurences for it
        if (freqMap[char] !== undefined) {
            freqMap[char] -= 1
            if (freqMap[char] === 0) count--;
        }

        end++

        // Once we reach count = 0, then check to see if it is 
        // a valid anagram and move the window to the right
        while (count === 0) {
            let temp = s[start]
            if (freqMap[temp] !== undefined) {
                freqMap[temp] += 1
                if (freqMap[temp] > 0) count++
            }

            // If it is valid, then add the start index to the result
            if (end - start === p.length) result.push(start)
            start++
        }
    }

    return result
};
console.log(findAnagrams1("abab", 'ab'))
console.log(findAnagrams1("abcccccccbbbbbab", 'ab'))
console.log(findAnagrams1("cbaebabacd", 'abc'))
