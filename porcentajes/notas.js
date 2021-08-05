const formulaNota = (correctas, preguntas, maximo) => (correctas * maximo) / preguntas; 

const calcularNota = () => {
    const inputCorrectas = document.getElementById('InputCorrectas');
    const inputPreguntas = document.getElementById('InputPreguntas');
    const inputNotaMayor = document.getElementById('InputNotaMayor');

    const correctas = parseInt(inputCorrectas.value);
    const preguntas = parseInt(inputPreguntas.value);
    const maximoNota = parseInt(inputNotaMayor.value);

    let resultado = formulaNota(correctas, preguntas, maximoNota);
    console.log(resultado);
    resultado = resultado.toFixed(1);
    const notaParrafo = document.getElementById('ResultadoNota');
    
    notaParrafo.innerText = `Tu nota final aproximadamente es ${resultado}`;

}