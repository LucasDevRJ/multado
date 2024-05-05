let botao = document.getElementById("botao");
let p = document.createElement("p");
let main = document.querySelector("main");
let img = document.createElement("img");

function verificaVelocidade() {
    var velocidade = document.getElementById("velocidade").value;
    if (velocidade === "" || velocidade < 0) {
        var paragrafoConteudo = document.createTextNode("Adicione um valor válido!");
        p.classList.add("valor-invalido");
        img.src = "";
    } else {
        if (velocidade > 107.00) {
            var paragrafoConteudo = document.createTextNode("Você ultrapassou o limite de velocidade, portanto foi multado!");
            img.src = "../img/multado.jpg";
        } else {
            var paragrafoConteudo = document.createTextNode("Velocidade está dentro do limite, parabéns!");
            img.src = "../img/sem-multa.jpg";
            p.classList.add("sem-multa");
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
    p.classList.remove("valor-invalido");
    p.classList.remove("sem-multa");
}

botao.addEventListener("click", verificaVelocidade);