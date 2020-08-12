//
// Programa de ejemplo - Insertar Elemento de Forma arbitraria
//

let nuevo = document.createElement('li');

let padre = document.getElementById('hijoQuerido').parentNode;

let hijoAnterior = document.getElementById('hijoQuerido');

padre.insertBefore(nuevo, hijoAnterior);

nuevo.innerHTML = 'Elemento agregado como primer hijo del elemento';



