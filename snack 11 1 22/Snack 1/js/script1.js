console.log ('JS OK');

// L'uente inserisce due numeri in successione ... la console restituisce il maggiore


// const Numb1 = prompt ('Inserisci un numero');
// console.log (Numb1);

// const Numb2 = prompt ('Inserisci un altro numero');
// console.log (Numb2);

// let message;

// if (Numb1 > Numb2){
//     message = ('Il primo è il numero più alto');
// }
// else if (Numb1 < Numb2){
//     message = ('Il secondo è il numero più alto');
// }
// else{
//     message = ('Nessuno dei due numeri è il più alto');
// }

// console.log (message)

// Correzione
//ES 1
const Numb1 = parseInt(prompt('Inserisci un numero'));
const Numb2 = parseInt(prompt('Inserisci un altro numero'));

console.log ('primo numero', Numb1);
console.log ('secondo numero', Numb2);

let message = ' Il numero maggiore è '



// // validare per avere due numeri che si possano calcolare

if (isNaN (Numb1) || isNaN (Numb2)){
    message = 'Uno dei due numeri non è valido! Inserisci un numero valido bestia!';
}
else{ //questo else era per non mettere il messaggio dei numeri anche nel isNaN
    if (Numb1 > Numb2){
         message +=  Numb1; //nel messaggio il += lo abbiamo messo per semplificare il codice e non essere ripetitivi
    }
    else if (Numb1 < Numb2){
         message += Numb2;
    }
    else{
         message = ' I numeri sono uguali ';
    }
}

console.log (message);

// // per stampare sulla pagina: document.getElementById ('Inserire l'id')

// // per semplificarlo cottere il const insieme agli altri e poi alla fine mettere documentElement.innerText = message così da scrivere il messaggio su pagina
