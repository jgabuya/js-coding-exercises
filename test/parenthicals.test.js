const expect = require('chai').expect
const findParenthicalPair = require('../src/parenthicals')

describe.only('#parenthicals', () => {
    const testStr = 'Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing';

    context('Input index is less than zero', () => {
        it('Returns -1', () => {
            expect(findParenthicalPair(testStr, -1)).to.equal(-1);
        })
    })

    context('Parenthesis at given index doesn\'t have a pair', () => {
        it('Returns -1', () => {
            const testStr = '(Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing';

            expect(findParenthicalPair(testStr, 0)).to.equal(-1);
        })
    })

    context('Parenthesis at given index has a pair', () => {
        it('Returns the position of pair', () => {
            expect(findParenthicalPair(testStr, 10)).to.equal(79);
        })
    })
})