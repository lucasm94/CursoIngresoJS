function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje;
//alert (mesDelAño);
	
	switch(mesDelAño) {
        case 'Febrero':
            mensaje = "Este mes no tiene más de 29 días.";
        default:
            mensaje = "Este mes tiene 30 o más días";

    alert(mensaje);
}//FIN DE LA FUNCIÓN