prompt(`lol`);
const cupones = {   
    Anna: 10,
    Gabriel: 15,
    dads: 48
}
const formula = (precio, cupon) => (precio * (100 - cupon)) / 100;

const mostrar =  (resultado, contenedor) => contenedor.innerText = resultado; 

const calcularDescuento = () => {
    let dato = 'Gabriel';
    if(dato === cupones.Anna || dato === cupones.Gabriel || dato === cupones.dads){
        if(dato === cupones.Anna){
            const i = formula(dato, undefined);
            mostrar(i, undefined);
        } else if (dato === cupones.Gabriel){
            const e = formula(dato, undefined);
            mostrar(e, undefined);
        } else if (dato === cupones.dads) {
            const f  = formula(dato, undefined);
            mostrar(f, undefined);
        }
    } else {
        let resultado = `No es el nombre de un cupon valido`;
        mostrar(resultado, undefined);
    }
}