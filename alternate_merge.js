/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
 var mergeAlternately = function(word1, word2) {
    let result = '';
  const maxLength = Math.max(word1.length, word2.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < word1.length) {
      result += word1[i];
      
    }
    if (i < word2.length) {
      result += word2[i];
      
    }
  }

  return result;
};
const word1 = "abc";
const word2 = "12345";

const mergedWord = mergeAlternately(word1, word2);
console.log(mergedWord);