/*var valores = [
    500,
    200,
    300,
    800,
    300,
];*/



function calcularMediaAritmetica (lista){
    
    /*let sumalista = 0;

    for (let i = 0; i < lista.length; i++){
     sumalista = sumalista + lista[i];
    
    }*/



const sumalista = lista.reduce(
function(valorAcumulado = 0, nuevoElemento){
    return valorAcumulado + nuevoElemento;
}

)


    
    const promedio = (sumalista/lista.length);

    return promedio;
    


}