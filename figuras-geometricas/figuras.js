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
const input = document.getElementById('lado-cuadrado');
//Valor en entero
const medidaCuadrado = parseInt(input.value);
//Botones 
const btAreaCuadrado = document.getElementById('area-cuadrado-boton');
const btPeriCuadrado = document.getElementById('perimetro-cuadrado-boton');
//Contenedores donde apareceran los valores
const periContainer = document.getElementById('perime-container');
const areaContainer = document.getElementById('area-container')

//Funcion que permite hallar el perimetro
const perimetroCuadrdo = (lado) =>{
    const perimetro = lado * 4;
    return perimetro;
}
//Función que permite hallar el área
const areaCuadrado = (lado) => {
    const area = lado * lado;
    return area;
}
//Función template* que muestra todo
const muestra = (container, termino, funcion, medida) => {
    container.innerHTML = `<span> ${termino} de: ${funcion(medidaCuadrado)}${medida}`;
}
//Muestra especificamente el permietro
const muestraPerimetro = muestra(periContainer, perimetro.NOMBRE, perimetroCuadrdo, perimetro.MEDIDA);
//Muestra especificamente el área
const muestrArea = muestra(areaContainer, area.NOMBRE , areaCuadrado, area.MEDIDA);
//ARREGLAR AQUI. LAS FUNCIONES NO TIENEN QUE VENIR CON () PORQUE O SINO SE EJECUTAN ANTES SIN EL addEventListener
btAreaCuadrado.addEventListener('click', muestrArea);
btPeriCuadrado.addEventListener('click', muestraPerimetro);



//Código del Triángulo
console.group('Triangulos')
const aTriangulo = 3;
const bTriangulo = 4;
const baseTriangulo = 9;
const alturaTriangulo = 2.3;

/**
document.write(`Los lados miden: 
a: ${aTriangulo}cm, b: ${bTriangulo}cm, y la base: ${baseTriangulo}cm. `);
console.log(`La altura es igual a ${alturaTriangulo}.`);

const perimetroTriangulo = (ladoA, ladoB, ladoBase) => {
    const perimetro = ladoA + ladoB + ladoBase;
    return perimetro;
}
const areaTriangulo = (ladoBase, alturaTriangulo) => {
    const area = (ladoBase * alturaTriangulo)/2;
    return area;
}

document.write(` y el area es igual a ${areaTriangulo(baseTriangulo, alturaTriangulo)}`)
document.write(`El triángulo tiene un perimetro de  ${perimetroTriangulo(aTriangulo, bTriangulo, baseTriangulo)}`);

console.groupEnd();

//Código para el circulo
console.group('Circulo');
const radio = 12;
const diametro = radio + radio;
const pi = 3.141579;

const perimetroCirculo = (diametro) => {
    const perimetro = pi * diametro;
    return perimetro;
}
const areaCirculo = (radio) =>{
    const area = (radio * radio) * pi;
    return area;
}
*/