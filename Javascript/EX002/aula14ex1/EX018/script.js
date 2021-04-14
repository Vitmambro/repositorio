function contar(){
    var ini = document.getElementById("inicio")
    var fim = document.getElementById("fim")
    var passo = document.getElementById("passo")
    var res = document.getElementById("res")
   
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert("[ERRO] Digite algum valor válido")
    } else {
        res.innerHTML = "Contando... <br>"
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){
            alert("Passo inválido, considerando passo 1")
            p = 1
        }
        if (i < f){ // contagem crescente
       for (var c = i; c <= f; c += p){
        res.innerHTML += ` ${ c } \u{1F449}`
       } 
    } else {
        // contagem regressiva
        for (var c =i; c >= f; c -= p){
            res.innerHTML += ` ${ c } \u{1F449}`
        }
        res.innerHTML += "\u{1F6D1}"
    } 
  }
}