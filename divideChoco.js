/*The problem asks us to divide the chocolate in a clever way in order to 
        maximize the sweetness we can get, since our friends are greedy and 
        always take the sweetest chunks. In essence, it is asking for the 
        maximum of the minimum sum of continuous subarrays, since we always get 
        the least sweet piece, which have the least sweet chunks (minimum sum of 
        continuous subarray) as compared to our friend's, and we want to find 
        the maximum we can get among all the dividing strategies.  
        
        The function divides the given chocolate into a number of pieces, so 
            that there must be at least one piece with a total sweetness less 
            than or equal to the given target*/

var maximizeSweetness = function (sweetness, K) {
    if ((sweetness.length + 1) == K) return Math.min(...sweetness);

    let lo = Math.min(...sweetness);
    let hi = sweetness.reduce((a, b) => a + b, 0) / (K + 1)

    while (lo < hi) {
        /* 
        the desired total sweetness must fall in the range from the minimum 
        sweetness to the average sweetness of the (K + 1) pieces - if we are 
         dumb enough to cut the least sweet chunk as a piece by itself, its 
         total sweetness is the sweet level of that single chunk; if we are 
         lucky enough that the sweetness is evenly distributed throughout the 
         chocolate bar, we can make even cuts so we have the same amount of 
         sweetness with our greedy friends. The real life is somewhere in 
         between, and we always hope for the best, so we move towards the 
         lucky side as much as we can
        */
        let target = Math.floor((lo + hi + 1) / 2)
        //# try a number in the middle tentatively
        let count = 0;
        let sum = 0
        for (let chunk of sweetness) {
            sum += chunk;
            if (sum >= target) {
                //if the current piece has a total greater than or equal to the  given target, make a cut
                count++;
                sum = 0
            }
        }
        console.log('count', count, target)
        console.log('low', lo, 'high', hi)
        /*if it results in less than K + 1 chunks, some of our friends 
        cannot get a piece and may get mad, so we decrease the sweetness 
        we get to make our friends happy */
        if (count < (K + 1)) {
            hi = target - 1
            //therwise, we try to increase the sweetness (sneakily) as much as 
            // we can right before being exposed...
        } else {
            lo = target
            //this is the most we can get before being exposed...
        }

    }
    return lo
}

console.log(maximizeSweetness([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));

