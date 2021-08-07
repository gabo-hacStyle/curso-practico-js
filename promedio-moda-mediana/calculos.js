//Calculando el promedio (media aritmética)
const calcularPromedio = (lista) => {

    // let sumaLista = 0;

    // for(let i = 0; i < lista.length; i++){
    //     sumaLista = sumaLista + lista[i];
    // }
    
    //Metodo de arrays que funciona similar al ciclo for, en el que va sumando todas las iteraciones 
    const sumaLista = lista.reduce((acumulado = 0, nuevoElemento) => acumulado + nuevoElemento);

    const promedio = sumaLista / lista.length;
    
    return promedio;
     
}

// caalcularPromedio([8, 10]);



//Calculando la mediana


const lista2 = [12, 13, 2000000, 43, 65, 90 ];


const calcularMediana = (array) => {

    const lista = array.sort((a, b) => a - b);

    console.log(lista)


    let mediana;
    const mitadLista = Math.floor(lista.length / 2);
    
    console.log(mitadLista);
    //Sí el numero de elementos en la lista es par retorna true, sí es impar, false
    const esPar = (numero) => {
        if(numero % 2 === 0){
            //Para calcular la mediana en una lista de numeros en que la cantidad es par,
            // debemos tomar ambos valores de la mitadLista, y sacarles un promedio
            //El valor 1 es el que se encuentra en la mitad de la lista, por ejemplo:

            // Sí el array tiene 4 elementos, la variable miradLista va a guardar el numero 2, 
            // lo que en un array significa la posicion 3, entonces le restamos un uno para que quede en la posicion
            // de la mitad. El siguiente numero despues de este tambien se toma en cuenta, por lo que tambien lo colocaremos en 
            // la varriable valor2
            const valor1 = lista[mitadLista - 1];//El valor que se encuentra en la mitad
            const valor2 = lista[mitadLista]; //El valor que le sigue al que está en la mitad
            console.log(`Valor 1 = ${valor1} valor 2 = ${valor2}`)

            //Vamos a tomar la función previamente hecha para calcular los promedios
            //Y como parametros vamos a poner los dos valores de la lista que tenemos
            mediana = calcularPromedio([valor1, valor2]);
        }
        else {
            //La mediana es el numero encontrad en la mitad de la lista
            mediana = lista[mitadLista];
        }
    }
    esPar(lista.length);

    console.log(mediana);

}

calcularMediana(lista2);


//Calcular la moda
//Lista
const listaModa = [1, 2, 3, 4, 1, 2, 2, 3, 3, 4, 4, 4, 4, 2, 3, 1, 2, 3, 4, 4,2, 2, 1, 1, 2, 1, 2, 3, 3, 4];

const calcularModa = (lista) => {
    //Creamos un objeto transformando el array anterior
    const lista1Count = {};

    //Lo vamos llenando el objeto con un metodo de los arrays
    //.map va a recorrer el array
    lista.map(
        (elemento) => {
            if(lista1Count[elemento]){
                lista1Count[elemento] += 1;
            }
            else {
                lista1Count[elemento] = 1;
            }
        })

    //Un objeto para convertirlo en array
    //Y luego miramos el numero que mas se repite con .sort
    const listaArray = Object.entries(lista1Count).sort(
        (valorAcumulado, nuevoValor) => valorAcumulado[1] - nuevoValor[1]
    );
    const moda = listaArray[listaArray.length - 1];
        console.log(moda)
}
calcularModa(listaModa);
