let btnBL = document.getElementById("setup");
btnBL.addEventListener("click", Remotecontrol)
let SurnameEl = document.getElementById("Surname-input")
let TextInput = document.getElementById("text")
let MiddleInput = document.getElementById("MiddleName-input")
let LastNameInput = document.getElementById("LastName-input")
let EmailInput = document.getElementById("Email-input-text")
let PasswordInput = document.getElementById("password-input-pass")
let ConfirmpasswordInput = document.getElementById("confirmpassword-input")
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}
async function Remotecontrol(){
      if(SurnameEl.value){
        await sleep(2000)
         TextInput.innerText = "Your Registration is Successful!"
        await sleep(2000)
        window.location.assign("index.html")
      }
      else{
      }
      if(MiddleInput.value){
        await sleep(2000)
        TextInput.innerText = "Your Registration is Successful!"
        await sleep(2000)
       window.location.assign("index.html")
    }
    else{
     }
    if(LastNameInput.value){
       await sleep(2000)
        TextInput.innerText = "Your Registration is Successful!"
        await sleep(2000)
        window.location.assign("index.html")
    }
    else{
   }
    if(EmailInput.value){
        await sleep(2000)
       TextInput.innerText = "Your Registration is Successful!"
       await sleep(2000)
        window.location.assign("index.html")
    }
    else{   
    }
    if(PasswordInput.value){
        await sleep(2000)
        TextInput.innerText = "Your Registration is Successful!" 
        await sleep(2000)
        window.location.assign("index.html")
    }
    else{    
    }
    if(ConfirmpasswordInput.value){
        await sleep(2000)
        TextInput.innerText = "Your Registration is Successful!"
        await sleep(2000)
       window.location.assign("index.html")
    }
    else{   
    }
    
}


