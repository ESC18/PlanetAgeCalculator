// Example of test below complete with import statement.
/*
import Blank from './../src/rectangle.js';

describe("Blank", () => {
    let blank; 
    
    beforeEach(() => {
        blank = new Blank(x,y);
    })

    test("blah blah blah blah blah", () => {
        expect(Blank.x).toEqual(xx);
        expect(Blank.y).toEqual(yy);
    });
})
*/

import { planetAgeCalc } from "../src/js/secondary.js";

describe("planetAgeCalc", () => {
    test("The planetAgeCalc should take in TWO values, the current age of the user and the planet Multiplier", () => {
        const result = planetAgeCalc(10,0,87.97);
        expect(parseFloat(result.toFixed(3))).toEqual(41.491);
    });
})