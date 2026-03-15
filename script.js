function togglePassword(id){
let input=document.getElementById(id)
if(input.type==="password"){
input.type="text"
}else{
input.type="password"
}
}

function checkStrength(){
let pass=document.getElementById("password").value
let strength=document.getElementById("strength")

if(pass.length<6){
strength.innerHTML="Weak"
strength.style.color="red"
}
else if(pass.length<10){
strength.innerHTML="Medium"
strength.style.color="orange"
}
else{
strength.innerHTML="Strong"
strength.style.color="green"
}
}

function validateRegister(){
let password=document.getElementById("password").value
let confirm=document.getElementById("confirmPassword").value

if(password!==confirm){
alert("Passwords do not match")
return false
}

return true
}

function showSpinner(){
let spinner=document.getElementById("spinner")
spinner.classList.remove("d-none")
}

function toggleDarkMode(){
document.body.classList.toggle("dark-mode")
}