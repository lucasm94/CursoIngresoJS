/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un con descuento l 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" 
se hace un con descuento l 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” 
se hace un con descuento l 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, 
si es  “FelipeLamparas” se hace un con descuento l 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  
se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var precioLamparas;
    var cantidad;
    var marca;
    var cuenta;
    var cuentaDescuento;
    var precioDescuento;
    precioLamparas = 35;
    cantidad = parseInt(document.getElementById('Cantidad').value);
    marca = parseInt(document.getElementById('Marca').value);
    cuenta = cantidad * precioLamparas;
    console.log('sin descuento ' +cuenta);
    if(cantidad > 5) {
        cuentaDescuento = (cuenta) * 0.50;
        console.log('con descuento '+cuentaDescuento);
        precioDescuento = parseInt(cuentaDescuento);
    } else if(cantidad > 4){
        if(marca == 'ArgentinaLuz') {
            cuentaDescuento = (cuenta) * 0.60;
            console.log('con descuento '+cuentaDescuento);
            precioDescuento = parseInt(cuentaDescuento);
        } else {
            cuentaDescuento = (cuenta) * 0.70;
            console.log('con descuento '+cuentaDescuento);
            precioDescuento = parseInt(cuentaDescuento);    
        }
    } else if(cantidad > 3) {
        if(marca == 'ArgentinaLuz' || marca == '“FelipeLamparas”') {
            cuentaDescuento = (cuenta) * 0.25;
            console.log('con descuento '+cuentaDescuento);
            precioDescuento = parseInt(cuentaDescuento);
        } else {
            cuentaDescuento = (cuenta) * 0.80;
            console.log('con descuento '+ cuentaDescuento);
            precioDescuento = parseInt(cuentaDescuento);
        }
    } else if(cantidad > 2) {
        if(marca != 'ArgentinaLuz' || marca != '“FelipeLamparas”') {
            cuentaDescuento = (cuenta) * 0.95;
            console.log('con descuento  '+ cuentaDescuento);
            precioDescuento = parseInt(cuentaDescuento);
        } else if(marca == 'ArgentinaLuz') {
            cuentaDescuento = (cuenta) * 0.85;
            console.log('con descuento '+ cuentaDescuento);
            precioDescuento = parseInt(cuentaDescuento);
        } else {
            cuentaDescuento = (cuenta) * 0.90;
            console.log('con descuento '+ cuentaDescuento);
            precioDescuento = parseInt(cuentaDescuento);
        }
    } else {
        precioDescuento = cuenta;
    }
    if(precioDescuento > 120) {
        var impuestoExtra;
        var mensaje;
        impuestoExtra = parseInt(precioDescuento * 0.10);
        precioDescuento = parseInt(precioDescuento * 1.10);
        mensaje = 'Usted pago '+impuestoExtra+' de IIBB.';
        document.getElementById('precioDescuento').value = precioDescuento;
        alert(mensaje);
    } else {
        document.getElementById('precioDescuento').value = precioDescuento;
    }
}
