const formula = (lado, base) => {
    const catetoA = base/2;
    const catetoB = lado;
    const h = Math.sqrt(catetoA*catetoA - catetoB*catetoB);
    console.log(h);
}

const calcularAltura = () => {
    const InputBase = document.getElementById('InputBase');
    const inputIguales = document.getElementById('InputIguales');

    const base = parseInt(InputBase.value);
    const lados = parseInt(inputIguales.value);

    const altura = formula(lados, base);

    alert(`La altura del triangulo es igual a: ${altura}`)
}