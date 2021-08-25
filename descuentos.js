//Programa que diga cual es el valor de un producto luego de aplicarle un descuento determinado.
//Program that says the product value next to apply a determined descount.





var obtener_precio_descuento = function(precio, descuento){
    precio_con_descuento = precio - descuento * precio / 100;
    return precio_con_descuento;
}

function mostrarPrecio(){

    var precio = document.getElementById("precio").value;

    var descuento = document.getElementById("descuento").value;

    var precio_descuento = obtener_precio_descuento(precio, descuento);
    
    const p = document.getElementById("precio_con_descuento");
    

    p.innerText = "El precio con descuento del producto es de: "+precio_descuento;
}


