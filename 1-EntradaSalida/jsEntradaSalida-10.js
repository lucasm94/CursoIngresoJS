/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var sueldo;
    var resto;
    var conDescuento;
    sueldo = parseInt(document.getElementById('importe').value);
    conDescuento = sueldo * 0.75;
    document.getElementById('resultado').value = parseInt(conDescuento);
}
