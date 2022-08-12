const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let P1 = document.getElementById("p1")
let P2 = document.getElementById("p2")
function passwordGenerater(){
    if(P1.textContent === "" && P2.textContent ===""){
    for(let i=0;i<15;i++){
        let r1 = Math.floor(Math.random()*characters.length)
        P1.textContent += characters[r1]
    }
    for(let i=0;i<15;i++){
        let r2 = Math.floor(Math.random()*characters.length)
        P2.textContent += characters[r2]
    } } else{
        P1.textContent = ""
        P2.textContent = ""
    }
}