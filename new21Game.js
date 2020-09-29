//https://leetcode.com/problems/new-21-game/
/*
Here’s another way to look at the solution given
Start with 1
What’s the probability you will get to 1
It’s 1/10 right
So dp[1] is 0.1

Now 2
You can either get there from 1 or from 0
1/10* 1/10 from 1
From 0 is 1/10
dp[2] = dp[1] * 0.1 + dp[0] * 0.1
Where dp0 is 1 => just makes the math work (Because you start at 0, Dp0 is 100%
                                            You’ll always start from 0 100% of the time)
So for 3 it’s the same thing
You can get there from 0,1,2
With 0.1 chance each
So dp3 = (dp1 + dp2 + dp3) * 0.1
You can also expand that out
So once you get your dp all the way to 21
Then you can compare how many are less than N
like dp15 is (dp5 ... dp14 ) * 0.1
You can get 15 from 5 to 14
But let’s say for 21
You can only get it from 11-17
Since if you hit 18 you have to stop
Or whatever the rule is
                                            */

const new21Game = (N, K, W) => {
    if (K === 0 || N >= K + W) return 1;

    let sum = 1;
    let ans = 0;
    const dp = [];
    dp[0] = 1;
    for (let i = 1; i <= N; i++) {
        dp[i] = sum / W;

        if (i < K) {
            sum = sum + dp[i];
        } else {
            ans = ans + dp[i];
        }

        if (i - W >= 0) {
            sum = sum - dp[i - W];
        }
    }
    return ans;
};

new21Game(6, 1, 10);