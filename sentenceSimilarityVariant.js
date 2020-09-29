/* Google | Phone screen | Sentence similarity (variant) https://leetcode.com/discuss/interview-question/698670/Google-or-Phone-screen-or-Sentence-similarity-(variant)-June-2020-Reject
Question
Given a list of synonym pairs, write a function to determine which pairs of sentences in an input list of such queries are synonyms. Two sentences are synonyms if their words are equal or synonyms in order.
= = => similar this problem https://leetcode.com/problems/sentence-similarity-ii/
Example
Input
synonym_pairs: [('great', 'good'), ('great', 'excellent'), ('good', 'fine')]
sentence_pairs: [('Google is a good company', 'Google is a great company'), ('My performance is bad', 'My performance is poor')]
Output
result: [True, False]
*/
const areSentencesSimilarTwo = function (synonymPairs, sentencePairs) {
    let graph = {}, result = [];
    for (let pair of synonymPairs) {
        for (const p of pair) {
            if (!graph[p]) {
                graph[p] = []
            }
        }
        graph[pair[0]].push(pair[1])
        graph[pair[1]].push(pair[0])
    }

    for (let [sent1, sent2] of sentencePairs) {
        let sentOne = sent1.split(' '), sentTwo = sent2.split(' '), match = false;
        if (sentOne.length !== sentTwo.length) {
            result.push(false)
            continue
        }
        for (let i = 0; i < sentOne.length; i++) {
            let w1 = sentOne[i], w2 = sentTwo[i];
            if (w1 == w2) continue
            let seen = new Set()
            let stack = [w1];
            match = false;
            while (stack.length) {
                let word = stack.pop()
                if (word == w2) {
                    match = true;
                    break;
                }
                if (word in graph) {
                    for (let nei of graph[word]) {
                        if (!seen.has(nei)) {
                            stack.push(nei)
                            seen.add(nei)
                        }
                    }
                }
            }
        }
        match ? result.push(true) : result.push(false)

    }
    return result;
}

console.log(areSentencesSimilarTwo([['great', 'good'], ['great', 'excellent'], ['good', 'fine']],
    [['Google is a good company', 'Google is a great company'], ['My performance is bad', 'My performance is poor']]))
