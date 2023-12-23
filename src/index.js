//This is the main JS file - Not recommended to delete imports.
import './assets/images/SC.png';
import './assets/fonts.css';
import './css/styles.css';
import './css/rings.css';
import planetAgeCalc from './js/secondary';
//EX: import Blank from '/.js/secondary.js';

//UI LOGIC ____________________________________________________________________________________________________________________
//Originally the UI logic was in secondary.js, but Jest does not work with the dom very well despite having dependencies to counter this issue, so I was forced to move it here.

function styleResultDiv(resultDiv, isError) {
    resultDiv.style.fontSize = isError ? "15px" : "45px";
    resultDiv.style.top = isError ? "91.7%" : "94%";
    resultDiv.style.color = isError ? "red" : "white";
}

function displayInfo(birthdateInput, pastAge, planetMult) {
    let resultDiv = document.getElementById("resultDiv");
    try {
        let result = planetAgeCalc(birthdateInput, pastAge, planetMult);
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
        button.addEventListener('click', function (event) {
            event.preventDefault();
            let birthDateInput = document.getElementById("birthdate").value;
            let pastAgeInput = document.getElementById("pastAge").value;
            let titleDiv = document.getElementById("titleDiv");
            displayInfo(birthDateInput, pastAgeInput, this.value, this.innerText);
            titleDiv.innerText = this.innerText;
            titleDiv.style.color = this.getAttribute('data-color');
        });
    });
    document.getElementById("birthdate").addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    });
    document.getElementById("pastAge").addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    });
}

initializer();

