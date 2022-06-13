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

dineroCofla = 3;
dineroRoberto = 1.5;
dineroPedro = 1.7;

let nombre = prompt("¿Quién eres?");

if (nombre == "Cofla")
{
	dinero = dineroCofla;
}
else if ( nombre == "Roberto")
{
	dinero = dineroRoberto;
}
else if ( nombre == "Pedro")
{
	dinero = dineroPedro;
}

if (dinero >= 0.6 && dinero < 1)
{
	alert(`${nombre} Comprate el helado de agua`)
	alert("y te sobran " + (dinero - 0.6));
}

else if (dinero >= 1 && dinero < 1.6){
	alert(`${nombre} Comprate el helado de crema`)
	alert("y te sobran " + (dinero - 1));
}

else if (dinero >= 1.6 && dinero < 1.7){
	alert(`${nombre} el helado de heladix`)
	alert("y te sobran " + (dinero - 1.6));
}

else if (dinero >= 1.7 && dinero < 1.8){
	alert(`${nombre} Comprate el helado de heladovich`)
	alert("y te sobran " + (dinero - 1.7));
}

else if (dinero >= 1.8 && dinero < 2.9){
	alert(`${nombre} Comprate el helado de helardo`)
	alert("y te sobran " + (dinero - 1.8));
}

else if (dinero >= 2.9){
	alert(`${nombre} Comprate el helado con confites o el pote de 1/4kg`)
	alert("y te sobran " + (dinero - 2.9));
}

else
{
	alert(`${nombre} no te alcanza pa nada pa`);
}