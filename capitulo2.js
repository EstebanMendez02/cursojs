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
document.write("For" + "<br>")
for (let i = 6; i >= 0; i--) {
	document.write(i + "<br>");
}