//This is a secondary JS file - you can rename it as you wish - just make sure to correctly import it into
//Index.JS file. Here is an example of exporting:
/*
//CLASS/CONSTRUCTOR:
export default class Blank {
    constructor(here,there) {
        this.here = here;
        this.there = there;
    }
}
//OBJECT PROTOTYPE FUNCTION:
    hereBlank() {
        return this.here * this.there;
    }
*/

function planetAgeCalc (currentAge, pastAge, planetMult) {
    if (pastAge) {
        let x = currentAge - pastAge;
        return x * planetMult;
    }
    return currentAge * planetMult;
}





function displayInfo (currentAge, pastAge, planetMult) {
    let result = planetAgeCalc (currentAge, pastAge, planetMult);
}




function initializer () {
    let currentAgeInput;
    let pastAgeInput;
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener('click', function () {
            displayInfo(currentAgeInput, pastAgeInput, this.value);
        });
    });
}
