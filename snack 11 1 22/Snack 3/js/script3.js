console.log ('JS OK');

// es 3 l'utente inserisce 10 numeri e la console ne restituisce la somma
// variabile per avere la somma

let sum = 0

// usare il ciclo for

for (let i = 0; i < 10; i++){
    const Numb = parseInt(prompt('Inserisci un numero'));
    sum = sum + Numb;
}

console.log ('somma finale: ', sum);
