//
// Programa de ejemplo - Todos los elementos hijos del el elemento padre 
//

let hijos = document.getElementById('padre');

for (let i = 0; i < hijos.children.length; i++) {
    console.log(hijos.children[i].tagName);
}