// codigo del cuadrado
console.group("cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado) {
 return (lado *4);
}

perimetroCuadrado()
//console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + " cm");

function areaCuadrada(lado){
  return lado**2; 
} 
areaCuadrada()
//console.log("El area del cuadrado mide: " + areaCuadrada + " cm al cuadrado");
console.groupEnd();





//Codigo del triangulo
console.group("Triangulos");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo = 5.5;

//console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm " + ladoTriangulo2 + "cm");
//console.log("La base del triangulo mide: " + baseTriangulo + " cm");
//console.log("La altura del triangulo mide: " + alturaTriangulo + " cm");

function perimetroTriangulo (lado1,lado2,base){
    return lado1 + lado2 + base
}
perimetroTriangulo()
//console.log("El perimetro del triangulo mide: " + perimetroTriangulo + " cm");

function areaTriangulo (base,altura) {
    return (base * altura) / 2
}
areaTriangulo()
//console.log("El area del triangulo mide: " + areaTriangulo + " cm");
console.groupEnd();

//Codigo del circulo
console.group("Circulo");
//const radioCirculo = 4;
function diametrodeCirculo (radio) {
    return radio*2
}
diametrodeCirculo()

const PI = 3.1415;
function perimetroCirculo (radio){
    const diametro = diametrodeCirculo(radio)
    return diametro*(2*PI);
}
perimetroCirculo();

function areaCirculo (radio) {
    return (radio*radio)*PI;
}
areaCirculo ();



//console.log("el radio del circulo es igual a " + radioCirculo);
//console.log("el diametro del circulo es igual a " + diametrodeCirculo);
//console.log("el perimetro del circulo es igual a " + perimetroCirculo);


console.groupEnd();

//Aqui interactuamos con el HTML cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    
    const cuadradoPerimetro = document.getElementById("cuadradoPerimetro");
    cuadradoPerimetro.innerText = "El perimetro del cuadrado es " + perimetro;
    

}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value;
    const area = areaCuadrada(value);
    const cuadradoArea = document.getElementById("cuadradoArea");
    cuadradoArea.innerText = "El area del cuadrado es " + area;
    

}

//Aqui interactuamos con el HTML triangulo
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = parseFloat(input1.value);
    
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = parseFloat(input2.value);
    
    const input3 = document.getElementById("InputTriangulobase");
    const value3 = parseFloat(input3.value);

    const perimetro = perimetroTriangulo(value1,value2,value3);
    
    const trianguloPerimetro = document.getElementById("trianguloPerimetro");
    trianguloPerimetro.innerText = "El perimetro del Triangulo es " + perimetro;
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("InputTriangulobase");
    const value1 = parseFloat(input1.value);

    const input2 = document.getElementById("InputTrianguloaltura");
    const value2 = parseFloat(input2.value);


    const area = areaTriangulo(value1,value2);
    const trianguloArea = document.getElementById("trianguloArea");
    trianguloArea.innerText = "El area del Triangulo es " + area;
}

//Aqui interactuamos con el HTML circulo

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value)
    const CirculoPerimetro = document.getElementById("CirculoPerimetro");
    CirculoPerimetro.innerText = "El perimetro del circulo es " + perimetro;
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value)
    const CirculoArea = document.getElementById("CirculoArea");
    CirculoArea.innerText = "El area del circulo es " + area;
}