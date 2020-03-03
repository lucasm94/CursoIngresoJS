function mostrar()
{
    do {
        var repetciones = prompt("ingrese el número de repeticiones");
        repetciones = parseInt(repetciones);
    } while (isNaN(repetciones));

    for(var i = 0; i< repetciones; i++) {
        alert("Hola UTN FRA");
}


}//FIN DE LA FUNCIÓN