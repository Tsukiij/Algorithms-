//https://leetcode.com/explore/interview/card/bloomberg/70/trees-and-graphs/381/

var isValidBST = function (root) {
    return helper(root, null, null);
};

function helper(node, lower, upper) {
    if (node == null) return true;
    let val = node.val;
    if (lower != null && val <= lower) return false;
    if (upper != null && val >= upper) return false;

    if (!helper(node.right, val, upper)) return false;
    if (!helper(node.left, lower, val)) return false;
    return true;
}
//iterative
var isValidBST = function (root) {
    let stack = [[root, -Infinity, Infinity]];
    let upper = null; let lower = null;
    while (stack.length) {
        let [node, lower, upper] = stack.pop();
        if (node == null) continue;
        if (upper !== null && node.val >= upper) return false;
        if (lower !== null && node.val <= lower) return false;
        stack.push([node.left, lower, node.val]);
        stack.push([node.right, node.val, upper]);
    }
    return true
}