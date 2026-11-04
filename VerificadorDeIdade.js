function verificar() {
    var valor = document.getElementById('idade').value
    var idade = Number(valor)
    var res = document.getElementById ('resultado')
    res.style.animation = "none"
    res.offsetHeight
    res.style.animation = "aparecer 2s ease" 
    res.className = ""
    if (valor === "") {
        res.innerHTML =`Digite a idade!` 
        res.className = "erro"
    } else if (!Number.isInteger(idade)) {
        res.innerHTML = `Digite uma idade inteira!`
        res.className = "erro"
    } else if (idade < 0) {
        res.innerHTML = `Idade invalida`
        res.className = "erro"
    } else if (idade > 120) {
           res.innerHTML ="Idade inválida!"
           res.className ="erro"
    } else if (idade >=0 && idade<=12) {
            res.innerHTML = `Você é uma criança!`
            res.className = "crianca"
    }  else if (idade >=13 && idade<=17) {
            res.innerHTML = `Você é um adolescente!`
            res.className = "adolescente"
    }  else if (idade >=18 && idade<=59) {
                res.innerHTML = `Você é um adulto!`
                res.className = "adulto"
    } else if (idade >=60){
             res.innerHTML = `Você é um idoso!`
             res.className = "idoso"
    } 
}