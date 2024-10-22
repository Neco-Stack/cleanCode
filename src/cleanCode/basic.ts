const inputText = document.querySelector('#inputText') as HTMLInputElement;
const outputDiv = document.querySelector('#outputDiv') as HTMLParagraphElement;
const buttons = document.querySelectorAll('#btn') as NodeListOf<HTMLButtonElement>;

const bigLettersCounter = () => {
    const text = inputText.value; 
    let count = 0;
    for (let i= 0; i< text.length; i++){
        if (text[i] >= 'A' && text[i] <= 'Z'){
            count++;
        }
    }
    outputDiv.textContent = `Anzahl Großbuchstaben: ${count}`
}
buttons[0].addEventListener('click', bigLettersCounter); 

const emptySpacesCounter = () => {
    const text= inputText.value;
    let count = 0; 
    for (let i= 0; i< text.length; i++){
        if (text[i] === ' '){
            count ++
        }
    }
    outputDiv.textContent  = `Anzahl Leerzeichen: ${count}`
}
buttons[1].addEventListener('click', emptySpacesCounter);

const vowelsCounter = () => {
    const vowels = 'aeiou';
    const text = inputText.value.toLowerCase();
    let count = 0; 
    for (let i= 0; i<  text.length; i++){
        if (vowels.includes(text[i])){
            count++;
        }
    }
    outputDiv.textContent = `Anzahl Vokale: ${count}`;
}
buttons[2].addEventListener("click", vowelsCounter)