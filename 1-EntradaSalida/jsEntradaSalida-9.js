/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
    var resto;
    var aumento;
    sueldo = parseInt(document.getElementById('sueldo').value);
    aumento = sueldo * 1.10;
    document.getElementById('resultado').value = parseInt(aumento);
}
