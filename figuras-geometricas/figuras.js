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
//Input donde el usuario digita el numero
const input = document.getElementById('InputCuadrado');
//Valor en entero
const ladoCuadrado = parseInt(input.value);

//Contenedores donde apareceran los valores
const periContainer = document.getElementById('perime-container');
const areaContainer = document.getElementById('area-container');

//Funcion que permite hallar el perimetro
const perimetroCuadrdo = (lado) => lado * 4;
//Función que permite hallar el área
const areaCuadrado = (lado) => lado * lado;
//Función template* que muestra todo
/**const muestra = (container, termino, funcion, medida) => {
    container.innerHTML = `<span> ${termino} de: ${funcion(medidaCuadrado)}${medida}`;
}*/
const calcularPerimCuadrado = () => {
    const perimetro = perimetroCuadrdo(ladoCuadrado);
    alert(`Tenemos que el perimetro es igual a ${perimetro}`);
}
const calcularAreaCuadrado = () => {
    const area = areaCuadrdo(ladoCuadrado);
    alert(`Tenemos que el área es igual a ${area}`);
}


//Código del Triángulo
/**
console.group('Triangulos')
const aTriangulo = 3;
const bTriangulo = 4;
const baseTriangulo = 9;
const alturaTriangulo = 2.3;

/**
document.write(`Los lados miden: 
a: ${aTriangulo}cm, b: ${bTriangulo}cm, y la base: ${baseTriangulo}cm. `);
console.log(`La altura es igual a ${alturaTriangulo}.`);

const perimetroTriangulo = (ladoA, ladoB, ladoBase) => ladoA + ladoB + ladoBase;
const areaTriangulo = (ladoBase, alturaTriangulo) => (ladoBase * alturaTriangulo)/2;

document.write(` y el area es igual a ${areaTriangulo(baseTriangulo, alturaTriangulo)}`)
document.write(`El triángulo tiene un perimetro de  ${perimetroTriangulo(aTriangulo, bTriangulo, baseTriangulo)}`);

console.groupEnd();

//Código para el circulo
console.group('Circulo');
const radio = 12;
const diametro = radio + radio;
const pi = Math.PI;

const perimetroCirculo = (diametro) => pi * diametro;
const areaCirculo = (radio) => (radio * radio) * pi;

*/