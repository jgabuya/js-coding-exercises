const expect = require('chai').expect
const arrayContainsAddends = require('../src/array-contains-addends')

describe('#arrayContainsAddends', () => {
    context('Array input contains at least 1 negative number', () => {
        it('Returns false', () => {
            expect(arrayContainsAddends(10, [-1, 2, 3, 4, 5])).to.equal(false)
        })
    })

    context('Sum input is <= zero', () => {
        it('Returns false', () => {
            expect(arrayContainsAddends(0, [1, 2, 3, 4, 5])).to.equal(false)
        })
    })

    context('All inputs are valid, array input does not contain addends', () => {
        it('Returns an empty array', () => {
            expect(arrayContainsAddends(10, [1, 2, 3, 4, 5])).to.be.an('array').that.is.empty
        })
    })

    context('All inputs are valid, array input contains addends', () => {
        it('Returns arrays of indices', () => {
            expect(arrayContainsAddends(10, [1, 2, 3, 4, 5, 6, 7])).to.have.deep.members([ [2, 6], [3, 5] ])
        })
    })
})