const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const respuesta = document.getElementById("respuesta");
const sobre = document.getElementById("sobre");
const musica = document.getElementById("musica");

let size = 1;

/* 💌 Abrir carta y activar música */
document.body.addEventListener("click", () => {
    sobre.classList.add("abierto");
    musica.play();
}, { once: true });

/* 😈 Botón NO se mueve solo cuando lo clickean */
noBtn.addEventListener("click", function() {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;

    noBtn.style.position = "relative";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    size += 0.2;
    yesBtn.style.transform = `scale(${size})`;
});

/* 💖 Botón SÍ */
yesBtn.addEventListener("click", function() {
    respuesta.innerHTML = "💖 SABÍA QUE DIRÍAS QUE SÍ 💖";
    lanzarConfeti();
});

/* 🎉 Confeti */
function lanzarConfeti() {
    for (let i = 0; i < 60; i++) {
        const confeti = document.createElement("div");
        confeti.innerHTML = "💖";
        confeti.style.position = "fixed";
        confeti.style.left = Math.random() * 100 + "vw";
        confeti.style.top = "-10px";
        confeti.style.fontSize = "20px";
        confeti.style.animation = "caer 3s linear forwards";
        document.body.appendChild(confeti);

        setTimeout(() => confeti.remove(), 3000);
    }
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes caer {
    to {
        transform: translateY(100vh);
        opacity: 0;
    }
}
`;
document.head.appendChild(style);

/* ⏳ RELOJ */

const fechaInicio = new Date("2025-02-25T00:00:00"); // CAMBIA ESTA FECHA

function actualizarReloj() {
    const ahora = new Date();
    const diferencia = ahora - fechaInicio;

    const segundos = Math.floor(diferencia / 1000) % 60;
    const minutos = Math.floor(diferencia / 1000 / 60) % 60;
    const horas = Math.floor(diferencia / 1000 / 60 / 60) % 24;
    const dias = Math.floor(diferencia / 1000 / 60 / 60 / 24);

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

setInterval(actualizarReloj, 1000);
actualizarReloj();
