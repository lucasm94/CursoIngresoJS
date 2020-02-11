function mostrar()
{
//tomo la edad  

    var edad;
    edad = parseInt(document.getElementById('edad').value);
    if(edad > 17) {
        alert('sos mayor de edad');
    }
    if(edad > 12 && edad < 18) {
        alert('sos adolescente');
    }
    if(edad < 13) {
        alert('sos un niño');
    }

}//FIN DE LA FUNCIÓN