//Ejercicio con if, else if y else
const plan = 'Basic';

const validatePlan = (plan) => {   
    if(plan === 'Free'){
        console.log(`Solo puedes tomar los cursos gratis`);
    } else if(plan === 'Basic'){
        console.log(`Puedes tomar casi todos los cursos de Platzi por un mes`);
    } else if (plan === 'Expert'){
        console.log(`Puedes tomar casi todos los cursos de Platzi durante un año`);
    } else {
        console.log(`Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año`);
    }
}

validatePlan(plan);

//Ejercicio con solo if
const plan2 = 'Expert+';

const validate = (plan) => {
    if(plan === 'Free'){
        console.log(`Solo puedes tomar los cursos gratis`);
    }
    if(plan === 'Basic'){
        console.log(`Puedes tomar casi todos los cursos de Platzi por un mes`)
    }
    if(plan === 'Expert'){
        console.log(`Puedes tomar casi todos los cursos de Platzi durante un año`);
    }
    if(plan === 'Expert+'){
        console.log(`Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año`);
    }
}

validate(plan2);

//Ejercicio Bonus con array y un solo condicional

//Arrays
const plans = ['Free', 'Basic', 'Expert', 'Expert+'];
const permissions = [
    'Solo puedes tomar los cursos gratis', 
    'Puedes tomar casi todos los cursos de Platzi por un mes',
    'Puedes tomar casi todos los cursos de Platzi durante un año',
    'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
];
//Función con un ciclo for
const validatingPermissions = (plan, permiso) => {
    for (let i = 0; i < plans.length; i++){
        if(plan === plans[i]){
            console.log(permiso[i]);
        }
    }
}
//Llamamos la la funcion, de primer parametro puede ser:
/* 1.Explicitamente el nombre. Eg: 'Basic' 
2. Array con el numero respondiente. Eg: plans[0]
*/
validatingPermissions(plans[1], permissions);