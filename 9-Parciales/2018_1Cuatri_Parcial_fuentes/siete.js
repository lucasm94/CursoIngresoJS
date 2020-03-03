function mostrar()
{

    var promedioNotasTotales;
    var sumaNotas = 0;
    var notaMasBaja;
    var sexoNotaMasBaja;
    var cantidadVaronesNotaMayorCinco = 0;

    var contador = 0;
    while(contador < 5) {
        var nota;
        var sexo;

        do {
            nota = prompt('ingrese una nota entre 0 y 10');
            nota = parseInt(nota);
        } while(isNaN(nota) || nota > 10 || nota < 0);

        do {
            sexo = prompt('ingrese el sexo del alumno: f/m');
            sexo = sexo.toLowerCase();
        } while(sexo != 'f' && sexo != 'm');

        sumaNotas += nota;

        if(contador == 1 || nota < notaMasBaja) {
            notaMasBaja = nota;
            sexoNotaMasBaja = sexo;
        }

        if(sexo == 'm' && nota > 5) {
            cantidadVaronesNotaMayorCinco++;
        }

        contador++;

    }

    promedioNotasTotales = sumaNotas / 5;

    alert('promedio notas totales: '+promedioNotasTotales);
    alert('nota mas baja: '+notaMasBaja +', sexo de esa persona: '+sexoNotaMasBaja);
    alert('cantidad varones con nota mayor o igual a 6: '+cantidadVaronesNotaMayorCinco);

}