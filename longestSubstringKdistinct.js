/* class LongestSubstringKDistinct {
    public static int findLength(String str, int k) {
        int windowStart = 0, maxLength = 0;
        Map < Character, Integer > charFrequencyMap = new HashMap<>();
        for (int windowEnd = 0; windowEnd < str.length(); windowEnd++) {
            char rightChar = str.charAt(windowEnd);
            charFrequencyMap.put(rightChar, charFrequencyMap.getOrDefault(rightChar, 0) + 1);

            while (charFrequencyMap.size() > k) {
                char leftChar = str.charAt(windowStart);
                charFrequencyMap.put(leftChar, charFrequencyMap.get(leftChar) - 1);
                if (charFrequencyMap.get(leftChar) == 0) {
                    charFrequencyMap.remove(leftChar);
                }
                windowStart++;
            }
            maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
        } */
//['aaahhbic', 2]

function LongestSubstringKDistinct(str, k) {
    let windowStart = 0, maxLength = 0;
    let charFrequencyMap = {}
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        let rightChar = str[windowEnd]
        if (rightChar in charFrequencyMap) {
            charFrequencyMap[rightChar]++
        } else {
            charFrequencyMap[rightChar] = 1
        }
        //if hash map has more than two keys shrink the window
        while (Object.keys(charFrequencyMap).length > k) {
            let leftChar = str[windowStart]
            charFrequencyMap[leftChar] -= 1
            if (charFrequencyMap[leftChar] === 0) {
                delete charFrequencyMap[leftChar]
            }
            windowStart++
        }
        //update the maxlength if needed
        maxLength = Math.max(maxLength, (windowEnd - windowStart + 1))
    }
    return maxLength
}

console.log(LongestSubstringKDistinct('aaahhbic', 2))