/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    const chains = new Map();  // Stores the max chain length for each word
    const sortedWords = words.slice().sort((a, b) => a.length - b.length);  // Sort words by length

    for (const word of sortedWords) {
        chains.set(word, 1);  // Initialize the chain length for the current word

        for (let i = 0; i < word.length; i++) {
            const pred = word.slice(0, i) + word.slice(i + 1);  // Generate predecessor by removing one character
            if (chains.has(pred)) {
                chains.set(word, Math.max(chains.get(word) || 0, chains.get(pred) + 1));
            }
        }
    }

    return Math.max(...Array.from(chains.values()));  // Return the maximum chain length    
};
