let registerask=document.getElementById("register-ask")
let loginask=document.getElementById("login-ask")
let createbtn=document.getElementById("createbtn")
let backbtn=document.getElementById("backbtn")
let loginform=document.getElementById("login-form")
let registerform=document.getElementById("register-form")

createbtn.onclick=()=>{
    registerask.classList.add("hide")
    loginform.classList.add("hide")
    loginask.classList.add("visible")
    registerform.classList.add("visible")
}

backbtn.onclick=()=>{
     registerask.classList.remove("hide")
    loginform.classList.remove("hide")
    loginask.classList.remove("visible")
    registerform.classList.remove("visible")
}