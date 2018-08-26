function fibonacci(position) {
    function f(pos) {
        if (pos < 0) return false

        else if (pos < 2) return pos

        else return f(pos - 1) + f(pos - 2)
    }

    return f(position)
}

module.exports = fibonacci