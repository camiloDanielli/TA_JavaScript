// 1. Generación de Contraseñas
function generatePassword(length) {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        password += caracteres[randomIndex];
    }
    return password;
}

function generarContrasena() {
    const length = parseInt(document.getElementById('passwordLength').value);
    if (length >= 8) {
        const contrasena = generatePassword(length);
        document.getElementById('resultadoContrasena').textContent = `Contraseña Generada: ${contrasena}`;
    } else {
        document.getElementById('resultadoContrasena').textContent = `La longitud debe ser al menos de 8 caracteres.`;
    }
}

// 2. Búsqueda del Más Viejo
const people = [
    { name: "Juan", yearOfBirth: 1945 },
    { name: "María", yearOfBirth: 1960 },
    { name: "Carlos", yearOfBirth: 1930 },
    { name: "Ana", yearOfBirth: 1955 }
];

function findTheOldest(people) {
    const currentYear = new Date().getFullYear();
    let oldestPerson = people[0];
    let maxAge = currentYear - oldestPerson.yearOfBirth;

    people.forEach(person => {
        const age = currentYear - person.yearOfBirth;
        if (age > maxAge) {
            maxAge = age;
            oldestPerson = person;
        }
    });

    return oldestPerson;
}

function buscarPersonaMasVieja() {
    const personaMasVieja = findTheOldest(people);
    document.getElementById('resultadoPersonaVieja').textContent = `La persona más vieja es: ${personaMasVieja.name}, nacida en ${personaMasVieja.yearOfBirth}.`;
}

// 3. Creación de una Función Completa
function ejecutarProgramaCompleto() {
    // Obtener valores del formulario
    const texto = document.getElementById('cadenaTexto').value;
    const repeticiones = parseInt(document.getElementById('repeticiones').value);
    const a = parseInt(document.getElementById('rangoA').value);
    const b = parseInt(document.getElementById('rangoB').value);
    const tempC = parseFloat(document.getElementById('tempCelsius').value);
    const tempF = parseFloat(document.getElementById('tempFahrenheit').value);
    const año = parseInt(document.getElementById('año').value);
    const arregloElementos = document.getElementById('elementosArreglo').value.split(',').map(Number);
    const passwordLength = parseInt(document.getElementById('passwordLengthCompleteFuction').value);
    const personas = convertirCadenaAArreglo();

    // Validaciones básicas
    if (isNaN(a) || isNaN(b) || isNaN(tempC) || isNaN(tempF) || isNaN(año) || isNaN(passwordLength)) {
        alert('Por favor ingrese valores numéricos válidos.');
        return;
    }

    // Ejecutar las funciones con los valores obtenidos
    const textoRepetido = repeatString(texto, repeticiones);
    const sumaRango = sumAll(a, b);
    const resultadoFahrenheit = convertirAFahrenheit(tempC);
    const resultadoCelsius = convertirACelsius(tempF);
    const resultadoAño = `El año ${año} ${leapYears(año) ? "es" : "no es"} bisiesto.`;
    const sumaArreglo = getSum(arregloElementos);
    const contrasenaGenerada = generatePassword(passwordLength);
    const personaMasVieja = findTheOldest(personas);
    const resultadoPersonaVieja = `La persona más vieja es: ${personaMasVieja.name}, nacida en ${personaMasVieja.yearOfBirth}.`;

    // Crear la cadena de resultados
    let resultadoCompleto = `
        <p>Texto repetido ${repeticiones} veces: ${textoRepetido}</p>
        <p>Suma del rango ${a} a ${b}: ${sumaRango}</p>
        <p>${tempC}°C en Fahrenheit: ${resultadoFahrenheit}°F</p>
        <p>${tempF}°F en Celsius: ${resultadoCelsius}°C</p>
        <p>${resultadoAño}</p>
        <p>Suma de los elementos del arreglo: ${sumaArreglo}</p>
        <p>Contraseña generada: ${contrasenaGenerada}</p>
        <p>${resultadoPersonaVieja}</p>
    `;

    // Mostrar los resultados en el HTML
    document.getElementById('resultadoProgramaCompleto').innerHTML = resultadoCompleto;
}

// Función para convertir la cadena a un arreglo de objetos
function convertirCadenaAArreglo() {
    const personasString = document.getElementById('personas').value;
    const personasArray = personasString.split(',').map(persona => {
        const [name, yearOfBirth] = persona.split(':').map(item => item.trim());
        return { 
            name: name, 
            yearOfBirth: parseInt(yearOfBirth) 
        };
    });
    return personasArray;
}

// Funciones auxiliares

function repeatString(texto, repeticiones) {
    let resultado = "";
    for (let i = 0; i < repeticiones; i++) {
        resultado += texto;
    }
    return resultado;
}

function sumAll(a, b) {
    let suma = 0;
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        suma += i;
    }
    return suma;
}

function convertirACelsius(temp) {
    return ((temp - 32) * 5 / 9).toFixed(1);
}

function convertirAFahrenheit(temp) {
    return ((temp * 9 / 5) + 32).toFixed(1);
}

function leapYears(año) {
    return (año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0);
}

function getSum(nums) {
    return nums.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}