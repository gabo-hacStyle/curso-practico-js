//Lista promedio
const lista = [1, 34, 56, 86, 12, 34, 3];
//Calculando el promedio (media aritmética)
const calcularPromedio = (lista) => {

    // let sumaLista = 0;

    // for(let i = 0; i < lista.length; i++){
    //     sumaLista = sumaLista + lista[i];
    // }
    
    //Metodo de arrays que funciona similar al ciclo for, en el que va sumando todas las iteraciones 
    const sumaLista = lista.reduce((acumulado = 0, nuevoElemento) => acumulado + nuevoElemento);

    const promedio = sumaLista / lista.length;
    
    return promedio.toFixed(1);
     
}
document.write(`Promedio es ${calcularPromedio(lista)} / \n`);

//Calculando la mediana

const lista2 = [124, 39, 2000000, 453, 165, 920 ];
//Función
const calcularMediana = (array) => {

    const lista = array.sort((a, b) => a - b);

    console.log(lista)

    const mitadLista = Math.floor(lista.length / 2);
    
    //Sí el numero de elementos en la lista es par retorna true, sí es impar, false
    const esPar = (numero) => {
        if(numero % 2 === 0){
            //Para calcular la mediana en una lista de numeros en que la cantidad es par,
            // debemos tomar ambos valores de la mitadLista, y sacarles un promedio
            //El valor 1 es el que se encuentra en la mitad de la lista, por ejemplo:

            // Sí el array tiene 4 elementos, la variable miradLista va a guardar el numero 2, 
            // lo que en un array significa la posicion 3, entonces le restamos un uno para que quede en la posicion
            // de la mitad. El siguiente numero despues de este tambien se toma en cuenta, por lo que tambien 
            // será guardado en memoria
            const valor1 = lista[mitadLista - 1];//El valor que se encuentra en la mitad
            const valor2 = lista[mitadLista]; //El valor que le sigue al que está en la mitad

            //Vamos a tomar la función previamente hecha para calcular los promedios
            //Y como parametros vamos a poner los dos valores de la lista que tenemos
            let mediana = calcularPromedio([valor1, valor2]);
            return mediana;
        }
        else {
            //La mediana es el numero encontrado en la mitad de la lista
            let mediana = lista[mitadLista];
            return mediana;
        }
    }
    return esPar(lista.length);
}
//Append
document.write(`Mediana es: ${calcularMediana(lista2)} / \n`);

//Calcular la moda

const listaModa = [1, 2, 3, 4, 1, 2, 2, 3, 3, 4, 4, 4, 4, 2, 3, 1, 2, 3, 4, 4, 2, 2, 1, 1, 2, 1, 2, 3, 3, 4];
//Función
const calcularModa = (lista) => {
    //Vamos a construir un objeto a partir del array que tenemos por argumento
    
    const lista1Count = {};//Establecemos un objeto
    lista.map(//Usamos .map para incrementar al objeto una cuenta total de cada elemento del array
        (elemento) => {
            if(lista1Count[elemento]){//Sí el elemento ya pasó
                lista1Count[elemento] += 1;//Se suma
            }
            else { //Sí el elemento no ha sido iterado
                lista1Count[elemento] = 1; //Se establece que ha pasado 1 vez
            }
        })

    
    //Luego que tenemos el objeto, lo convertimos en array con su matriz (asignación y valor)
    let listaArray = Object.entries(lista1Count); //Pasa a Array
    //Para obtener la moda, ordenamos los elementos de acuerdo a su valor de menor a mayor usando .sort, de tal manera 
    // que el elemento más repetido aparece de ultimas
    listaArray = listaArray.sort((a,b) => a[1] - b[1]);//Ordenamos (de acuerdo al valor ([1]), no asignacion (que sería [0]))
    const moda = listaArray[listaArray.length - 1];//Establecemos que la moda es igual al ultimo elemento en la lista ordenada
        
    return (`${moda[0]} aparece ${moda[1]} veces`)//'moda' es un array de dos elementos. El primer valor es el numero moda, el
    // segundo valor es la cantidad de veces que aparece, por lo que retornamos un string con ambos datos
}

document.write(`La moda es: ${calcularModa(listaModa)}`);
