/*
	Los array son variables donde podemos guardar muchos datos.
*/
let frutas = ["banana", "manzana", "pera"];

document.write(frutas);

/*
	ARRAYS asociativos
		Es un array que tiene un valor asociado.
*/

let pc1 = {
	nombre: "EstebanPc",
	procesador: "Intel COre I5",
	ram: "16GB",
	espacio: "1TB"
}

let pc2 = ["EstebanPc", "Intel COre I5", "16GB", "1TB"]

document.write(pc1["ram"]);

let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = pc1["espacio"];

frase = `<br> el nombre de mi PC es: ${nombre} <br>
		el procesador de mi PC es: ${procesador} <br>
		el ram de mi PC es: ${ram} <br>
		el espacio de mi PC es: ${espacio} <br><br><hr>
`

document.write(frase);

/*
	BUCLES E ITERACIÓN
	while
*/

let numero = 0;
document.write("Whilte" + "<br>")
while(numero < 10){
	numero++;
	document.write(numero + "<br>");
}

numero = 0;
document.write("Do While" + "<br>")

do {
	numero ++;
	document.write("<hr>" + numero + "<hr>")
}
while(numero < 1)

//Sentencia break

numero = 0;


while (numero < 1000){
	numero++;
	document.write(numero+"<br>");
	if (numero == 10){
		break;
	}
}

document.write("<hr>" + "fin" + "<hr>");

// for
document.write("For + break" + "<br>")
for (let i = 20; i >= 0; i--) {
	if (i==12){
		break;
	}
	document.write(i + "<br>");
}

document.write("<hr>" + "For + continue" + "<br>") //continue saltea lo q digas pero sigue la interación
for (let i = 0; i <= 20; i++) {
	if (i==12){
		continue;
	}
	document.write(i + "<br>");
}

//for in y for of
document.write("<hr>" + "For in" + "<br>")
let animales = ["gato", "perro", "tiranosaurio"];

//FOR IN muestra la posición de los objetos
for (let animal in animales){
	document.write(animal +  "<br>")
}

//FOR OF muestra los nombres de los objetos
document.write("<br>");

for (let animal of animales){
	document.write(animal +  "<br>")
}

document.write("<hr>" + "Sentencia Label" + "<br>")

let array1 =["maria", "josefa", "roberta"];
let array2 =["pedro", "marcelo", array1, "josefina"];

forRancio: //ESTA ES LA SENTENCIA LABEL
for (let array in array2) {
	if (array == 2){
		for( let array of array1){
			continue forRancio; //continue o break
			document.write(array + "<br>");
		}
	} else {
		document.write(array2[array] + "<br>");
	}
}

/* 
	funciones
	las funciones son bloques de código que se crean y después se llaman
*/
document.write("<hr>" + "FUNCIONES"  + "<br>");

function saludar(){
	let respuesta = prompt("Hola, cómo tas?");
	if (respuesta =="bien"){
		alert("me alegro");
	} else {
		alert ("q mal pex");
	}
}

//return
//es para regresar un dato del function, si no, no regresaría nada.

function saludarReturn(){
	let respuesta = prompt("Hola, cómo tas?");
	if (respuesta =="bien"){
		alert("me alegro");
	} else {
		alert ("q mal pex");
	}
	return "todo ok";
}

let saludo = saludarReturn();
document.write(saludo + "<hr>");

//parametros
//son variables que se declaran y se utilizan en una misma función
document.write("Parametros" + "<br>");

function suma(num1, num2){
	let res = num1 + num2;
	return res;
	document.write(res + "<br>")
}

let resultado = suma(20,25);
document.write(resultado + "<hr>");

/*funciones flecha
	si solo se usa un parametro, no hace falta ponerle parentesis.
	no se utiliza return porque ya lo hace automáticamente.
	En algunos casos, no hace falta las llaves.
*/
document.write("funciones flechas" + "<br>");

const saludarFlecha = (nombre)=> document.write(`hola cómo estás? `+ nombre);

saludarFlecha("Esteban");
