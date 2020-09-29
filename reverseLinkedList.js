/*
Part 1:
const nums = mkNode(1, mkNode(2, mkNode(3)))
logReverse(nums)
3
2
1
https://gist.github.com/oliviasztanga/eb8ccaadf108af130dc71b53861f43fa
Part 2:
const nums = mkNode(1, mkNode(2, mkNode(3)))
const reversed = reverse(nums)
const reversed = reverse(nums)
console.log(reversed)
{ value: 3, next: { value: 2, next: { value: 1, next: null } } } */

const mkNode = (value, next = null) => ({ value, next })
const nums = mkNode(1, mkNode(2, mkNode(3)))

function logReverse(list) {
    if (!list) return
    logReverse(list.next)
    console.log(list.value)
}

function reverse(oldList, newList = null) {
    if (!oldList) return newList
    const newerList = mkNode(oldList.value, newList)
    return reverse(oldList.next, newerList)
}

function reverse2(list) {
    const go = (oldList, newList) => {
        if (!oldList) return newList;
        const newerList = mkNode(oldList.value, newList)
        return go(oldList.next, newerList)
    }
    return go(list, null)
}

logReverse(nums)
const reversed = reverse2(nums)
console.log(reversed)