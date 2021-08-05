const formula = (a, base) => {
    const catetoBase = base / 2 ;
    const hipotenusa = a;
    const  p = (Math.sqrt((catetoBase* catetoBase) + (hipotenusa * hipotenusa)));
    return p;
}

const calcularAltura = () => {
    const inputBase = document.getElementById('InputBase');
    const inputIguales = document.getElementById('InputIguales');

    //Datos en medidas de enteros
    const base = parseInt(inputBase.value);
    const lados = parseInt(inputIguales.value);

    //Llamando la función de la formula con los datos del usuario como argumentos
    const altura = formula(lados, base);

    alert(`La altura del triangulo es igual a: ${altura}`)
}