document.addEventListener('DOMContentLoaded', function() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const convertButton = document.getElementById('convert');
    const convertButton2 = document.getElementById('convert2');
    const result = document.getElementById('result');
    const result2 = document.getElementById('result2');

    convertButton.addEventListener('click', function() {
        const celsius = parseFloat(celsiusInput.value);
        const fahrenheit = (celsius * 9 / 5) + 32;
        result.textContent = `Result: ${fahrenheit.toFixed(2)}°F`;
    });

    convertButton2.addEventListener('click', function() {
        const fahrenheit = parseFloat(fahrenheitInput.value);
        const celsius = (fahrenheit - 32) * 5 / 9;
        result2.textContent = `Result: ${celsius.toFixed(2)}°C`;
    });
});