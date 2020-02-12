function mostrar()
{
//tomo la edad  
    var mesDelAño = document.getElementById('mes').value;
    var mensaje;
	
	switch(mesDelAño) {
        case 'Febrero':
            mensaje = 'tiene 28 dias';
            break;
        case 'Abril':
        case 'Noviembre':
        case 'Septiembre':
        case 'Junio':
            mensaje = "tiene 30 dias";
            break;    
        default:
            mensaje = "tiene 31 dias";         
    }

    alert(mensaje);

}//FIN DE LA FUNCIÓN