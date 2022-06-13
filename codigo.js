/*
- Usar let para usar una variable con alcance de un solo bloque {}, var para forma global y const para una variable que no cambiará el valor.
- Promp es una función para solicitar y almacenar un dato. sintaxis:
	promp("hola dime algo");
- Operadores de asignación y aritméticos.
- Se puede usar "" para convertir un dato a string. Ejemplo:
	frase = "" + num1 + num2;
- Concatenar = juntar datos para representarlos en pantalla. 1:11:00
- Usar los backpicks (``) para concatenar con ${}. Poner backpick con:
	ctrl + alt + }
		nombre = "Esteban Mendez";
		frase = `soy ${nombre} y estoy caminando`;
		document.write(frase);
	*también sirve para usar html dentro de js.
- Signos y operadores https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators
- Operadores lógicos
	let valor = true;
	let valor2 = true;
		let resultado = valor && valor2; si cualquiera de las 2 es falsa, entonces es false.
		let resultado2 = valor || valor2; Si cualquiera de las 2 es verdadera, entonces es verdadera.
		let resultado3 = !valor; convierte el valor a la afirmación lógica contraria.
- js usa camelCase = escribir la primera palabra con minús y la segunda con mayús. 		Ejemplo:
		parseInt(), getElementById(), etc.


*/

/* 
	COFLA 1
	Problema A
		- Ingresar el monto y mostrar el hewlado + caro
		- Si hay 2 o más, mostrarlos.
		- Indicar el cambio.
	Problema B
		-Si le alcanza uno, lo compra.
		- Si le alcanza dos, compra dos.
		- Si le alcanza tres y le sobra, regala el vuelto.
		- Debe mostrar qué compró y el vuelto.
	Problema C
		- Si el sospechoso miente, dar una descarga electrica.
		- Si no miente, no hacer nada.
		- Si el aparato no se decide, aclarar que la pregunta debe ser más clara.
*/

/* PROBLEMA A
	Roberto = $1.5
	Pedro = $1,7
	Cofla = $3

	Precio de helados:
	palito de helado de agua: $0.6
	palito de helado de crema: $1
	Bombón helado marca heladix: $1.6
	Bombón helado marca heladovich: $1.7
	Bombón helado marca helardo: $1.8
	Potecito de helado con confites: $2.9
	Pote de 1/4kg : $2.9
*/
