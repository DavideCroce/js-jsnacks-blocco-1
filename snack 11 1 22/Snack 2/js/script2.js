console.log ('JS OK');

// ES 2 inserire 2 parole in successione e ristampare quella più lunga

const Word1 = prompt ('Inserisci una parola');
const Word2 = prompt ('Inserisci un altra parola');

console.log (Word1);
console.log (Word2);

let message = 'La parola più lunga è: '

// // Validazione

if( Word1.length === 0 || Word2.length === 0){
   message = 'Inserisci 2 parole o bigolo!'
}
else{
    if (Word1.length > Word2.length){
        message += Word1;
    }
    else if (Word1.length < Word2.length){
        message += Word2;
    }
    else{
        message = 'Le due parole hanno la stessa lunghezza';
    }
}


console.log (message);