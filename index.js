const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1El=document.getElementById("password1")
let password2El=document.getElementById("password2")
function newletter(){
    return characters[Math.floor(Math.random()*characters.length)]
    }
function generatefirstpassword(){
    password1string=""
    for(let i=0;i<15;i++){
        password1string+=newletter()
    }
    password1El.textContent=password1string
}

function generatesecondpassword(){
    password2string=""
    for(let i=0;i<15;i++){
        password2string+=newletter()
    }
    password2El.textContent=password2string
}

function generateboth(){
    generatefirstpassword()
    generatesecondpassword()
    }
