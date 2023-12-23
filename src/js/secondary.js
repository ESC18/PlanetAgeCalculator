//BUSINESS LOGIC ______________________________________________________________________________________________________________

export function planetAgeCalc(currentAge, pastAge, planetMult) {
    if (parseFloat(currentAge) <= 999999999 || parseFloat(pastAge) <= 999999999) {
        if (currentAge < 0 || pastAge < 0) {
            throw new Error("Invalid Number: Input must be positive.")
        }
        else if (pastAge > 0) {
            let x = currentAge - pastAge;
            return (x * 365) / planetMult;
        }
        return ((currentAge * 365) / planetMult);
    } else {
        throw new Error("Invalid Number: Input must be less than or equal to 999999999");
    }
}

//UI LOGIC ____________________________________________________________________________________________________________________

function styleResultDiv(resultDiv, isError) {
    resultDiv.style.fontSize = isError ? "15px" : "45px";
    resultDiv.style.top = isError ? "91.7%" : "94%";
    resultDiv.style.color = isError ? "red" : "white";
}

function displayInfo(currentAge, pastAge, planetMult) {
    let resultDiv = document.getElementById("resultDiv");
    try {
        let result = planetAgeCalc(currentAge, pastAge, planetMult);
        let formattedResult = parseFloat(result).toLocaleString(undefined, { minimumFractionDigits: 3, maximumFractionDigits: 3 });
        resultDiv.innerText = formattedResult + " Years";
        styleResultDiv(resultDiv, false);
    } catch (error) {
        resultDiv.innerText = "Error: " + error.message;
        styleResultDiv(resultDiv, true);
    }
}


function initializer() {
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

initializer();

//_____________________________________________________________________________________________________________________________