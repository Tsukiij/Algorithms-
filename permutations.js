var permute = function (nums, n = 0) {
    let output = []

    let dfs = (curr, remain) => {
        if (!remain.length) {
            output.push(curr)
            return;
        }
        for (let i = 0; i < remain.length; i++) {
            dfs([...curr, remain[i]], [...remain.slice(0, i), ...remain.slice(i + 1)]);
        }
    }

    dfs([], nums);
    return output;
};


console.log(permute([1, 2, 3]))

function permutations(str) {
    let output = [];

    let dfs = (curr, remain) => {
        if (!remain.length) {
            output.push(curr);
        }
        for (let i = 0; i < remain.length; i++) {
            dfs((curr + remain[i]), (remain.slice(0, i) + remain.slice(i + 1)))
        }
    }

    dfs('', str);
    return output
}
console.log(permutations('one'))
