function arrayContainsAddends(sum, numbers = []) {
    if (sum <= 0 || numbers.length === 0) return false

    const results = []
    const complements = []

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) return false

        const compIndex = sum - numbers[i];

        if (compIndex < 0) continue

        if (typeof complements[compIndex] !== 'undefined') {
            results.push([complements[compIndex], i])
        } else {
            complements[numbers[i]] = i
        }
    }

    return results
}

module.exports = arrayContainsAddends