//
// Programa de ejemplo - Colocar Elementos demanera arbitraria 


let hijoMedio = document.createElement('li');

let padre = document.getElementById('hijoMenor').parentNode;

let hijoNuevo = document.getElementById('hijoMenor');

padre.insertBefore(hijoMedio, hijoNuevo);

hijoMedio.innerHTML = 'Esto es un nuevo Elemento';
