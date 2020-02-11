/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var valor1;
var valor2;
var valor3;

function Sumar () 
{
	valor1 = parseInt(document.getElementById('PrecioUno').value);
    valor2 = parseInt(document.getElementById('PrecioDos').value);
    valor3 = parseInt(document.getElementById('PrecioTres').value);
    alert(valor1 + valor2 + valor3);
}

function Promedio () 
{
    var promedio;
	valor1 = parseInt(document.getElementById('PrecioUno').value);
    valor2 = parseInt(document.getElementById('PrecioDos').value);
    valor3 = parseInt(document.getElementById('PrecioTres').value);
    promedio = parseInt((valor1 + valor2 + valor3) / 3);
    alert(promedio);
}
function PrecioFinal () 
{
	var precioFinal;
    valor1 = parseInt(document.getElementById('PrecioUno').value);
    valor2 = parseInt(document.getElementById('PrecioDos').value);
    valor3 = parseInt(document.getElementById('PrecioTres').value);
    precioFinal = parseInt((valor1 + valor2 + valor3) * 1.21);
    alert(precioFinal);
}