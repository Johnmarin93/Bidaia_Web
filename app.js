const nombre = document.getElementById("nombre")
const telefono = document.getElementById("telefono")
const correo = document.getElementById("correo")

const form =document.getElementById("form")
const parrafo=document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    
    let warning=""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""
    if(!regexEmail.test(correo.value)){
        warning += "El correo no es valido <br>"
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warning
    }
})