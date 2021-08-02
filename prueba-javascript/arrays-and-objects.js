//Primer Reto listas
const daysInSpanish = [ 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo' ];
const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August' ]

const showFirstElement = (array) => {
    const firstElement = array[0];
    console.log(`The first element of the array is this: ${firstElement}`);
}

showFirstElement(daysInSpanish);
showFirstElement(months);

//Segundo reto listas
const showEachElement = (array) =>{
    array.forEach(element => {
        console.log(element)
    });
}
showEachElement(months);
showEachElement(daysInSpanish);

//Reto 3 listas
const myHouse = {
    cool: true,
    feets: 3000,
    color: 'White',
    windows: 5
}
const showObject = (object) => {
    for (const feature in object) {
        console.log(`${feature}: ${object[feature]} `)
    }
}
showObject(myHouse);