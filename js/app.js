const botonChat = document.getElementById("botonChat");
const chatbot = document.getElementById("chatbot");
const cerrarChat = document.getElementById("cerrarChat");
const chatBody = document.getElementById("chat-body");

// ABRIR CHAT
botonChat.addEventListener("click", () => {

    if(chatbot.style.display === "flex"){
        chatbot.style.display = "none";
    }
    else{
        chatbot.style.display = "flex";
    }

});

// CERRAR CHAT
cerrarChat.addEventListener("click", () => {
    chatbot.style.display = "none";
});

// AGREGAR MENSAJES
function agregarMensaje(texto, tipo){

    const mensaje = document.createElement("div");

    mensaje.classList.add("mensaje");
    mensaje.classList.add(tipo);

    mensaje.innerHTML = texto;

    chatBody.appendChild(mensaje);

    chatBody.scrollTop = chatBody.scrollHeight;
}

// MENÚ CHATBOT
function respuestaMenu(opcion){

    let respuesta = "";

    if(opcion === "inicio"){
        respuesta = "🏠 Bienvenido al sistema del proyecto final.";
    }

    else if(opcion === "objetivos"){
        respuesta = "🎯 El objetivo principal es desarrollar una plataforma funcional.";
    }

    else if(opcion === "cronograma"){
        respuesta = "📅 El cronograma incluye análisis, diseño y desarrollo.";
    }

    else if(opcion === "riesgos"){
        respuesta = "⚠ Los riesgos incluyen errores técnicos y retrasos.";
    }

    else if(opcion === "equipo"){
        respuesta = "👥 El equipo está conformado por desarrolladores y diseñadores.";
    }

    else if(opcion === "contacto"){
        respuesta = "📞 Puedes comunicarte mediante el apartado de contacto.";
    }

    agregarMensaje(respuesta, "bot");
}

// ENVIAR MENSAJE
function enviarMensaje(){

    const input = document.getElementById("mensaje");

    const texto = input.value.trim().toLowerCase();

    if(texto === ""){
        return;
    }

    agregarMensaje(texto, "user");

    let respuesta = "❌ No entendí tu pregunta.";

    // RESPUESTAS
    if(texto.includes("hola")){
        respuesta = "👋 Hola, soy el asistente virtual del proyecto.";
    }

    else if(texto.includes("objetivo")){
        respuesta = "🎯 El objetivo es desarrollar un chatbot inteligente.";
    }

    else if(texto.includes("cronograma")){
        respuesta = "📅 El cronograma incluye todas las fases del proyecto.";
    }

    else if(texto.includes("riesgo")){
        respuesta = "⚠ Existen riesgos técnicos y organizacionales.";
    }

    else if(texto.includes("equipo")){
        respuesta = "👥 El proyecto cuenta con un equipo de desarrollo.";
    }

    else if(texto.includes("contacto")){
        respuesta = "📞 Puedes comunicarte mediante el apartado de contacto.";
    }

    else if(texto.includes("investigacion")){
        respuesta = "🔬 La investigación impulsa proyectos científicos.";
    }

    else if(texto.includes("innovacion")){
        respuesta = "💡 La innovación busca crear soluciones modernas.";
    }

    else if(texto.includes("repositorio")){
        respuesta = "📚 El repositorio contiene proyectos y artículos.";
    }

    else if(texto.includes("convocatorias")){
        respuesta = "📢 Las convocatorias están disponibles en el portal.";
    }

    else if(texto.includes("gracias")){
        respuesta = "😊 ¡Con gusto!";
    }

    // RESPUESTA BOT
    setTimeout(() => {

        agregarMensaje(respuesta, "bot");

    }, 500);

    input.value = "";
}

// ENTER PARA ENVIAR
document.getElementById("mensaje").addEventListener("keypress", function(e){

    if(e.key === "Enter"){
        enviarMensaje();
    }

});