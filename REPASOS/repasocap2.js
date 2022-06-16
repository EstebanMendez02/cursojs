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

let alumnos = [];

function registrarAlumnos(){
	alert("BIENVENIDO AL SISTEMA");
	let numAlumnos = prompt("¿Cuántos alumnos quieres registrar?");

	for(let i = 0; i < numAlumnos; i++){
		alumnos[i] = [prompt("Nombre de alumno " + (i+1)), 0];
	}
}

function registrarAsistencia(){
	alert("AHORA REGISTRARAS LAS ASISTENCIAS CON P Y LAS AUSENCIAS CON A")

	for(let i = 0; i < 5; i++){
		for (let alumno in alumnos){
			let lista = prompt(`${alumnos[alumno][0]} día ${i}`);
			if(lista == "p" || lista == "P"){
				alumnos[alumno][1]++;
			}
		}
	}
}

function situacionFinal(){
	let faltas = 0;

	for (let alumno in alumnos){
		faltas = (5 - parseInt(alumnos[alumno][1]));
		let resultado = `<br> ${alumnos[alumno][0]}: <br>
		___________Asistencias:  ${alumnos[alumno][1]} <br>
		___________Ausencias:  ${faltas}`;

		if(faltas >= 3){
			resultado+= "<b style='color:red'> Alumno REPROBADO POR FALTAS </b><br><br>";
		} else {
			resultado+= "<b style='color: green'> Alumno sin problema </b> <br>";
		}
		document.write(resultado);
		
	}
	// if(alumnos[])
}

registrarAlumnos();
// for(let alumno in alumnos){
//  document.write(alumno + " ");
// }
registrarAsistencia();
situacionFinal();






/*PROBLEMA A
let gratis = true;

function boliche(time){
	alert("Bienvenido al boliche gilipollas");
	var edad = prompt("Cuántos años tienes pa?");

	if(edad >= 18 && time > 2 && gratis == true){
		alert("Podes pasar pa");
		gratis = false;
	} else if (edad >= 18 && gratis == false) {
		alert("Podes pasar pero tendrás que pagar");
	} else if (edad < 18){
		alert("no podes pasar pelotudo");
	}
}

for(let i = 0; i<3; i++){
	boliche(3);	
}
*/