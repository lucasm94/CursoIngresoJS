function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';
	while(respuesta == 'si') {
		numero = prompt('ingrese un numero');
		if(numero >=0) {
			positivo+=parseInt(numero);
		} else {
			negativo = parseInt(negativo * numero);
		}
		contador++;
		respuesta = prompt('desea ingresar mas numeros? si/no');
	}

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN