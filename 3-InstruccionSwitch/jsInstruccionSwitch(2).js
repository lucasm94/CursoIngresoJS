function mostrar()
{
//tomo la edad  
    var mesDelAño = document.getElementById('mes').value;

    alert (mesDelAño);  

    var mensaje;
    var mesDelAño = document.getElementById('mes').value;
    switch(mesDelAño) {
        case 'julio':
        case 'Agosto':
            mensaje = "Abrigate que hace frio.";
            break;
        case 'Enero':
        case 'Febrero':
        case 'Marzo':
        case 'Abril':
        case 'Mayo':
        case 'Junio':
            mensaje = "Falta para el invierno.";
            break;    
        default:
            mensaje = "Ya pasamos el frio, ahora calor!!!.";         
    }

    alert(mensaje);


}//FIN DE LA FUNCIÓN