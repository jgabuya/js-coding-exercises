/***
 * "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."
 *
 * Write a function that, given a sentence like the one above, along with the position of an opening
 * parenthesis, finds the corresponding closing parenthesis.
 *
 * Example: if the example string above is input with the number 10 (position of the first parenthesis), the
 * output should be 79 (position of the last parenthesis).
 *
 * https://www.interviewcake.com/question/javascript/matching-parens
 */
function findParenthicalPair(str, openPosition) {
    const stack = []

    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i)

        if (char === '(') {
            // push to stack
            stack.push(i)
        } else if (char === ')') {
            // pop the stack
            if (stack.pop() === openPosition) return i
        }
    }

    return -1
}

module.exports = findParenthicalPair