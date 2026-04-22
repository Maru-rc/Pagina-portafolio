alert("Bienvenido a mi portafolio")

const botonCambioColor = document.getElementById("boton-cambio-color");
const parrafo = document.getElementById("sobre-mi");
const colores = ["#c0392b", "#2980b9", "#27ae60", "#e67e22", "#8e44ad", "#16a085"];

botonCambioColor.addEventListener("click", function () {
    const aleatorio = Math.floor(Math.random() * colores.length);
    parrafo.style.color = colores[aleatorio];
});


const botonCambioTexto = document.getElementById("boton-cambio-texto");
const textos = [
"Soy un coder en formación, apasionado por la tecnología, los retos y todo lo que tenga que ver con resolver problemas a través del código. Cada día aprendo algo nuevo y eso es lo que más me motiva.",
"Me gusta aprender nuevas tecnologías y desarrollar proyectos o scripts que resuelvan problemas reales. Disfruto mucho el proceso de pasar de una idea en papel a algo funcional en el navegador o la terminal.",
"Me gustan mucho los videojuegos y la UFC! Los videojuegos me enseñaron a pensar estratégicamente y a no rendirme cuando algo es difícil. La UFC me parece fascinante por la disciplina y mentalidad que requiere cada peleador.",
"¿Todavía quieres saber más? el diseño web y de vez en cuando experimento con herramientas de IA para ver hasta dónde puedo llevar mis proyectos. Siempre hay algo nuevo por explorar."
];
let indiceTexto = 0;

botonCambioTexto.addEventListener("click", function () {
     if (indiceTexto === textos.length -1){
        indiceTexto = 0;
    } else{
         indiceTexto = indiceTexto +1;
    }
    parrafo.textContent = textos[indiceTexto];
});


const botonMostrar = document.getElementById("boton-mostrar-extra");
const contenidoExtra = document.getElementById("contenido-extra");

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
