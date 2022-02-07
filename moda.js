var lista = [
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    2,
];


const listacount = {};


lista.map(
   
    function(elemento){
        if (listacount[elemento]){
            listacount[elemento]+= 1 ; 
        }else{
            listacount[elemento] = 1;     
       }         
    }
);


//convertir un array en un objeto
const listaArray = 
Object.entries(listacount).sort(
    function (valorAcumulado,Nuevovalor){
       return valorAcumulado[1] - Nuevovalor[1];

    }
);

const moda = listaArray[listaArray.length-1]
