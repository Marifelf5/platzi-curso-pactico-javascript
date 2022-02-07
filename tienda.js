function calcularPrecioConDescuento (precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio*porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}





function precionuevo(){
    const inputprice = document.getElementById("inputprice");
    const value1 = parseFloat(inputprice.value);
    
    const inputdiscount = document.getElementById("inputDiscount");
    const value2 = parseFloat(inputdiscount.value);

    const preciocondescuento = calcularPrecioConDescuento(value1,value2);

    const resultP = document.getElementById("resultP");
 
    resultP.innerText = "El nuevo precio con el descuento es de: clp " +  preciocondescuento;

 

}

