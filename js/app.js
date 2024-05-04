let botao = document.getElementById("botao");

function verificaVelocidade() {
    var velocidade = document.getElementById("velocidade").value;
    
    var main = document.querySelector("main");
    var p = document.createElement("p");
    var img = document.createElement("img");
    main.appendChild(p);
    console.log(img);
    
    if (velocidade > 107.00) {
        var paragrafoConteudo = document.createTextNode("Você ultrapassou o limite de velocidade, portanto foi multado!");
        img.src = "../img/multado.jpg";
    } else {
        var paragrafoConteudo = document.createTextNode("Velocidade está dentro do limite, parabéns!");
        img.src = "../img/sem-multa.jpg";
    }

    p.appendChild(paragrafoConteudo);
    main.appendChild(img);
}

botao.addEventListener("click", verificaVelocidade);