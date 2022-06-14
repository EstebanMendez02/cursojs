/*
Problema A
	-dejar pasar solo a los +18
	-el primero que entre después de las 2 no paga

Problema B
	-Crear mini sistema para registrar presentes (P) y ausentes (A)
	-Pasados 30 días, mostrar su situación final del alumno.
	-Máximo de 10% de ausencias

Problema C
	-Crear calculadora que simplifique el trabajo.
*/

//Problema A
/*
let free = false;
const validarCliente = (time) =>{
	let edad = prompt("¿cuántos años tienes?");
	if(edad >= 18){
		if(time>=2 && free == false){
			alert("Pasas gratis porque fuiste la primera persona en llegar");
			free = true;
		} else {
			alert("puedes pasar, pero tendrás que pagar");
		}
	} else {
		alert("eres menor de edad, NO PUEDES PASAR");
	}
}

validarCliente(2);
validarCliente(10);
validarCliente(22);
validarCliente(4);
*/

//Problema B

let cantidad = prompt("¿Cuántos alumnos son?")
let alumnosTotales = [];

for(let i=0; i<cantidad; i++){
	alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)), 0];
}

const tomarAsistencia = (nombre, p) =>  {
	let presencia = prompt(nombre);
	if(presencia == "p" || presencia == "P"){
		alumnosTotales[p][1]++;
	}
}

for (let i=0; i<10; i++){ //aquí creo el ciclo de días que será en total
	for (alumno in alumnosTotales){
		tomarAsistencia(alumnosTotales[alumno][0], alumno);
	}
}

for (alumno in alumnosTotales) {
	let resultado = `${alumnosTotales[alumno][0]}: <br>
	_________Presentes: ${alumnosTotales[alumno][1]}<br>
	_________Ausencias: ${10 - parseInt(alumnosTotales[alumno][1])}
	`
	if (10 - alumnosTotales[alumno][1] > 3){
		resultado += "<b style='color:red'> Reprobado por INASISTENCIAS</b><br><br>";
	} else {
		resultado += "<br><br>";
	}
	document.write(resultado);
}
// for (let alumno of alumnosTotales){
// 	document.write(alumno + "<br>")
// }

