const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertBtn = document.getElementById("convertBtn");

const error = document.getElementById("error");
const result = document.getElementById("result");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");


convertBtn.addEventListener("click", convertTemperature);


function convertTemperature() {

    const value = temperatureInput.value.trim();
    const unit = unitSelect.value;

    error.textContent = "";
    result.classList.remove("show");

    if (value === "") {
        error.textContent = "Please enter a temperature.";
        return;
    }

    if (isNaN(value)) {
        error.textContent = "Please enter a valid numeric value.";
        return;
    }

    const temperature = Number(value);

    if (unit === "celsius" && temperature < -273.15) {
        error.textContent = "Temperature cannot be below absolute zero.";
        return;
    }

    if (unit === "fahrenheit" && temperature < -459.67) {
        error.textContent = "Temperature cannot be below absolute zero.";
        return;
    }

    if (unit === "kelvin" && temperature < 0) {
        error.textContent = "Kelvin temperature cannot be below 0 K.";
        return;
    }

    let celsius;
    let fahrenheit;
    let kelvin;

    if (unit === "celsius") {

        celsius = temperature;
        fahrenheit = (temperature * 9 / 5) + 32;
        kelvin = temperature + 273.15;

    } else if (unit === "fahrenheit") {

        fahrenheit = temperature;
        celsius = (temperature - 32) * 5 / 9;
        kelvin = celsius + 273.15;

    } else {

        kelvin = temperature;
        celsius = temperature - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;
    }

    celsiusResult.textContent = `${formatValue(celsius)} °C`;
    fahrenheitResult.textContent = `${formatValue(fahrenheit)} °F`;
    kelvinResult.textContent = `${formatValue(kelvin)} K`;

    result.classList.add("show");
}


function formatValue(value) {
    return Number(value.toFixed(2));
}


temperatureInput.addEventListener("input", function () {
    error.textContent = "";
});


temperatureInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        convertTemperature();
    }

});

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }

});