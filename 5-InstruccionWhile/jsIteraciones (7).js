function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	while(respuesta == 'si') {
		numero = prompt('ingrese un numero');
		acumulador+=parseInt(numero);
		contador++;
		respuesta = prompt('desea ingresar mas numeros? si/no');
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN