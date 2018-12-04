const helpers = require('./helper.js');

describe('helpers library', () => {
    
    describe('add function', () => {
        it('can add two numbers', () => {

        });
        //low hanging fruit
        //obvious happy path
        //obvious sad path
        //edge/corner cases
    });
    describe('areSameLength function', () => {
        
    it('should return true when called with strings of the same length', () =>{
        expect(helpers.areSameLength('a', 'a')).toBe(true);
    });

    it('should return false when called with strings of differnt length', () =>{
        expect(helpers.areSameLength('a', 'ab')).toBe(false);
    });

    it('should return null when any of the arugments are not strings', () =>{
        expect(helpers.areSameLength(null, 'a')).toBe(null);
        expect(helpers.areSameLength([], 'a')).toBe(null);
        expect(helpers.areSameLength(1, 'a')).toBe(null);
        expect(helpers.areSameLength('1', NaN)).toBe(null);
        expect(helpers.areSameLength(1, {})).toBe(null);
    });

    it('should return null when any of the arugments are not strings', () =>{
        expect(helpers.areSameLength()).toBe(null);
        expect(helpers.areSameLength('a')).toBe(null);
        expect(helpers.areSameLength('a', null)).toBe(null);
        expect(helpers.areSameLength('a', undefined)).toBe(null);
        expect(helpers.areSameLength(0, 'a')).toBe(null);
    });

    // check for different length strings
    // it's not a string
    //passing null or underfined
    //passing no arguments
    //passing non strings
        //passing numbers
        //passing arrays
        //passing objects
    });


});

