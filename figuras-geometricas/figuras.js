//VALORES GENERALES
const perimetro = {
    MEDIDA: 'cm',
    NOMBRE: 'Perímetro'
};
const area = {
    MEDIDA: 'cm^2',
    NOMBRE: 'Área'
};
    
//Código del Cuadrado


//Contenedores donde apareceran los valores
//const periContainer = document.getElementById('perime-container');
//const areaContainer = document.getElementById('area-container');

//Funcion que permite hallar el perimetro
const perimetroCuadrdo = (lado) => lado * 4;
//Función que permite hallar el área
const areaCuadrado = (lado) => lado * lado;
//Función template* que muestra todo
/**const muestra = (container, termino, funcion, medida) => {
    container.innerHTML = `<span> ${termino} de: ${funcion(medidaCuadrado)}${medida}`;
}*/
const calcularPerimCuadrado = () => {
    const input = document.getElementById('InputCuadrado');
    //Valor en entero
    const ladoCuadrado = parseInt(input.value);

    const perimetro = perimetroCuadrdo(ladoCuadrado);
    alert(`Tenemos que el perimetro es igual a ${perimetro}`);
}
const calcularAreaCuadrado = () => {
    const input = document.getElementById('InputCuadrado');
    //Valor en entero
    const ladoCuadrado = parseInt(input.value);

    const area = areaCuadrado(ladoCuadrado);
    alert(`Tenemos que el área es igual a ${area}`);
}


//Código del Triángulo


/**document.write(`Los lados miden: 
a: ${aTriangulo}cm, b: ${bTriangulo}cm, y la base: ${baseTriangulo}cm. `);
console.log(`La altura es igual a ${alturaTriangulo}.`);*/
const perimetroTriangulo = (ladoA, ladoB, ladoBase) => ladoA + ladoB + ladoBase;
const areaTriangulo = (ladoBase, alturaTriangulo) => (ladoBase * alturaTriangulo)/2;
/** document.write(` y el area es igual a ${areaTriangulo(baseTriangulo, alturaTriangulo)}`)
document.write(`El triángulo tiene un perimetro de  ${perimetroTriangulo(aTriangulo, bTriangulo, baseTriangulo)}`);*/

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

const pi = Math.PI;

const valorCircunferencia = (diametro) => pi * diametro;
const areaCirculo = (radio) => (radio * radio) * pi;



const calcularCircunferencia = () =>{
    const input = document.getElementById('InputRadio');
    const value = parseInt(input.value);
    //Determinando el diametro
    const diametro = value * 2;

    console.log(diametro)
    const circunferencia = valorCircunferencia(diametro);
    alert(`Tenemos que el área es igual a ${circunferencia}`)
}
const calcularAreaCirculo = () =>{
    const input = document.getElementById('InputRadio');
    const value = parseInt(input.value);

    const area = areaCirculo(value);
    alert(`Tenemos que el área es igual a ${area}`)
}