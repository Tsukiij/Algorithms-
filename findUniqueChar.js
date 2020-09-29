//https://leetcode.com/problems/first-unique-character-in-a-string/
/**
-a-string/
(But, return type is the char, also some extra cases like string has numbers, special chars, 
    upper and lower alphabets. He told me to not consider numbers and special characters for the process 
    and then expected to return the character itself, so A and a are different characters for returning but 
    same while counting the frequency.
*/
//original problem solution where u just return index and str is all lowercase
var firstUniqChar1 = function (s) {
    let freq = {};
    for (const char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }
    for (let i = 0; i < s.length; i++) {
        let currentChar = s.charAt(i);
        if (freq[currentChar] == 1) return i;
    }
    return -1;
}


//for the added restrictions;
function firstUniqChar(s) {
    let freq = new Array(27).fill(0);
    let lowerStr = s.toLowerCase();

    for (let i = 0; i < lowerStr.length; i++) {
        if (lowerStr.charCodeAt(i) - 96 > 0 && lowerStr.charCodeAt(i) - 96 < 27) {
            //check to see if the char is not a number of special character
            freq[lowerStr.charCodeAt(i) - 96]++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (freq[s.charCodeAt(i) - 96] == 1)
            return i;
    }
    return -1;
}

//better way then having - 96 all over the place
function firstUniqChar(s) {

    let lowerStr = s.toLowerCase();
    let alphabetSet = new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g',
        'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'u', 'v', 'w', 'x', 'y', 'z'])

    let freq = {}
    for (let i = 0; i < lowerStr.length; i++) {
        let curChar = lowerStr[i];
        if (alphabetSet.has(curChar)) {
            freq[curChar] ? freq[curChar]++ : freq[curChar] = 1;
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (freq[s[i]] == 1)
            return i; //or return s[i]
    }
    return -1;
}
/*That code will look cleaner than random numbers like 96 everywhere
But of course you should talk out loud why you’re doing it that way
Versus using letter subtraction

here time is n+n = 2n => O(n) for the string length
space is O(n) for the hash map,

The set is O(26)
Which is same as O(1)
Which is less than O(n)
So it doesn’t matter
Not because it’s unchanging

Because it’s 26 at most
Since we know there’s a limit of 26 here It’s considered constant
The set is constant because in this case it only has 26 letters At most
*/