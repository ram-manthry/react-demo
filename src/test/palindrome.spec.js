const { isPalindrome } = require('../palindromeChecker')
describe('palindrome tests', function() {
    it('when empty returns true', function() {
        expect(true).toBe(isPalindrome(""))
    })
})