// Determinando el descuento de cada uno de los cupones 
const cupones = {   
    cupon1: 10,
    cupon2: 15,
    especial: 50
}
//Funcion de la formula matematica para calcular el precio con el descuento aplicado. Parametros el precio y el valor de descuento del cupon.
const formula = (precio, cupon) => (precio * (100 - cupon)) / 100;
//Funcion general encargrado de mostrar los resultados en el HTML. Parametros un contenedor y el resultado de la operacion matematica
const mostrar =  (contenedor, resultado) => contenedor.innerText = `El resultado total con el descuento del cupon aplicado es de ${resultado} pesos`; 
//Contenedor donde aparecerán los datos
const contenedor = document.getElementById('ResultadoParrafo');


//Funcion especifica para el cupon1
const descuentoCupon1 = () => {
    //Valor introducido por el usuario y pasandolo a entero
    const inputPrecio = document.getElementById('InputPrecio');
    const precio = parseInt(inputPrecio.value);

    //Calculando el resultado de acuerdo a la funcion formula()
    const cupon1Resultado = formula(precio, cupones.cupon1);
    //Para mostrar el resultado en pantalla
    mostrar(contenedor, cupon1Resultado);
}

//Función especifica para el cupon 2
const descuentoCupon2 = () => {

    const inputPrecio = document.getElementById('InputPrecio');
    const precio = parseInt(inputPrecio.value);

    const cupon2Resultado = formula(precio, cupones.cupon2);
    mostrar(contenedor, cupon2Resultado);

}

//Funcion especifica para el cupon especial
const descuentoCuponEspecial = () => {

    const inputPrecio = document.getElementById('InputPrecio');
    const precio = parseInt(inputPrecio.value);

    const cuponDasdResultado = formula(precio, cupones.especial);
    
    mostrar(contenedor, cuponDasdResultado);

}