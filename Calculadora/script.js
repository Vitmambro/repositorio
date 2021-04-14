function converter(){
    var reais = document.getElementById("valor_reais").value;
    var dolar = reais / 5.80;

    document.getElementById("resultado").innerHTML = "US$" + dolar.toFixed(2);
}