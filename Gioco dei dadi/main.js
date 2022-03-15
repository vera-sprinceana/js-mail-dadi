// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?

a=document.getElementById("numeriGiocatore").innerHTML=Math.floor(Math.random()*6)+1;
b=document.getElementById("numeriComputer").innerHTML=Math.floor(Math.random()*6)+1;

    if(a > b){
        document.getElementById("containerNumeri").innerHTML=`HAI VINTO!`
    }else if(a==b){
        document.getElementById("containerNumeri").innerHTML=`RILANCIA I DATI`
    }else{
        document.getElementById("containerNumeri").innerHTML=`HAI PERSO :(`
    }
