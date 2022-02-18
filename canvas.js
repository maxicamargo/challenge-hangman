/*Variables*/
var pantalla = document.querySelector("#ahorcado");
var pincel = pantalla.getContext("2d");
var posicionCorrectas = 600;
var posicionIncorrectas = 600;

/*Funcion que dibuja nuestra pantalla y le da un color*/
function dibujarPantalla(){
	pincel.fillStyle = "lightgrey";
	pincel.fillRect(0,0,1200,800);
};

/*Funcion para dibujar lineas para representar las letras de la palabra*/
function dibujarGuiones(cantidad){
	var posicionX = 600;
	for(var guion = 0; guion < cantidad; guion++){
		pincel.beginPath();
		pincel.fillStyle = "black";
		pincel.fillRect(posicionX,720,35,5);
		posicionX = posicionX + 50;
	};
};

/*Funcion para dibujar las letras correctas*/
function dibujarLetrasCorrectas(letra, posicion){
	posicionX = posicionCorrectas + posicion * 50
	pincel.beginPath();
	pincel.fillStyle = "gray";
	pincel.font = "bold 46px arial";
	pincel.fillText(letra, posicionX,715);
};

/*Funcion para dibujar las letras incorrectas*/
function dibujarLetrasIncorrectas(letra){
	pincel.beginPath();
	pincel.fillStyle = "red";
	pincel.font = "bold 46px arial";
	pincel.fillText(letra,posicionIncorrectas,400);
};

/*Funcion para dibujar la Horca*/
function dibujarAhorcado(){
	pincel.lineWidth = 6;
	pincel.beginPath();
	pincel.moveTo(300,670);
	pincel.lineTo(450,750);
	pincel.lineTo(150,750);
	pincel.lineTo(300,670);
	pincel.stroke();

	pincel.beginPath();
	pincel.moveTo(300,670);
	pincel.lineTo(300,117);
	pincel.stroke();

	pincel.beginPath();
	pincel.moveTo(300,120);
	pincel.lineTo(493,120);
	pincel.stroke();

	pincel.beginPath();
	pincel.moveTo(490,120);
	pincel.lineTo(490,210);
	pincel.stroke();
};

/*Funcion para dibujar la cabeza*/
function dibujarCabeza(){
	pincel.lineWidth = 6;
	pincel.beginPath();
	pincel.arc(490,254,44,0,2*Math.PI)
	pincel.stroke();
};

/*Funcion para dibujar el tronco*/
function dibujarTronco(){
	pincel.lineWidth = 6;
	pincel.beginPath();
	pincel.moveTo(490,298);
	pincel.lineTo(490,523);
	pincel.stroke();
}

/*Funcion para dibujar la pierna izquierda */
function dibujarPiernaIzquierda(){
	pincel.lineWidth = 6;
	pincel.beginPath();
	pincel.moveTo(490,520);
	pincel.lineTo(410,600);
	pincel.stroke();
};

/*Funcion para dibujar la piernda derecha */
function dibujarPiernaDerecha(){
	pincel.lineWidth = 6;
	pincel.beginPath();
	pincel.moveTo(490,520);
	pincel.lineTo(570,600);
	pincel.stroke();
};

/*Funcion para dibujar el brazo izquierda */
function dibujarBrazoIzquierdo(){
	pincel.lineWidth = 6;
	pincel.beginPath();
	pincel.moveTo(490,398);
	pincel.lineTo(410,318);
	pincel.stroke();
};

/*Funcion para dibujar el brazo derecho */
function dibujarBrazoDerecho(){
	pincel.lineWidth = 6;
	pincel.beginPath();
	pincel.moveTo(490,398);
	pincel.lineTo(570,318);
	pincel.stroke();
};

function dibujarHorca(intentos){
	if(intentos == 1){
		dibujarCabeza();
	}else if(intentos == 2){
		dibujarTronco();
	}else if(intentos == 3){
		dibujarPiernaIzquierda();
	}else if(intentos == 4){
		dibujarPiernaDerecha();
	}else if(intentos == 5){
		dibujarBrazoIzquierdo();
	}else if(intentos == 6){
		dibujarBrazoDerecho();
	};
};

/*Funcion que dibuja el mensaje final indicando el final del juego.*/
function dibujarMensajeFinJuego(){
	//Dibujamos un rectangulo blanco en el medio de la pantalla.
	pincel.fillStyle = "white";
	pincel.beginPath();
	pincel.fillRect(600,130,400,180);
	//pincel.strokeRect(400,310,400,180);
	//Escribimos en el rectangulo
	pincel.beginPath();
	pincel.fillStyle = "red";
	pincel.font = "bold 40px arial";
	pincel.fillText("FIN DEL JUEGO", 650,180);
};

/*Funcion para escribir el mensaje final (ganador/perdedor)*/	
function dibujarMensaje(mensaje,posX,posY,color,tamanio){
	//Escribimos en el rectagulo el mensaje recibido
	pincel.beginPath();
	pincel.fillStyle = color;
	pincel.font = "bold "+tamanio+" arial";
	pincel.fillText(mensaje,posX,posY);
}
	
	
	