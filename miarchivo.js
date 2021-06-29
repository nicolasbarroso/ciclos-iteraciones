// Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.


let entrada = prompt("¡Bienvenidx! Ingresá tu nombre");
while(entrada != "ESC" ){
    console.log("Genial, acaba de llegar "+ entrada+ " ¡Iúju!");
    //En la próxima iteración se evalúa si no es ESC.
    entrada = prompt("Para terminar el proceso, escribí ESC");
}
