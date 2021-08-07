//Formula matemática para calcular un descuento
const formula = (precio, porcentaje) => [precio * (100 - porcentaje)] / 100;

//Función que se va a llamar al momento de oprimir el botón
const calcular = () => {
    //Inputs
    const inputPrecio = document.getElementById('InputPrecio');
    const inputDescuento = document.getElementById('InputPorcentaje');
    //Valores de los inputs de tipo entero
    const precio = parseInt(inputPrecio.value);
    const descuento = parseInt(inputDescuento.value);
    //Llamando la formula anterior con los argumentos que el usuario ha puesto 
    const resultado = formula(precio, descuento);

    //Escribimos en HTML desde JS
    const resultadoParrafo = document.getElementById('ResultadoPrecio');

    resultadoParrafo.innerText = `El descuento realizado te deja el producto en ${resultado} pesos`;
}