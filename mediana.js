

function calcularMediaAritmetica (lista){
const sumalista = lista.reduce(
function(valorAcumulado = 0, nuevoElemento){
    return valorAcumulado + nuevoElemento;
}
)
    
    const promedio = (sumalista/lista.length);

    return promedio;
    
}
var lista = [
    300,
    1000000,
    500,
    400,
];

lista.sort(function (a,b) {return a-b});
document.write(lista)


const mitadLista = parseInt(lista.length /2);

function esPar(numerito){
    if (numerito %  2 === 0 ){
        return true;
    }else {
        return false;
    }

}




if (esPar(lista.length)){
    const elemento1 =lista[mitadLista-1];
    const elemento2 =lista[mitadLista];
    
    const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2]);
    
mediana = promedioElemento1y2;

    
}else{
    mediana = lista[mitadLista];
}

