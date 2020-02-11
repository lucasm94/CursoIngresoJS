function mostrar()
{
//tomo la edad  
    var edad;
    edad = parseInt(document.getElementById('edad').value);
    if(edad > 17) {
        alert('sos mayor de edad');
    } else {
        alert('sos menor campeón');
    }

}//FIN DE LA FUNCIÓN