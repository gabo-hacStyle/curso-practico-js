//Código del Cuadrado

//Funciones que calculan el area y perimetro
const perimetroCuadrdo = (lado) => lado * 4;

const areaCuadrado = (lado) => lado * lado;

//Función con los elementos HTML
const HTMLelementsCuadrado = () => {
    const input = document.getElementById('InputCuadrado');
    //Valor en entero
    const lado = parseInt(input.value);
    return lado;
}

const calcularPerimCuadrado = () => {
    //Llamando la funcion con los valores
    const valor = HTMLelementsCuadrado();
    const perimetro = perimetroCuadrdo(valor);
    alert(`Tenemos que el perimetro es igual a ${perimetro}`);
}
const calcularAreaCuadrado = () => {
    //Llamando la funcion con los valores
    const valor = HTMLelementsCuadrado();

    const area = areaCuadrado(valor);
    alert(`Tenemos que el área es igual a ${area}`);
}


//Código del Triángulo

//Funciones que calculan el area y perimetro
const perimetroTriangulo = (ladoA, ladoB, ladoBase) => ladoA + ladoB + ladoBase;
const areaTriangulo = (ladoBase, alturaTriangulo) => (ladoBase * alturaTriangulo)/2;

const calcularPerimTriangulo = () =>{
    //Lado a del triángulo
    const inputA = document.getElementById('InputLadoA');
    const ladoA = parseInt(inputA.value);

    //Lado b del triángulo
    const inputB = document.getElementById('InputLadoB');
    const ladoB = parseInt(inputB.value); 
    
    // Base del triángulo 
    const inputBase = document.getElementById('InputBaseTriangulo');
    const base = parseInt(inputBase.value);

    const perimetro = perimetroTriangulo(ladoA, ladoB, base);
    alert(`Tenemos que el perimetro es igual a ${perimetro}`)
}
const calcularAreaTriangulo = () =>{
    //Altura del triángulo
    const inputAltura = document.getElementById('InputAlturaTriangulo');
    const altura = parseInt(inputAltura.value)
    
    // Base del triángulo 
    const inputBase = document.getElementById('InputBaseTriangulo');
    const base = parseInt(inputBase.value);

    const area = areaTriangulo(base, altura);
    alert(`Tenemos que el área es igual a ${area}`)
}

//Código para el circulo

//Valor de PI
const pi = Math.PI;

//Funciones que calculan el area y circunferencia
const valorCircunferencia = (diametro) => pi * diametro;
const areaCirculo = (radio) => (radio * radio) * pi;

//Función con los elementos HTML
const HTMLelementsCirculo = () => {
    const input = document.getElementById('InputRadio');
    const value = parseInt(input.value);
    return value;
}

const calcularCircunferencia = () =>{
    //Elementos del HTML
    const valor  = HTMLelementsCirculo();
    //Determinando el diametro
    const diametro = valor * 2;

    const circunferencia = valorCircunferencia(diametro);
    alert(`Tenemos que el área es igual a ${circunferencia}`)
}
const calcularAreaCirculo = () =>{
    //Elementos del HTML
    const valor = HTMLelementsCirculo();

    const area = areaCirculo(valor);
    alert(`Tenemos que el área es igual a ${area}`)
}