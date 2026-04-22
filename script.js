window.addEventListener("load", function () {
    const bienvenida = document.getElementById("mensaje-bienvenida");
    if (bienvenida) {
        bienvenida.textContent = "¡Bienvenido a mi portafolio!";
    }
});

const botonCambioColor = document.getElementById("boton-cambio-color");
const parrafo = document.getElementById("sobre-mi");
const colores = ["#c0392b", "#2980b9", "#27ae60", "#e67e22", "#8e44ad", "#16a085"];

if (botonCambioColor && parrafo) {
    botonCambioColor.addEventListener("click", function () {
        const aleatorio = Math.floor(Math.random() * colores.length);
        parrafo.style.color = colores[aleatorio];
    });
}

const botonCambioTexto = document.getElementById("boton-cambio-texto");
const textos = [
    "Soy un coder en formacion, apasionado por la tecnologia y los retos.",
    "Me gusta aprender nuevas tecnologías y desarrollar poryectos o scripts que resuelvan problemas reales.",
    "Me gustan mucho los videojuegos y la UFC!",
    "Todavia quieres saber mas?"
];
let indiceTexto = 0;

if (botonCambioTexto && parrafo) {
    botonCambioTexto.addEventListener("click", function () {
        if (indiceTexto === textos.length -1){
            indiceTexto = 0;
        } else{
            indiceTexto = indiceTexto +1;
        }
        parrafo.textContent = textos[indiceTexto];
    });
}

const botonMostrar = document.getElementById("boton-mostrar-extra");
const contenidoExtra = document.getElementById("contenido-extra");

if (botonMostrar && contenidoExtra) {
    botonMostrar.addEventListener("click", function () {
        const estaVisible = contenidoExtra.classList.contains("visible");

        if (estaVisible) {
            contenidoExtra.classList.remove("visible");
            botonMostrar.textContent = "Ver mis habilidades";
        } else {
            contenidoExtra.classList.add("visible");
            botonMostrar.textContent = "Ocultar habilidades";
        }
    });
}