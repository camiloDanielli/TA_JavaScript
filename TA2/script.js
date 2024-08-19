
// 1. Suma de Rango
function sumAll(a, b) {
    let suma = 0;
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        suma += i;
    }
    return suma;
}

function mostrarSumaRango() {
    const a = parseInt(document.getElementById('rangoA').value);
    const b = parseInt(document.getElementById('rangoB').value);
    const resultado = sumAll(a, b);
    document.getElementById('resultadoSumaRango').textContent = `La suma de los números entre ${a} y ${b} es: ${resultado}`;
}

// 2. Conversión de Temperatura
function aCelsius(temp) {
    return ((temp - 32) * 5 / 9).toFixed(1);
}

function aFahrenheit(temp) {
    return ((temp * 9 / 5) + 32).toFixed(1);
}

function convertirAFahrenheit() {
    const tempC = parseFloat(document.getElementById('tempCelsius').value);
    const resultado = aFahrenheit(tempC);
    document.getElementById('resultadoFahrenheit').textContent = `${tempC}°C es equivalente a ${resultado}°F`;
}

function convertirACelsius() {
    const tempF = parseFloat(document.getElementById('tempFahrenheit').value);
    const resultado = aCelsius(tempF);
    document.getElementById('resultadoCelsius').textContent = `${tempF}°F es equivalente a ${resultado}°C`;
}

// 3. Determinación de Año Bisiesto
function leapYears(año) {
    return (año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0);
}

function esAñoBisiesto() {
    const año = parseInt(document.getElementById('año').value);
    const resultado = leapYears(año);
    document.getElementById('resultadoAñoBisiesto').textContent = `El año ${año} ${resultado ? "es" : "no es"} bisiesto.`;
}

// 4. Suma de Elementos de un Arreglo
function getSum(nums) {
    return nums.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}

function mostrarSumaArreglo() {
    const elementos = document.getElementById('elementosArreglo').value.split(',').map(Number);
    const suma = getSum(elementos);
    document.getElementById('resultadoSumaArreglo').textContent = `La suma de los elementos es: ${suma}`;
    console.log(`Suma de los elementos del arreglo: ${suma}`);
}

