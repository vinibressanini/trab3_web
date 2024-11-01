const projects = ["Projeto N° 1", "Projeto N° 2", "Projeto N° 3", "Projeto N° 4", "Projeto N° 5", "Projeto N° 6"]

let select = document.getElementById("projectsSelect")

projects.forEach(element => {
    let option = `<option>${element}</option>`

    select.innerHTML += option
});

function validate() {


    let project = document.getElementById("projectsSelect").value
    let nameInput = document.getElementById("nameInput").value
    let emailInput = document.getElementById("emailInput").value

    if (project === "Selecione o Projeto") {
        alert("Selecione o projeto que deseja contratar")
        return false
    }

    console.log(project)
    console.log(nameInput)
    console.log(emailInput)

    if (project !== null && nameInput.length >0 && emailInput.length>0) {
        console.log("chama ze")
        window.location.href = "../portfolio/portfolio.html"
        return false;
    }


}