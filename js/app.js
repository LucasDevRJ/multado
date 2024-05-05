let botao = document.getElementById("botao");

function verificaVelocidade() {
    var velocidade = document.getElementById("velocidade").value;
    var p = document.createElement("p");
    var main = document.querySelector("main");
    var img = document.createElement("img");

    if (velocidade === "") {
        var paragrafoConteudo = document.createTextNode("Adicione o valor da velocidade!");
        p.style.color = "red";
        p.style.fontSize = "20px";
    } else {
        if (velocidade > 107.00) {
            var paragrafoConteudo = document.createTextNode("Você ultrapassou o limite de velocidade, portanto foi multado!");
            img.src = "../img/multado.jpg";
        } else {
            var paragrafoConteudo = document.createTextNode("Velocidade está dentro do limite, parabéns!");
            img.src = "../img/sem-multa.jpg";
        }
        botao.disabled = true;
    }

    main.appendChild(p);
    p.appendChild(paragrafoConteudo);
    main.appendChild(img);
}

botao.addEventListener("click", verificaVelocidade);