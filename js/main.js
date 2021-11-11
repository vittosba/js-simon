/**
 * Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri in pagina devono essere rimossi e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 */

// ref
const btnStart = document.querySelector('.start');
const display = document.querySelector('.timer');
const numbers = document.querySelector('.numbers');

btnStart.addEventListener('click', () => {
    numbers.innerHTML = '';
    display.innerHTML = '';

    btnStart.classList.add('d-none');
    display.classList.remove('d-none');
    numbers.classList.remove('d-none');

    const randomNumber = [];
    for(let i = 0; i < 5; i++) {
        randomNumber.push(getRndInteger(1, 100));
        genScreenNumbers(i, randomNumber);
    }

    
    let seconds = 3;
    const timer = setInterval(() => {
        
        if(seconds === 0) {
            clearInterval(timer);

            btnStart.classList.remove('d-none');
            display.classList.add('d-none');
            numbers.classList.add('d-none');

            const numeriGiocatore = [];
            const numeriIndovinati = [];
            for(let i = 0; i < 5; i++) {
                numeriGiocatore.push(parseInt(prompt(`Inserisci il numero ${i+1}`)));
                console.log(numeriGiocatore[i]);
                if(randomNumber.includes(numeriGiocatore[i])) {
                    numeriIndovinati.push(numeriGiocatore[i]);
                }
            }
            
            console.log(`Hai indovinato ${numeriIndovinati.length} numeri:`);
            for(let i = 0; i < numeriIndovinati.length; i++) {
                console.log(numeriIndovinati[i]);
            }
        }
        else {
            display.innerHTML = seconds;
            seconds--;
        }
    }, 1000);
})






function genScreenNumbers(i, randomNumber) {
    const number = document.createElement('div');
    number.classList.add('number');
    number.append(randomNumber[i]);
    numbers.append(number);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }