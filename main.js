const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


document.querySelector('button').addEventListener('click',makePasswords)

let password1 = document.querySelector('#password1')
let password2 = document.querySelector('#password2')



function makePasswords() {

    //characters.length === 91. Putting the random characters into a variable for easier use
    

    let passwordOne = ''
    let passwordTwo = ''

    for(let i = 0; i < 15; i++){


        passwordOne += characters[Math.floor(Math.random() * 91)]
        passwordTwo += characters[Math.floor(Math.random() * 91)]

    }

    password1.textContent = passwordOne
    password2.textContent = passwordTwo


}



