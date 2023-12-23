import planetAgeCalc from "../src/js/secondary.js";

describe("planetAgeCalc", () => {
  let birthdate;

  beforeEach(() => {
    birthdate = new Date(1990, 0, 1); 
  });

  test("should calculate age with positive inputs", () => {
    const result = planetAgeCalc(birthdate, 0, 87.97);
    expect(result).toBeGreaterThan(141);
  });

  test("should calculate age with a past age", () => {
    const result = planetAgeCalc(birthdate, 5, 87.97);
    expect(result).toBeGreaterThan(120);
  });

  test("should throw an error for negative values in current age", () => {
    expect(() => planetAgeCalc(-10, -5, 87.97)).toThrowError(
      "Invalid Number: Input must be positive."
    );
  });

  test("should throw an error if birthdate is not provided", () => {
    expect(() => planetAgeCalc()).toThrowError(
      "Invalid Input: Please enter date."
    );
  });
});


//Datetime is quite difficult to test, since it is constantly changing and you cannot have any form of fixed values. 
//To counter this issue, I used the greater than expectancy.
//If this does not meet requirements, you can go back to the commit "bb1dcd5" which runs on the original setup that does NOT use datetime.