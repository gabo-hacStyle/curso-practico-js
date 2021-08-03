//Código del Cuadrado
console.group('Cuadrado')
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

const perimetroCuadrdo = (lado) =>{
    const perimetro = lado * 4;
    return perimetro;
}
const areaCuadrado = (lado) => {
    const area = lado * lado;
    areaContainer.after(`Hello ${area}`)
}

btPeriCuadrado.addEventListener('click', areaCuadrado(medidaCuadrado));

console.log(
    ` Área: ${areaCuadrado}cm2
    Perímetro: ${perimetroCuadrdo}cm
    Lado: ${medidaCuadrado}cm`
)

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