const expect = require('chai').expect
const fibonacci = require('../src/fibonacci')

describe('#fibonacci()', () => {
    context('Input is less than zero (< 0)', () => {
        it('Returns false', () => {
            expect(fibonacci(-1)).to.equal(false)
        })
    });

    context('Input is more than zero (> 0)', () => {
        it('Returns the correct fibonacci value in the sequence', () => {
            expect(fibonacci(2)).to.equal(1)
            expect(fibonacci(10)).to.equal(55)
            expect(fibonacci(20)).to.equal(6765)
        })
    })
})