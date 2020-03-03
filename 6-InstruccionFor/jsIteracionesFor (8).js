function mostrar()
{

    var numeroIngresado = parseInt(prompt("ingrese un numero"));
    while(isNaN(numeroIngresado)) {
        numeroIngresado = parseInt(prompt("ingrese un numero"));
    }
    var medioNumeroIngresado = numeroIngresado/2;
    var noEsPrimo = false;
    for(var i = 2; i < medioNumeroIngresado; i++) {
        if(numeroIngresado % i == 0) {
            noEsPrimo=true;
            break;
        }
    }
    if(noEsPrimo) {
        alert('el numero ingresado no es primo');
    } else {
        alert('el numero ingresado es primo');
    }  

}//FIN DE LA FUNCIÓN