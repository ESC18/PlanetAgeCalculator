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
    if (pastAge > 0) {
        let x = currentAge - pastAge;
        return (x * 365) / planetMult;
    }
    return (currentAge * 365) / planetMult;
}





function displayInfo (currentAge, pastAge, planetMult, innerText) {
    let result = planetAgeCalc (currentAge, pastAge, planetMult);
    console.log(result, innerText);
}




export function initializer () {
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener('click', function () {
            let currentAgeInput = document.getElementById("currentAge").value;
            let pastAgeInput = document.getElementById("pastAge").value;
            let titleDiv = document.getElementById("titleDiv");
            displayInfo(currentAgeInput, pastAgeInput, this.value, this.innerText);
            titleDiv.innerText = this.innerText;
        });
    });
}

initializer ();
