//variables
let numeroSecreto =4;
let numeroUsuario =0;
let intentos =1;
let palabraVeces = 'vez';
    while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor:");

    console.log(numeroUsuario);
    /*
    Este codigo realiza la comparación 
    */
    if (numeroUsuario == numeroSecreto) { 
        //Acertamos fue verdadera la condicion
        alert (`Acertaste el número es ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`) 
            alert ('El número secreto es mayor')
        }
        // incrementamos el contador cuando no acierta
        intentos = intentos + 1;
        palabraVeces = 'veces';
        //la condicion no se cumplió
        //alert ('lo siento no acertaste el numero');
    }
