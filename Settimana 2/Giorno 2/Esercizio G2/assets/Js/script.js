//ESERCIZIO 1//
document.getElementById('title').innerHTML = 'Principali datatypes in JavaScript'
document.getElementById('dati').innerHTML = 'JavaScript prevede 5 tipi di dati o dati primitivi:';
document.getElementById('tipo').innerHTML =  'Numeri, stringhe, booleani, null e undefined.'; 
document.getElementById('descr').innerHTML = 'Le stringhe indicano un carattere o un insieme di caratteri; il dato numerico indica numeri che possono essere interi o decimali; il dato booleano indica due valori: true o false; Null è una keyword che indica l\'assenza intenzionale di un oggetto; infine Undefined è una proprietà che indica che una variabile non è stata definita o non assegnata';

//ESERCIZIO 2//

var name = 'Paky';
console.log('Paky')
document.getElementById('esdue').innerHTML = name;

//ESERCIZIO 3//

var numero1 = 12;
var numero2 = 20;
console.log(numero1 + numero2);
document.getElementById('estre').innerHTML = numero1 + numero2;

//ESERCIZIO 4//

var x = 12;
document.getElementById('esquattro').innerHTML = x;

//ESERCIZIO 5//



//ESERCIZIO 6//
var x = 12;
var numero3 = 4;
console.log(x - numero3);
document.getElementById('essei').innerHTML = x - numero3;

//ESERCIZIO 7//

var name1 = 'jhon';
var name2 = 'Jhon';
if(name1==name2) {
    console.log('le variabili sono uguali')
 } else {
    console.log('le variabili non sono uguali');
 }


