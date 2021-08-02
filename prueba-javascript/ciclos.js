//Primer ciclo for
let i = 0;
while(i < 5){
    console.log(`El valor de i es ${i}`)
    i++;
}

//Segundo ciclo for 
let l = 10;
while(l > 2){
    console.log(`El valor de l es ${l}`)
    l--;
}

//Pregunta
const preguntar = () =>{
    const user = prompt(`Cuanto es 2 + 2`);
    const valor = parseInt(user)
    //return valor;
    const validar = () =>{
        if (valor === 4){
            alert(`Felicidades crack 🎈🎇🎉🎊`)
        }
        else {
            alert(`Error. Vuelve a intentarlo 🔄`)
            preguntar();
        }
    }
    validar();
}
preguntar();