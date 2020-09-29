//Bloomberg | Phone Screen | Candy Crush 1D
//Given a string, reduce the string by removing 3 or more consecutive identical characters. You should greedily remove characters from left to right.
/*
Input: "aaabbbc"
Output: "c"
Explanation:
1. Remove 3 'a': "aaabbbc" => "bbbc"
2. Remove 3 'b': "bbbc" => "c" 
Input: "aabbccddeeedcba"
Output: ""
"Input: "aabbbacd"
Output: "cd"
Input: "aaabbbacd"
Output: "acd"
Explanation:
1. Remove 3 'a': "aaabbbacd" => "bbbacd"
2. Remove 3 'b': "bbbacd" => "acd"
*/
// function candyCrush1D(str) {
//     let count = 0
//     let start = 0
//     let end = 0
//     while (end < str.length) {
//         let target = str[start]
//         while (target === str[end]) {
//             count++
//             end++
//         }
//         if (count >= 3) {
//             newStr = str.slice(0, start) + str.slice(end)
//             start = 0;
//             end = 0;
//             count = 0;
//         } else {
//             count = 0
//             start++
//             end = start
//         }
//     }
//     return str
// }

function candyCrush1D(str) {
    if (!str) return str;

    let start = 0;
    let end = 0;
    let count = 0;
    while (end < str.length) {
        let char = str[start];
        if (char === str[end]) {
            count++;
            end++
        } else {
            if (count < 3) {
                start = end;
                count = 0;
            } else {
                str = str.slice(0, start) + str.slice(end);
                start = 0;
                end = 0;
                count = 0;
            }
        }
    }
    if (count >= 3) return ''
    return str;
}

console.log(candyCrush1D('aabbbacd'))
console.log(candyCrush1D('aaabbbc'))

console.log(candyCrush1D("aabbbacd")) //"cd"
console.log(candyCrush1D("baaabbbabbccccd")) // == "abbd"
console.log(candyCrush1D("")) // == ""
console.log(candyCrush1D("bbbbbbb")) // ""
candyCrush1D("aaabbbacd") // "acd"
console.log(candyCrush1D("ccddccdcaacabbbaaccaccddcdcddd")) // ""


["RandomizedSet","insert","insert","remove","insert","insert","insert","remove","remove","insert","remove","insert","insert","insert","insert","insert","getRandom","insert","remove","insert","insert"]
            [[],    [3],    [-2],   [2],    [1],        [-3],   [-2],   [-2],   [3],    [-1],       [-3],   [1],        [-2],   [-2],   [-2],   [1],    [], [-2],[0],[-3],[1]]
            [null,  true,   true,   false,  true,   true,     false,    true,   true,   true,       true,   false,      true,   false,  false,  false,  -1, false,false,true,false]