//settiamo il valore del nostro index a 0
//iniziamo il for < 100
for (let index = 0; index <=  100; index++) {
    if (index % 3 == 0 && index % 5 == 0) { //se index è div per 3 e 5 allora stampiamo both
       console.log('FizzBuzz'); 
    } else if (index % 3 == 0) { //se index è div per 3 stampiamo fizz
        console.log('Fizz');
    } else if (index % 5 == 0) { //se index è div per 5 stampiamo buzz
        console.log("Buzz");
    } else { //altrimenti stampiamo il numero normale
        console.log(index);
    }
}

