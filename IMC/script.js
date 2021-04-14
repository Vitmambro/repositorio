function imc(){
    var msg = document.getElementById("resultado");
    var img = document.getElementById("imagem");
    var p = document.getElementById("peso").value;
    var a = document.getElementById("altura").value;

    var imc = p / Math.pow(a,2);

    if (imc<18.5){
    msg.innerHTML = "Você está abaixo do peso!";
    img.src = "imagens/magra.jpg";
    }else if(imc>=18.5 && imc<=24.9){
        msg.innerHTML = "Você está no peso ideal!";
        img.src = "imagens/ideal.jpg";
    }else if(imc>24.9){
         msg.innerHTML = "Você está acima do peso!";
         img.src = "imagens/gorda.jpg";
    }
}