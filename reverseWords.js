const message = ['c', 'a', 'k', 'e', ' ',
    'p', 'o', 'u', 'n', 'd', ' ',
    's', 't', 'e', 'a', 'l'];

function reverseWords(msg) {
    const reverseStr = (arr, l, r) => {
        while (l < r) {
            let temp = msg[l];
            msg[l] = msg[r];
            msg[r] = temp;
            l++;
            r--;
        }
    }

    reverseStr(msg, 0, msg.length - 1) // reverse whole arr, 
    l = 0;  //then find indiv words and reverse order to correct order
    for (let i = 0; i <= msg.length; i++) {
        if (i == msg.length || msg[i] == ' ') {
            reverseStr(msg, l, i - 1)
            l = i + 1;
        }
    }

    console.log(msg)
}

reverseWords(message)

//console.log(message.join(''));
// Prints: 'steal pound cake'


/*
https://www.interviewcake.com/question/javascript/merging-ranges?course=fc1&section=array-and-string-manipulation
JavaScript
Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.
For example, given:
  [
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]
return:
  [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 },
]

JavaScript
Do not assume the meetings are in order. The meeting times are coming from multiple teams.
Write a solution that's efficient even when we can't put a nice upper bound on the numbers representing our time ranges. Here we've simplified our times down to the number of 30-minute slots past 9:00 am. But we want the function to work even for very large numbers, like Unix timestamps. In any case, the spirit of the challenge is to merge meetings where startTime and endTime don't have an upper bound.*/
function mergeRanges(meetings) {
    meetings.sort((a, b) => a.startTime - b.startTime);
    let res = [];
    for (let meeting of meetings) {
        if (res.length && res[res.length - 1].endTime >= meeting.startTime) {
            let toMerge = res.pop()
            toMerge.endTime = Math.max(meeting.endTime, toMerge.endTime)
            res.push(toMerge)
        } else {
            res.push(meeting)
        }
    }
    console.log(res)
    return res;
}

mergeRanges([
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9, endTime: 10 },
])
mergeRanges([{ startTime: 1, endTime: 5 }, { startTime: 2, endTime: 3 }])
mergeRanges([{ startTime: 1, endTime: 2 }, { startTime: 2, endTime: 3 }])
mergeRanges([
    { startTime: 1, endTime: 10 },
    { startTime: 2, endTime: 6 },
    { startTime: 3, endTime: 5 },
    { startTime: 7, endTime: 9 },
])