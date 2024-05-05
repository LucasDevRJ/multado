let botao = document.getElementById("botao");
let p = document.createElement("p");
let main = document.querySelector("main");
let img = document.createElement("img");

function verificaVelocidade() {
    var velocidade = document.getElementById("velocidade").value;
    if (velocidade === "") {
        var paragrafoConteudo = document.createTextNode("Adicione o valor da velocidade!");
        p.style.color = "red";
        p.style.fontSize = "20px";
        img.src = "";
    } else {
        if (velocidade > 107.00) {
            var paragrafoConteudo = document.createTextNode("Você ultrapassou o limite de velocidade, portanto foi multado!");
            img.src = "../img/multado.jpg";
        } else {
            var paragrafoConteudo = document.createTextNode("Velocidade está dentro do limite, parabéns!");
            img.src = "../img/sem-multa.jpg";
            p.removeAttribute("style");
        }
    }

    botao.disabled = true;
    main.appendChild(p);
    p.appendChild(paragrafoConteudo);
    main.appendChild(img);

    setTimeout(apagaRegistros, 3000);
}

function apagaRegistros() {
    p.textContent = "";
    main.removeChild(p);
    main.removeChild(img);
    botao.disabled = false;
}

botao.addEventListener("click", verificaVelocidade);