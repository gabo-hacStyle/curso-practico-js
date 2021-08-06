const cupones = {   
    cupon1: 10,
    cupon2: 15,
    dads: 48
}
const formula = (precio, cupon) => (precio * (100 - cupon)) / 100;

const mostrar =  (resultado, contenedor) => contenedor.innerText = `El resultado total con el descuento del cupon aplicado es de ${resultado} pesos`; 

const calcularDescuento = () => {
    const contenedor = document.getElementById('ResultadoParrafo');
    const precio = 30;
    let dato = 'cupon2';
    if(dato === cupones.cupon1 || dato === cupones.cupon2 || dato === cupones.dads){
        if(dato === cupones.cupon1){
            dato = cupones.cupon1;
            const i = formula(precio, dato);
            mostrar(i, contenedor);
        } else if (dato === cupones.cupon2){
            dato = cupones.cupon2;
            const e = formula(precio, dato);
            mostrar(e, contenedor);
        } else if (dato === cupones.dads) {
            dato = cupones.dads;
            const f  = formula(precio, dato);
            mostrar(f, contenedor);
        }
    } else {
        contenedor.innerText = `Los datos colocados no son validos. Coloca otro cupón.`
    }
}