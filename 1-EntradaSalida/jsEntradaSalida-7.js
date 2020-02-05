/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numeroUno;
    var numeroDos;
    var cuenta;
    var mensaje;
    numeroUno = parseInt(document.getElementById('numeroUno').value);
    numeroDos = parseInt(document.getElementById('numeroDos').value);
    cuenta = numeroUno + numeroDos;
    mensaje = 'La suma es ' + cuenta;
    alert(mensaje);
}

function restar()
{
	var numeroUno;
    var numeroDos;
    var cuenta;
    var mensaje;
    numeroUno = parseInt(document.getElementById('numeroUno').value);
    numeroDos = parseInt(document.getElementById('numeroDos').value);
    cuenta = numeroUno - numeroDos;
    mensaje = 'La suma es ' + cuenta;
    alert(mensaje);
}

function multiplicar()
{ 
	var numeroUno;
    var numeroDos;
    var cuenta;
    var mensaje;
    numeroUno = parseInt(document.getElementById('numeroUno').value);
    numeroDos = parseInt(document.getElementById('numeroDos').value);
    cuenta = numeroUno * numeroDos;
    mensaje = 'La multiplicacion es ' + cuenta;
    alert(mensaje);
}

function dividir()
{
	var numeroUno;
    var numeroDos;
    var cuenta;
    var mensaje;
    numeroUno = parseInt(document.getElementById('numeroUno').value);
    numeroDos = parseInt(document.getElementById('numeroDos').value);
    cuenta = numeroUno / numeroDos;
    mensaje = 'La division es ' + cuenta;
    alert(mensaje);
}

