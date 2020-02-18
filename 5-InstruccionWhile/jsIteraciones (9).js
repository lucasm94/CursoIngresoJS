function mostrar()
{

	// declarar variables
	var maximo;
	var minimo;

	var respuesta='si';
	var numero = prompt('ingrese un numero');
	maximo = numero;
	minimo = numero;
	respuesta = prompt('desea ingresar mas numeros? si/no');
	while(respuesta!='no') {
		numero = prompt('ingrese un numero');
		if(numero > maximo) {
			maximo = numero;
		} else if(numero < minimo) {
			minimo = numero;
		}
		respuesta = prompt('desea ingresar mas numeros? si/no');
	}

	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;


}//FIN DE LA FUNCIÓN