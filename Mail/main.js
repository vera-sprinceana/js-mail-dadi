// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// (non usare INCLUDES)
let emailRegistrate=["ciccio@gmail.com", "pippo.96@hotmail.com", "gigio.bol@gmail.com",
    "francesco1@gmail.com", "sara.rossi@gmail.com", "mario.bianchi@gmail.com", "andrea.rossi@gmail.com"];

let mail=prompt("Inserisci la tua email");
 let mailTrovata=false;
 for(let i=0; i<emailRegistrate.length; i++){
    if(emailRegistrate[i] == mail[i]){
        mailTrovata=true;
        console.log("")
     }
}
if(mailTrovata==true){
    document.getElementById("email").innerHTML=`bentortato!`;
}else{
    document.getElementById("email").innerHTML=`Mail non trovata.<br>
    Registrati per proseguire!`;
}