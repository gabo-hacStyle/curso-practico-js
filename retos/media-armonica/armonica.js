//Objeto de clientes por dia en una semana cualquiera
const objDia = [
    {
        dia: 'lunes',
        clientes: 340
    },
    {
        dia: 'martes',
        clientes: 456
    },
    {
        dia: 'miercoles',
        clientes: 219
    },
    {
        dia: 'jueves',
        clientes: 675
    },
    {
        dia: 'viernes',
        clientes: 530
    },
    {
        dia: 'sabado',
        clientes: 620
    },
    {
        dia: 'domingo',
        clientes: 129
    }
]
//Objeto de clientes en el primer semestre del año
const objMes = [
    {
        dia: 'Enero',
        clientes: 4250
    },
    {
        dia: 'Febrero',
        clientes: 5156
    },
    {
        dia: 'marzo',
        clientes: 4919
    },
    {
        dia: 'abril',
        clientes: 5195
    },
    {
        dia: 'mayo',
        clientes: 4530
    },
    {
        dia: 'junio',
        clientes: 4692
    },
    {
        dia: 'julio',
        clientes: 6073
    }
]

//Función de calcular la armonica con cualquier array que tenga un objeto con una propiedad 'clientes' como parametro
const calcularArmonicaClientes = (objetoClientes) => {
    //Calculamos el cociente de 1 sobre cada objeto de la lista siguiendo la formula de la armonica
    const cociente = objetoClientes.map(
        (clientesObjeto) => {
            return (1 / clientesObjeto.clientes)
        }
    );
    
    //Realizamos la suma de los concientes obtenidos en la anterior función
    const sumaClientes = cociente.reduce((suma = 0, nuevoValor) => 
        suma + nuevoValor
    );
    
    //Dividimos la cantidad de elmentos de la lista sobre el resultado de la suma en la constante anterior,
    // siguiendo la formula. Y lo redondeamos al entero abajo con Math.floor mas cercano
    const mediaArmonica = Math.floor(objetoClientes.length / sumaClientes);
    //Retornamos la formula
    return mediaArmonica;
}
//Lo escribimos en el documento llamando la funcion con las listas respectivas de argumentos
document.write(` El promedio armonico de clientes en la semana fué de ${calcularArmonicaClientes(objDia)} por dia. `);
document.write(`<br><br> El promedio armonico de clientes en el primer semestre del año fué de ${calcularArmonicaClientes(objMes)} por mes.`);