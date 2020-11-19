
const expect = require("chai").expect; 
const negative = require("../static/feature.js"); 
const less = require("../static/feature.js");
const empty = require("../static/feature.js");


// test for a negative number 
describe('test the negative function', function() {
    //first parameter test
    it('should be true when number is negative', function() {
        expect(negative.negative(-1, 2)).to.equal(true); 
    });
    //second parameter test
    it('should be second parameter is negative', function(){
        expect(negative.negative(1,-4)).to.equal(true);
    });
});

//test if intake is less than goal
describe('test the less function', function() {
    it('should be true when intake less than goal', function() {
        expect(less.less(4, 2)).to.equal(true);
    });
    
});

//test if name or intake or goal is empty
describe('test the empty function', function() {
    it('should be true when name, intake, or goal is empty', function() {
        expect(empty.empty(null, null, null)).to.equal(true);
    });
    
});


