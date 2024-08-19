// parte 1
function repeatString() {
    const texto = document.getElementById('textoRepetir').value;
    const repeticiones = parseInt(document.getElementById('repeticiones').value);
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';  // Limpiar el contenido anterior

    for (let i = 0; i < repeticiones; i++) {
        const p = document.createElement('p');
        p.textContent = texto;
        resultadoDiv.appendChild(p);
    }
}


function reverseString() {
    const texto = document.getElementById('textoInvertir').value;
    const textoInvertido = texto.split('').reverse().join('');
    const resultadoDiv = document.getElementById('resultado');
    const p = document.createElement('p');
    p.textContent = textoInvertido;
    resultadoDiv.innerHTML = '';  // Limpiar el contenido anterior
    resultadoDiv.appendChild(p);
}

// parte 2

 // Arreglo de ejemplo
 let ejemploArreglo = ["manzana", "banana", "cereza", "durazno"];
 console.log("Elementos del arreglo parte 2: "+ejemploArreglo)

 
 function removeFromArray(arreglo, item) {
     const index = arreglo.indexOf(item);
     if (index !== -1) {
         arreglo.splice(index, 1);
     }
     console.log(arreglo);
 }

 function removeItem() {
     const item = document.getElementById('itemToRemove').value;
     removeFromArray(ejemploArreglo, item);
 }

 // Arreglo de libros
 const books = [
     { title: "El señor de los anillos", author: "J.R.R. Tolkien" },
     { title: "Cien años de soledad", author: "Gabriel García Márquez" },
     { title: "1984", author: "George Orwell" },
     { title: "Don Quijote de la Mancha", author: "Miguel de Cervantes" }
 ];

 // Función para obtener los títulos
 function getTheTitles(books) {
     return books.map(book => book.title);
 }

 function showBookTitles() {
     const titles = getTheTitles(books);
     const bookTitlesDiv = document.getElementById('bookTitles');
     bookTitlesDiv.innerHTML = '';  // Limpiamos lo que haya previo

     titles.forEach(title => {
         const h1 = document.createElement('h1');
         h1.textContent = title;
         bookTitlesDiv.appendChild(h1);
     });
 }



// parte 3
function getOdds() {
    const nums = document.getElementById('numeros').value.split(',').map(Number);
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';  // Limpiar el contenido anterior

    const impares = nums.filter(num => num % 2 !== 0);

    impares.forEach(num => {
        const p = document.createElement('p');
        p.textContent = num;
        p.style.color = 'violet';
        p.style.fontSize = '16px';
        resultadoDiv.appendChild(p);
    });
}

function duplicates() {
    const nums = document.getElementById('numeros').value.split(',').map(Number);
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';  // Limpiar el contenido anterior

    const counts = {};
    let duplicado = null;
    let maxCount = 0;

    nums.forEach(num => {
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] > 1 && counts[num] > maxCount) {
            duplicado = num;
            maxCount = counts[num];
        }
    });

    if (duplicado !== null) {
        const h4 = document.createElement('h4');
        h4.textContent = `Número duplicado: ${duplicado}`;
        resultadoDiv.appendChild(h4);

        const p = document.createElement('p');
        p.textContent = `Aparece ${maxCount} veces`;
        resultadoDiv.appendChild(p);
    } else {
        const p = document.createElement('p');
        p.textContent = 'No hay números duplicados';
        resultadoDiv.appendChild(p);
    }
}