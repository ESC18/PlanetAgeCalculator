//BUSINESS LOGIC ______________________________________________________________________________________________________________

export default function planetAgeCalc(birthdateInput, pastAge, planetMult) {
    const birthdate = new Date(birthdateInput);
    const ageInYears = (Date.now() - birthdate.getTime()) / (365 * 24 * 60 * 60 * 1000);
    if (ageInYears <= 999999999 || parseFloat(pastAge) <= 999999999) {
        if (ageInYears < 0 || pastAge < 0) {
            throw new Error("Invalid Number: Input must be positive.")
        }
        else if (pastAge > 0) {
            let x = ageInYears - pastAge;
            return (x * 365) / planetMult;
        }
        return ((ageInYears * 365) / planetMult);
    }
    throw new Error("Invalid Input: Please enter date.")
}
//_____________________________________________________________________________________________________________________________