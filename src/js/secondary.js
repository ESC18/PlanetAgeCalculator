//BUSINESS LOGIC ______________________________________________________________________________________________________________

export function planetAgeCalc (currentAge, pastAge, planetMult) {
    if (pastAge > 0) {
        let x = currentAge - pastAge;
        return (x * 365) / planetMult;
    }
    return ((currentAge * 365) / planetMult);
}

//UI LOGIC ____________________________________________________________________________________________________________________

function displayInfo (currentAge, pastAge, planetMult, innerText) {
    let result = planetAgeCalc (currentAge, pastAge, planetMult);
    let resultDiv = document.getElementById("resultDiv");
    resultDiv.innerText = parseFloat(result).toFixed(3) + " Years";
}


function initializer () {
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener('click', function () {
            let currentAgeInput = document.getElementById("currentAge").value;
            let pastAgeInput = document.getElementById("pastAge").value;
            let titleDiv = document.getElementById("titleDiv");
            displayInfo(currentAgeInput, pastAgeInput, this.value, this.innerText);
            titleDiv.innerText = this.innerText;
            titleDiv.style.color = this.getAttribute('data-color');
        });
    });
}

initializer ();

//_____________________________________________________________________________________________________________________________