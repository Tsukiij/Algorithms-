/*
Dollar Words
(Warm-up) Assign a value to each English letter: ‘a’ is 1, ‘b’ is 2, ‘z’ is 26. Let the value of a
word be the sum of its letters’ values. A “dollar word” is worth exactly 100. Find the dollar
words of English.
ARM (32) to the value of BEND (25) and you get the value of ELBOW (57). Likewise, WHITE (65) plus HOUSE (68) 
equals GOVERNMENT (133). HAIR (8, 1, 9, 18) is a palindrome in this A to Z number system, as is
 INSULINS (9, 14, 19, 21, 12, 9, 14, 19). Add up the neighboring letter pairs in CAN (3 + 1, 1 + 14), and you’ll 
 get DO (4, 15). The letters in FOURTEEN DOZEN add up to 14 dozen (168). */

//[A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z]
/* 
ANNUALLY BOUNDARY CULTURE DRIZZLE
MITTENS MOODIEST NASTILY OUTSET
PAYPHONE PORTLAND PREVENT PRIMARY
PRINTER SESSION SOURCES STRESS
STYLES SWIMMER TATTOOED THIRTY
TOILETS TURKEY UNDRESS USELESS
WHENEVER WHISKING WHISTLES WEDNESDAY*/

function findDollarWords(arr) {
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let amount = {}
    for (let i = 1; i <= 26; i++) {
        amount[alphabet[i - 1]] = i;
    }
    let res = []
    for (let word of arr) {
        let amt = 0;
        for (let i = 0; i < word.length; i++) {
            let char = word.charAt(i)
            amt += amount[char];
            if (amt > 100) {
                break
            }
        }
        if (amt == 100) res.push(word)
    }
    return res
}


function test() {
    let arr = ['ANNUALLY', 'CONMAN', 'TRYING', 'BOUNDARY', 'CULTURE', 'DRIZZLE'];
    console.log("should return: ['ANNUALLY', BOUNDARY', 'CULTURE', 'DRIZZLE']", findDollarWords(arr))
}

function test2() {
    let arr = ['ZAC', 'JOKER', 'BATMAN', 'THIRTY', 'WACKJOB']
    console.log("should return: ['THIRTY']", findDollarWords(arr))
}

test()
test2()


function mergeArrays(arrA, arrB) {
    let res = [], idxA = 0, idxB = 0;
    while (idxA < arrA.length || idxB < arrB.length) {

        let elemA = idxA < arrA.length ? arrA[idxA] : Infinity;
        let elemB = idxB < arrB.length ? arrB[idxB] : Infinity;

        if (elemA < elemB) {
            res.push(elemA);
            idxA++
        } else {
            res.push(elemB);
            idxB++
        }
    }

    return res
}

const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]