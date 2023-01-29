const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


document.querySelector('button').addEventListener('click',getPasswords)

let password1 = document.querySelector('#password1')
let password2 = document.querySelector('#password2')
let input = document.querySelector('#input-length')


function randomChar() {

    let random = Math.floor(Math.random() * characters.length)
    return characters[random]
}



function makePasswords() {

    let randomPassword = ''
   
    for(let i = 0; i < input.value; i++){

        randomPassword += randomChar()
    }

    return randomPassword

}


function getPasswords() {

    if(input.value === '' || input.value <= 0){
        alert("Value must be at least 1")
    }

    const passwordOne = makePasswords()
    const passwordTwo = makePasswords()

    password1.textContent = passwordOne
    password2.textContent = passwordTwo
}




