function mostrar()
{

	//declarar contadores y variables 
	var acumPositivos = 0;
	var acumNegativos = 0;
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var contadorPares = 0;
	var contadorCeros = 0;
	var numero;
	var respuesta="si";

	while(respuesta!="no" || isNaN(numero))	{
		numero= parseInt(prompt('ingrese un numero'));
		if(numero == 0) {
			contadorCeros++;
		} else if(numero > 0) {
			contadorPositivos++;
			acumPositivos += numero;
		} else {
			contadorNegativos++;
			acumNegativos+=numero;
		}
		if(numero % 2 == 0) {
			contadorPares++;
		}
		respuesta = prompt('desea ingresar mas numeros? si/no');
	}

	var promedioPositivos = acumPositivos / contadorPositivos;
	var promedioNegativos = acumNegativos / contadorNegativos;
	var diferenciaPosNeg = acumPositivos - acumNegativos;

	console.log('ceros: ' +contadorCeros);
	console.log('contadorPositivos: ' +contadorPositivos);
	console.log('contadorNegativos: ' +contadorNegativos);
	console.log('acumPositivos: ' +acumPositivos);
	console.log('acumNegativos: ' +acumNegativos);
	console.log('promedioPositivos: ' +promedioPositivos);
	console.log('promedioNegativos: ' +promedioNegativos);
	console.log('diferenciaPosNeg: ' +diferenciaPosNeg);

}//FIN DE LA FUNCIÓN