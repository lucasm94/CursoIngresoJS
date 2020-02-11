function mostrar()
{
//tomo la edad  
    var edad;
    edad = parseInt(document.getElementById('edad').value);
    if(edad > 17) {
        alert('sos mayor de edad');
    } else {
        if(edad > 12) {
            alert('sos adolescente');
        } else {
            alert('sos un niño');
        }
    }
}//FIN DE LA FUNCIÓN