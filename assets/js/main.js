//prendiamo l'elemento ul dal DOM
const ulElement = document.querySelector("ul")

//settiamo il valore del nostro index a 0
//iniziamo il for < 100
for (let index = 1; index <=  100; index++) {
    if (index % 3 == 0 && index % 5 == 0) { //se index è div per 3 e 5 
        const liElement = document.createElement('li') //creiamo liELement che aggiunge li
        ulElement.append(liElement) //liElement aggiunge li dentro ulElement
        liElement.append('FizzBuzz') //ci scriviamo dentro FizzBuzz
        liElement.classList.add("square") //aggiungiamo classe square
        liElement.classList.add("fizzbuzz") //aggiungiamo classe fizzbuzz
        console.log('FizzBuzz'); 
    } else if (index % 3 == 0) { //se index è div per 3 stampiamo fizz
        const liElement = document.createElement('li') //creiamo liELement che aggiunge li
        ulElement.append(liElement) //liElement aggiunge li dentro ulElement
        liElement.append('Fizz') //ci scriviamo dentro Fizz
        liElement.classList.add("square") //aggiungiamo classe square
        liElement.classList.add("fizz") //aggiungiamo classe fizz
        console.log('Fizz');
    } else if (index % 5 == 0) { //se index è div per 5 stampiamo buzz
        const liElement = document.createElement('li') //creiamo liELement che aggiunge li
        ulElement.append(liElement) //liElement aggiunge li dentro ulElement
        liElement.append('Buzz') //ci scriviamo dentro Buzz
        liElement.classList.add("square") //aggiungiamo classe square
        liElement.classList.add("buzz") //aggiungiamo classe buzz
        console.log("Buzz");
    } else { //altrimenti stampiamo il numero normale
        const liElement = document.createElement('li') //creiamo liELement che aggiunge li
        ulElement.append(liElement) //liElement aggiunge li dentro ulElement
        liElement.append(index) //ci scriviamo dentro FizzBuzz
        liElement.classList.add("square") //aggiungiamo classe square
        liElement.classList.add("number") //aggiungiamo classe fizzbuzz 
        console.log(index);
    }
}

