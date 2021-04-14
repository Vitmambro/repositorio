function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fano.value.length == 0 || fano.value > ano) {
        alert("[ERRO] ano invalido!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var gênero = ""
        var img = document.createElement('img') //cria a tag img no HTML
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = "Homem"
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'criancah.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovemh.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'homema.png')
            }else {
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked){
            gênero = "Mulher"
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'criancam.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovemm.png')
            }else if (idade < 50){
                //adulta
                img.setAttribute('src', 'mulhera.png')
            }else {
                //idosa
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Você é um(a) ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}