function mostrar()
{
    var cantidadPares = 0;
    var numerosPares = '';
    var numeroIngresado = parseInt(prompt("ingrese un numero"));
    
    for(var i = 1; i < numeroIngresado; i++) {
        if(i % 2 == 0) {
            cantidadPares++;
            numerosPares = numerosPares + ''+ i +'; ';
        }
    }
    alert('cantidad de numeros pares: ' + cantidadPares);
    alert('numeros pares hasta el numero ingresado: '+ numerosPares);

}//FIN DE LA FUNCIÓN