let botao = document.getElementById("botao");

function verificaVelocidade() {
    var velocidade = document.getElementById("velocidade").value;
    
    var main = document.querySelector("main");
    console.log(main);
    var p = document.createElement("p");
    main.appendChild(p);
    
    if (velocidade > 107.00) {
        var paragrafoConteudo = document.createTextNode("Você ultrapassou o limite de velocidade, portanto foi multado!");
    }

    p.appendChild(paragrafoConteudo);
    //console.log(p);
    //main.appendChild(paragrafoConteudo);
}

botao.addEventListener("click", verificaVelocidade);
console.log(botao);