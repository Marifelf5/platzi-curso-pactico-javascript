const salariosCol = colombia.map(
    function(personita){
     return personita.salary;
    }
)
const salariosOr = salariosCol.sort(
    function ordenar (valor1,valor2) {
    return valor1-valor2;
  }
);

function esPar(numerito) {
    return (numerito % 2 === 0);
}

function calcularMediaAritmetica (lista){
    const sumalista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento){
    return valorAcumulado + nuevoElemento;
   } 
);
     const promedio = (sumalista/lista.length);
     return promedio;
}


function medianaSalarios(lista){
    const mitad = parseInt(lista.length /2);
    
    if (esPar(lista.length)){
      const personitaMitad1 =lista[mitad -1];
      const personitaMitad2 =lista[mitad];
      
      const mediana = calcularMediaAritmetica
      ([personitaMitad1, personitaMitad2]);
      
      return mediana;
     
    

    }else{
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }

}

console.log(
    medianaSalarios(salariosOr)
);