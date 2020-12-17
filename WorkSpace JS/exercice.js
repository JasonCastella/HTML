function isEven(){
    let nb = prompt("Veuillez saisir un nombre");
    if(nb%2==0){
        alert(nb + " est un nombre pair");
    } else {
        alert(nb + " est un nombre impair");
    }
}

function firstWord(){
let str =prompt("Veuillez écrire une phrase");
let words = str.split(' ');
alert("Le premier mot de la phrase est : " + words[0]);
}

function firstLetter(){
    let str =prompt("Veuillez écrire une phrase");
    let words = str.toLowerCase();
   words = words.replace(words.charAt(0), words.charAt(0).toUpperCase());
   alert(words);
}

function runTable(){
var array = [1,2,3,4,5,4,3,2,1];
array.forEach(element => {
   alert(element);
});
}

function pwdStrength(){

}
