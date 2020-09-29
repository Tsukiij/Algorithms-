//https://leetcode.com/problems/valid-parentheses/

var isValid = function (s) {

    const brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    const openingBrackets = Object.keys(brackets)
    const stack = [];

    for (const current of s) {

        // Add to stack if opening bracket
        if (openingBrackets.includes(current)) {
            stack.push(current);
        } else {
            // Compare closing bracket with last open on stack
            const last = stack[stack.length - 1]
            if (brackets[last] === current) {
                stack.pop();
            } else {
                // False for mismatched bracket
                return false;
            }
        }
    }

    // Valid if all brackets accounted for
    return stack.length === 0
};
