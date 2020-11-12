const expect = require("chai").expect; 
const negative= require("../static/track.js"); 


// test for a negative number 
describe('test the negative function', function() {
    it('should be true when number is negative', function() {
        expect(negative.negative(-1, 2)).to.equal(true); 
    });
});
