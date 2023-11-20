/* Il programma dovrà chiedere all'utente il suo nome e cognome, il numero di chilometri che vuole percorrere e l'età del passeggero. Sulla base di questeinformazioni dovrà calcolare il prezzo del viaggio, secondo queste regole:
Il prezzo del biglietto è definito in base ai km (0.21 € al km), va applicato uno sconto del 20% per i minorenni mentre, per gli over 65, uno sconto del 40%.
Il prezo finale poi dovrà uscire in forma umana, ovvero con massimo due decimali per indicare i centesimi sul prezzo. */

// Esecuzione
// Chiedo nome e cognome, il numero di km che il passeggero desidera percorrere e l'età
const inputName = document.querySelector(".user-name");
const inputKm = document.querySelector(".user-distance");
const inputAge = document.querySelector(".user-age");

console.log(inputName);
console.log(inputKm);
console.log(inputAge);

let userName;
let userKm;
let userAge;

//bottone
const sendButton = document.querySelector(".send");
sendButton.addEventListener ("click",

    function() {

        //Nome passeggero
        let userName = inputName.value;
        let userKm = parseInt(inputKm.value);
        let userAge = parseInt(inputAge.value);

        console.log("Nome e Cognome del passeggero:", userName);
        console.log("Km di viaggio:", userKm);
        console.log("Anni del passeggero:", userAge);

        const userNamefinal = document.querySelector(".passenger-final");
        userNamefinal.innerHTML = userName;

        //Generatore della carrozza
        const carriageFinal = document.querySelector(".carriage-final");
        userCarriage = Math.floor(Math.random() * 16 + 1);
        carriageFinal.innerHTML = userCarriage;

        //Generatore del treno
        const TrainFinal = document.querySelector(".train-final");
        userTrain = Math.floor(Math.random() * 1000 + 1);
        TrainFinal.innerHTML = userTrain;

        const userCostoBiglietto = parseFloat(userKm * 0.21);
        console.log("Prezzo del biglietto senza sconto", userCostoBiglietto.toFixed(2), "€");

        if (userAge < 18) {
            userSconto = 0.2;
            ScontoPrezzo = (userCostoBiglietto * userSconto);
        //Cliente over 65
        } else if (userAge > 65) {
            userSconto = 0.4;
            ScontoPrezzo = (userCostoBiglietto * userSconto);
        //Cliente prezzo standard
        } else {
            (userAge > 18 && userAge < 65);
            ScontoPrezzo = 0;
        }

        //Prezzo finale
        let userPrezzoFinale = parseFloat(userCostoBiglietto - ScontoPrezzo);
        const costFinal = document.querySelector(".cost-final");
        costFinal.innerHTML = userPrezzoFinale.toFixed(2), ("€");

        console.log("Il costo del biglietto", userPrezzoFinale.toFixed(2), "€");
    }

)