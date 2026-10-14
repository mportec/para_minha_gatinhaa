
const botaoSurpresa = document.querySelector("#botaoSurpresa");
const surpresa = document.querySelector("#surpresa");

botaoSurpresa.addEventListener("click", function () {
    surpresa.classList.toggle("escondido");

    if (surpresa.classList.contains("escondido")) {
        botaoSurpresa.textContent = "Abrir minha declaração ❤️";
    } else {
        botaoSurpresa.textContent = "Fechar declaração 💕";

        surpresa.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        criarCoracoes();
    }
});

function criarCoracoes() {
    for (let i = 0; i < 25; i++) {
        const coracao = document.createElement("span");

        coracao.textContent = Math.random() > 0.5 ? "♥" : "♡";
        coracao.classList.add("coracao-flutuante");

        coracao.style.left = Math.random() * 100 + "vw";
        coracao.style.fontSize =
            (15 + Math.random() * 25) + "px";

        coracao.style.animationDuration =
            (3 + Math.random() * 4) + "s";

        document.body.appendChild(coracao);

        coracao.addEventListener("animationend", function () {
            coracao.remove();
        });
    }
}
