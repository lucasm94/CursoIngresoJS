function mostrar()
{

    var cantidadDivisores = 0;
    var numerosDivisores = '';
    var numeroIngresado = parseInt(prompt("ingrese un numero"));
    
    for(var i = 1; i < numeroIngresado; i++) {
        if(numeroIngresado % i == 0) {
            cantidadDivisores++;
            numerosDivisores = numerosDivisores + ''+ i +'; ';
        }
    }
    alert('cantidad de numeros divisores: ' + cantidadDivisores);
    alert('divisores hasta el numero ingresado: '+ numerosDivisores);


}//FIN DE LA FUNCIÓN