function validateLogin() {
    let name = document.getElementById("nameInput").value
    let pass = document.getElementById("passwprdInput").value

    if(name.length > 0 && pass.length >0) {
        window.location.href = "../portfolio/portfolio.html"
        return false
    }

    alert("Preencha os campos obrigatórios")
    return false
}

function validateRegister() {
    let name = document.getElementById("nameInput").value
    let email = document.getElementById("emailInput").value
    let pass = document.getElementById("passwprdInput").value
    let passRpt = document.getElementById("passwprdRptInput").value
    let date = document.getElementById("dateInput").value

    if(name.length === 0) {
        alert("Insira um nome válido")
        return false
    } else if (email.length ===0) {
        alert('Insira um email válido')
        return false
    } else if ( (pass.length === 0 || passRpt.length === 0) || (pass !== passRpt)) {
        alert("As senhas são obrigatórias e devem ser iguais")
        return false
    } else if (date.length === 0) {
        alert('A data de nascimetno é obrigatória')
        return false
    } else {
        window.location.href = "../portfolio/portfolio.html"        
    }


}