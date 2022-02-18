//Variables
var listaPalabras = ["ARGENTINA","BOLIVIA","BRASIL","CHILE","COLOMBIA","CUBA","ECUADOR","GUATEMALA","GUAYANA","HAITI","HONDURAS","JAMAICA",
	"MEXICO","NICARAGUA","PARAGUAY","PANAMA","PERU","URUGUAY","VENEZUELA"];
var buttonIniciar = document.getElementById("iniciar-juego");
var palabraSeleccionada = "";
var char = "";
var arrayPalabraSeleccionada = [];
var letrasIncorrectas = "";
var cantIntentos = 0;
var estadoJuego = false;
var buttonAgregar = document.getElementById("nueva-palabra");
var input  = document.getElementById("input-nueva-palabra");
var nuevaPalabra = "";

//Funciones
/*Funcion para dar comienzo al juego*/
function iniciarJuego(){

	dibujarPantalla();
	seleccionarPalabra(listaPalabras);
	//Separo el String y lo convierto en un array
	//arrayPalabraConstruida = palabraSeleccionada.split("");
	arrayPalabraGuiones();
	dibujarAhorcado();
	cantIntentos = 0;
	estadoJuego = false;
	letrasIncorrectas = "";
	//console.log(palabraSeleccionada + " palabra seleccionada");
	//console.log(arrayPalabraSeleccionada + " array palabra seleccionada");
	//console.log(arrayPalabraConstruida);
	dibujarMensaje("Cantidad de letras: "+ palabraSeleccionada.length,600,760,"darkgray","24px");
	onkeydown = teclaPresionada;
};

/*Funcion para seleccionar una palabra de la lista de palabras disponibles*/
function seleccionarPalabra(lista){
	palabraSeleccionada = lista[Math.floor(Math.random()*lista.length)];
	dibujarGuiones(palabraSeleccionada.length);
};

/*Funcion para convertir la palabra seleccionada en un array de guiones*/
function arrayPalabraGuiones(){
	arrayPalabraSeleccionada = [];
	for(var index = 0; index < palabraSeleccionada.length; index++){
		arrayPalabraSeleccionada.push("-");
	};
};

/*Funcion para deterctar si una tecla fue presionada*/
function teclaPresionada(event){
	char = event.key;	
    var charCode = char.charCodeAt();
    //Letra mayusculas de 65 a 90 y letras minusculas de 97 a 122 y letra ñ 0241 y letra Ñ 0209
    if ((charCode >=65 && charCode<=90)||charCode==209){
  	    if(char.length==1){
  		//Verifica si un char o String se encuentra dentro de otro String
  			if(palabraSeleccionada.includes(char)){
  				//Voy completado el array con las letras
  				for(var letra = 0; letra < palabraSeleccionada.length; letra++){
  					if(char == palabraSeleccionada[letra]){
  						arrayPalabraSeleccionada[letra] = char;
  						dibujarLetrasCorrectas(char,letra);
  					};
  				};
  				//console.log(arrayPalabraSeleccionada + " array palabra seleccionada");
  				//dibujarLetrasCorrectas(char);
  				//console.log(posicionCorrectas + " posicion letras correctas");
  			}else{
  				if(!(letrasIncorrectas.includes(char))){
  					letrasIncorrectas = letrasIncorrectas + char;
  					cantIntentos = cantIntentos + 1;
  					dibujarHorca(cantIntentos);		
  				}else{
  					alert("Debe ingresar una letra distinta a las ingresadas!!!");
  				};
  				dibujarLetrasIncorrectas(letrasIncorrectas);
  				//console.log(posicionIncorrectas + " posicion letras incorrectas")
  			};
  		};
  	}else{
  		alert ("Letra INCORRECTA, debe ingresar una letra mayuscula, no: " + char);
  	};
  	//console.log(char + " letra ingresada");
  	//console.log(cantIntentos + " cantidad de intentos");
  	//console.log(charCode);
  	verificarFinJuego(cantIntentos);
  	//console.log(verificarFinJuego(cantIntentos));
  	verificarGanador(cantIntentos);
};


/*Funcion para verificar si el juego ha finalizado*/
function verificarFinJuego(intentos){
	if(intentos == 6){
		estadoJuego = true;
	};
	if(!(arrayPalabraSeleccionada.includes("-"))){
		estadoJuego = true;
	};
	return estadoJuego;
};

/*Funcion para verificar el ganador*/
function verificarGanador(intentos){
	if(arrayPalabraSeleccionada.includes("-") && intentos == 6){
		dibujarMensajeFinJuego();
		dibujarMensaje("Haz PERDIDO!",670,230,"green");
		dibujarMensaje("El pais era: "+palabraSeleccionada,610,280,"green","24px");
	};
	if(!(arrayPalabraSeleccionada.includes("-")) && intentos < 6){
		dibujarMensajeFinJuego();
		dibujarMensaje("Haz GANADO!",660,230,"green","38px");
		dibujarMensaje("FELICIDADES",670,280,"green","38px");
	};
	posicionCorrectas = 600;
};

/*Funcion para agregar una nueva palabra a la lista*/
function agregarNuevaPalabra(){
	var nuevaPalabraCorrecta = true;
	var nuevaPalabraIngreso = true;
	if (input.value ==""){
		nuevaPalabraCorrecta = false;
	}else{
		nuevaPalabra = (input.value).toUpperCase();
		var letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
		for(var letra=0; letra < nuevaPalabra.length; letra++){
			if(!(letras.includes(nuevaPalabra[letra]))){
				nuevaPalabraCorrecta = false
				break;
			};			
		};
	};
	if(nuevaPalabraCorrecta){
		for(var palabra = 0; palabra < listaPalabras.length; palabra++){
			if(nuevaPalabra == listaPalabras[palabra]){
				alert("Ya se encuentra en el listado el pais ingresado");
				nuevaPalabraCorrecta = false;
				nuevaPalabraIngreso = false;
				break;
			};
		}
		if(nuevaPalabraCorrecta == true && nuevaPalabraIngreso == true){
			listaPalabras.push(nuevaPalabra);
			alert("Su palabra se ha agregado correctamente");
			input.value = "";
		};

		//console.log(nuevaPalabra);
	}else{
		alert("Intente nuevamente (recuerde que no debe tener numeros ni simbolos el nombre del pais)");
	};
};


//Procesos
buttonIniciar.focus();
buttonIniciar.onclick = iniciarJuego;
buttonAgregar.onclick = agregarNuevaPalabra;





