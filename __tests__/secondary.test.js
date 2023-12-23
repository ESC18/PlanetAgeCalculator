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
    test("The planetAgeCalc should take in TWO positive values, the current age of the user and the planet Multiplier", () => {
        const result = planetAgeCalc(10,0,87.97);
        expect(parseFloat(result.toFixed(3))).toEqual(41.491);
    });
    test("The planetAgeCalc should take in THREE positive values, the current age of the user, a past age, and the planet Multiplier", () => {
        const result = planetAgeCalc(10,5,87.97);
        expect(parseFloat(result.toFixed(3))).toEqual(20.746);
    });
    test("The planetAgeCalc should take in ONE or more NEGATIVE values, and respond with the appropiate error message", () => {
        expect(() => planetAgeCalc(-10, -5, 87.97)).toThrowError("Invalid Number: Numbers must be positive.");
    });
    test("The planetAgeCalc should take in TWO numbers from the user that both equal ZERO and provide proper output", () => {
        const result = planetAgeCalc(0,0,87.97);
        expect(parseFloat(result.toFixed(3))).toEqual(0);
    });
    test("The planetAgeCalc should take in numbers from the user that are incredibly high and be able to process them", () => {
        const result = planetAgeCalc(1000000,0,87.97);
        expect(parseFloat(result.toFixed(3))).toEqual(4149141.753);
    });
    test("The planetAgeCalc should take in numbers from the user that include decimals and will still function properly", () => {
        const result = planetAgeCalc(100.55,0,87.97);
        expect(parseFloat(result.toFixed(3))).toEqual(417.196);
    });
})