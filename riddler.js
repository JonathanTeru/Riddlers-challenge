/* Este es el apartado de las animaciones de inicio*/ 

let inicio = window.confirm('porque estrecha es la puerta, y angosto el camino que lleva a la vida, y pocos son los que la hallan. "8Mateo 7:14"');

if (inicio) {
  // Obtén el elemento que quieres retrasar
  var elemento0 = document.getElementById("texto-acertijo0");

  // Inicialmente oculta el elemento
  elemento0.style.display = "none";

  // Retrasa la aparición del elemento
  setTimeout(function() {
    // Muestra el elemento
    elemento0.style.display = "block";

    // Inicia la animación de TypeIt
    var typeit0 = new TypeIt("#texto-acertijo0", {
      speed: 25,
      waitUntilVisible: true
    });
    typeit0.type(txt0).go();
  }, 10000);  // Añade un retraso de 10 segundos
}
var loading = document.getElementById("loading");
var traceroute = document.getElementById("traceroute");
var content = document.getElementById("content");
 
var myAudio = document.getElementById("myAudio");

function playAudio() {
  myAudio.play();
}

function pauseAudio() {
  myAudio.pause();
}
/* Este es el apartado de los acertijos*/ 

var txt0 = `¡Bienvenidos, intrépidos navegantes del ciberespacio! 
Soy el Acertijo, tu guía en este laberinto de misterios.
 En este mundo, los ricos y poderosos no son más que peones en un tablero de ajedrez, 
 y la corrupción de la ciudad es solo otro rompecabezas por resolver. Pero recuerda, no importa cuán alto te encuentres en la escalera social,
 todos enfrentamos los mismos acertijos. ¿Estás listo para el desafío? escribe [Y/N]`;


var txt1 = '¿Qué es más poderoso que Dios, más malvado que el diablo, los pobres lo tienen, los ricos lo necesitan, y si lo comes, morirás?';
var txt2 = `¿Soy ciega y sostengo una balanza, 
Puedo ser lenta, pero llego con constancia.
No miro rostro, raza ni edad,
Solo busco la verdad.
¿Qué soy?`;
var txt3 = `Todos me enfrentan, pero nunca a la vez.
Soy el final del viaje, el descanso del juez.
No importa tu riqueza, tu fama o tu fe,
todos me encontrarán, ¿quién soy, puedes ver?
`;

/* Este es el apartado de las animaciones de inicio*/ 


function hideLoadingAndShowTraceroute() {
  loading.style.display = "none";
  traceroute.style.display = "block";
  typeWriter();
}

function hideTracerouteAndShowContent() {
  traceroute.style.display = "none";
  content.style.display = "block";
}

setTimeout(hideLoadingAndShowTraceroute, 5000);

var texto = `Tracing route to rataalada.com [93.184.216.34]
over a maximum of 30 hops:

  1    <1 ms    <1 ms    <1 ms  192.168.1.1
  2     1 ms     1 ms     1 ms  10.0.0.1
  3    15 ms    12 ms    11 ms  172.16.0.1
  4    15 ms    15 ms    15 ms  93.184.216.34

Trace complete.`;

var i = 0;
function typeWriter() {
  if (i < texto.length) {
    traceroute.innerHTML += texto.charAt(i);
    i++;
    setTimeout(typeWriter, 15);
  } else {
    setTimeout(hideTracerouteAndShowContent, 1000);
  }
}

  





function verificarRespuesta0() {
  var respuesta = document.getElementById("respuesta0").value;
  var respuestasCorrectas = ["Y" , "si", "Si" , "Yes" , "Start","y","comenzar"];
  if (respuestasCorrectas.includes(respuesta)) {
    document.getElementById("resultado0").innerHTML = "¡Correcto!";
    document.getElementById("acertijo1").style.display = "block"; // Muestra el acertijo 1

    // Inicia la animación de TypeIt para el acertijo 1
    var typeit1 = new TypeIt("#texto-acertijo1", {speed: 50, waitUntilVisible: true});
    typeit1.type(txt1).go();
  } else {
    document.getElementById("resultado0").innerHTML = "Aww el gatito no quiere jugar?";
  }
}

function verificarRespuesta1() {
  var respuesta = document.getElementById("respuesta1").value;
  var respuestasCorrectas = ["nada", "Nada", "la nada", "La nada", "NADA"];
  if (respuestasCorrectas.includes(respuesta)) {
    document.getElementById("resultado1").innerHTML = "¡Correcto!";
    document.getElementById("acertijo2").style.display = "block"; // Muestra el acertijo 2

    // Inicia la animación de TypeIt para el acertijo 2
    var typeit2 = new TypeIt("#texto-acertijo2", {speed: 50, waitUntilVisible: true});
    typeit2.type(txt2).go();
  } else {
    document.getElementById("resultado1").innerHTML = "¡Inténtalo de nuevo!";
  }
}

function verificarRespuesta2() {
  var respuesta = document.getElementById("respuesta2").value;
  var respuestasCorrectas = ["la justicia", "La justicia", "justicia","Justicia", "JUSTICIA"];
  if (respuestasCorrectas.includes(respuesta)) {
    document.getElementById("resultado2").innerHTML = "¡Correcto!";
    document.getElementById("acertijo3").style.display = "block"; // Muestra el acertijo 3

    // Inicia la animación de TypeIt para el acertijo 3
    var typeit3 = new TypeIt("#texto-acertijo3", {speed: 50, waitUntilVisible: true});
    typeit3.type(txt3).go();
  } else {
    document.getElementById("resultado2").innerHTML = "¡Inténtalo de nuevo!";
  }
}

function verificarRespuesta3() {
  var respuesta = document.getElementById("respuesta3").value;
  var respuestasCorrectas = ["la muerte", "La muerte", "muerte", "Muerte", "MUERTE"];
  if (respuestasCorrectas.includes(respuesta)) {
    document.getElementById("resultado3").innerHTML = "¡Correcto!";
    document.getElementById("recompensa").style.display = "block"; // Muestra la recompensa

    // Muestra un mensaje de felicitación
    var felicitaciones = "¡Felicidades! Has resuelto todos los acertijos.";
    document.getElementById("resultado3").innerHTML = felicitaciones;

    // Muestra la recompensa
    document.getElementById("recompensa").style.display = "block";
  } else {
    document.getElementById("resultado3").innerHTML = "¡Inténtalo de nuevo!";
  }
}

