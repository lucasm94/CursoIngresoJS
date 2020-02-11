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
	alert(randomInt);
}//FIN DE LA FUNCIÓN