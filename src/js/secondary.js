//BUSINESS LOGIC ______________________________________________________________________________________________________________

export function planetAgeCalc(currentAge, pastAge, planetMult) {
    if (currentAge < 0 || pastAge < 0) {
        throw new Error("Invalid Number: Numbers must be positive.")
    }
    else if (pastAge > 0) {
        let x = currentAge - pastAge;
        return (x * 365) / planetMult;
    }
    return ((currentAge * 365) / planetMult);
}

//UI LOGIC ____________________________________________________________________________________________________________________

function displayInfo(currentAge, pastAge, planetMult) {
    let resultDiv = document.getElementById("resultDiv");
    try {
        resultDiv.style.color = "white";
        resultDiv.style.fontSize = "50px";
        resultDiv.style.top = "94%";
        let result = planetAgeCalc(currentAge, pastAge, planetMult);
        resultDiv.innerText = parseFloat(result).toFixed(3) + " Years";
    } catch (error) {
        resultDiv.style.color = "red";
        resultDiv.style.fontSize = "15px";
        resultDiv.style.top = "91.7%";
        resultDiv.innerText = "Error: " + error.message;
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