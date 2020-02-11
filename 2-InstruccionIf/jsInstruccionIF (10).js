function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random;
	var randomInt;
	var max;
	var min;
	max = 10;
	min = 1;
	random = Math.random() * (max - min) + min;
	randomInt = parseInt(random);

	if(randomInt > 8) {
		alert('EXELENTE');
	} else {
		if(randomInt > 3) {
			alert('APROBO');
		} else {
			alert('Vamos, la proxima se puede');
		}	 
	}
}//FIN DE LA FUNCIÓN