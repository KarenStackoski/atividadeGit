var form = document.querySelector("form")
var snackbar = document.querySelector(".snackbar")

function show_snack(message){
    snackbar.textContent = message
    snackbar.style.transition = "opacity 2s"
    snackbar.style.opacity = 1
    setTimeout(function(){
        snackbar.style.opacity = 0
    }, 5000)
}

function validateUser(email, password){
    // TODO
    if(email !== 'karen@unsec.net' && password !== '123'){
        error = show_snack('Senha ou usuário inválidos, tente novamente')
        return error
    }
    return true
}

form.addEventListener(function(event){
    event.preventDefault()
    let email = document.querySelector("#email")
    let password = document.querySelector("#password")

    if(!validateUser(email, password)) return false

    form.submit()
})