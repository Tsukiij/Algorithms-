/*Queue: Generate Binary Numbers from 1 to n
Input: A positive integer n
n = 3
Output: Returns binary numbers in the form of strings from 1 up to n
result = ["1","10","11"] */

function findBin(n) {
    let result = [];
    let queue = ['1'];
    for (let i = 0; i < n; i++) {
        result.push(queue.shift());
        const s1 = result[i] + '0';
        const s2 = result[i] + '1';
        queue.push(s1);
        queue.push(s2);
    }
    return result;
}

//turn char to 0-26 alphabet num in Java            //how to do it in javascript ASCII code of a starts at 97 to 122 for z
//let num = '1bc'.charAt(1) - 'a' => s.charCodeAt(i) - 96
console.log(findBin(3))
console.log(findBin(5))



function firstUniqChar(s) {
    let freq = new Array(27).fill(0);
    for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) - 96 > 0 && s.charCodeAt(i) - 96 < 27) {

            freq[s.charCodeAt(i) - 96]++;
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (freq[s.charCodeAt(i) - 96] == 1)
            return i;
    }
    return -1;
}

firstUniqChar("#leetcode")

function isAChar(ltr) {
    const letters = /^[A-Za-z]+$/;
    if (ltr.match(letters)) {
        return true;
    }
    return false;
}

console.log("a".charCodeAt(0))
console.log("z".charCodeAt(0))

