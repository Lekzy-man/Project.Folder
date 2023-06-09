
document.getElementById("color-change").addEventListener("click", olamilekan)
function olamilekan(){
    document.getElementById("color-change").textContent = Alert(Random())
    document.getElementById("color-change").style.color = ColorPlay(ColorSelector())
}
function Random(){
    return Math.floor(Math.random() * 4)
}
function Alert(number){
    return ["HOME PAGE", "LEKZY PAGE", "WELCOME PAGE", "GAME PAGE"] [number]
}
function ColorSelector(){
    return Math.floor(Math.random() * 2)
}
function ColorPlay(number){
    return ["green","blue"][number]
}
let btnEL = document.getElementById("Terminator")
let TimzyEl = document.getElementById("Timzy")
let EmailInput = document.getElementById("Email-input")
let PasswordInput = document.getElementById("password-input")    
btnEL.addEventListener("click", Kemisola);
function Kemisola(){
    if(EmailInput.value === ""){
       TimzyEl.innerText = "Invalid Username or Password" 
       setTimeout(() => {
        TimzyEl.innerText = ""
       }, 2500)
    }    
else{
    window.location.assign("Game.html")
}

   if(PasswordInput.value === ""){
   TimzyEl.innerText = "Invalid Username or Password" 
   setTimeout(() => {
    TimzyEl.innerText = ""
   }, 2500)
}
else{
    window.location.assign("Game.html")
}       
}