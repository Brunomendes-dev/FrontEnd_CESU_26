const img = document.getElementById("mainImage");
const status = document.getElementById("status");
const imagens = {

    normal: "cria_norm.png",
    feliz: "cria_feliz.png",
    bravo: "cria_bravo.png",
    morto: "cria_morto.png",
    comendo: "cria_eat.png"

};

let contador = 0;
let vivo = true;
let estado = "Normal 🙂";
let timeoutClique;

function controle() {
    setInterval(() => {

        if (!vivo) {
            estado = "Morto 💀";
            atualizarStatus();
            return;
        }

        contador++;

        if (contador < 5) {
            img.src = imagens.normal;
            estado = "Normal 🙂";
        } 
        else if (contador < 10) {
            img.src = imagens.bravo;
            estado = "Bravo 😡";
        } 
        else {
            img.src = imagens.morto;
            estado = "Morto 💀";
            vivo = false;
        }

        atualizarStatus();

    }, 2000);
}

function alimentar() {

    if (!vivo) {
        vivo = true;
        contador = 0;
    }

    img.src = imagens.comendo;
    estado = "Comendo 🍓";
    contador = 0;
    atualizarStatus();

    if (timeoutClique) clearTimeout(timeoutClique);

    timeoutClique = setTimeout(() => {
        img.src = imagens.feliz;
        estado = "Feliz 😊";
        atualizarStatus();

        setTimeout(() => {
            img.src = imagens.normal;
            estado = "Normal 🙂";
            atualizarStatus();
        }, 2000);

    }, 1000);
}

function atualizarStatus() {
    status.innerText = `Estado: ${estado} | Fome: ${contador}`;

    // CORES
    if (estado.includes("Morto")) {
        status.style.color = "red";
    } 
    else if (estado.includes("Bravo")) {
        status.style.color = "orange";
    } 
    else if (estado.includes("Feliz")) {
        status.style.color = "lightgreen";
    } 
    else if (estado.includes("Comendo")) {
        status.style.color = "yellow";
    } 
    else {
        status.style.color = "white";
    }
}

function atualizarNome() {
    const nome = document.getElementById("nomePet").value;
    document.getElementById("nomeExibido").innerText = nome;
}

// ---------------------------
// DIA / NOITE MANUAL
// ---------------------------

let noite = false;

function trocarManual() {
    noite = !noite;

    if (noite) {
        document.body.style.backgroundImage = "url('background_noite.png')";
    } else {
        document.body.style.backgroundImage = "url('background.png')";
    }
}

function mostrarFerlini() {
    const img = document.getElementById("ferliniImg");

    if (img.style.display === "none") {
        img.style.display = "block";
    } else {
        img.style.display = "none";
    }
}

controle();
atualizarStatus();