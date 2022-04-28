const btn = document.querySelector(".btn");
const f = document.querySelector(".f");
const c = document.querySelector(".c");
const form = document.querySelector(".form-control");
const result = document.querySelector(".result");
const buttonOne = document.querySelector(".buttonOne");
const buttonTwo = document.querySelector(".buttonTwo");
const buttonThree = document.querySelector(".buttonThree");

const change = () => {
	if (f.textContent === "°F") {
		f.textContent = "°C";
		c.textContent = "°F";
	} else {
		f.textContent = "°F";
		c.textContent = "°C";
	}
};

let fahrenheit;
let celsius;

const ftc = () => {
	fahrenheit = form.value * 1.8 + 32;
	result.textContent = `${form.value} °C to ${fahrenheit.toFixed(1)} °F`;
	result.style.fontWeight = "bold";
	form.value = "";
};

const ctf = () => {
	celsius = (form.value - 32) / 1.8;
	result.textContent = `${form.value} °F to ${celsius.toFixed(1)} °C`;
	result.style.fontWeight = "bold";
	form.value = "";
};

const convert = () => {
	if (form.value !== "") {
		if (c.textContent === "°C") {
			ctf();
		} else {
			ftc();
			result.style.color = "black";
		}
	} else {
		result.textContent = "Podaj jakąś wartość😉";
		result.style.color = "red";
		result.style.fontWeight = "bold";
	}
};

const reset = () => {
	result.textContent = "";
	form.value = "";
};

buttonOne.addEventListener("click", convert);
buttonTwo.addEventListener("click", reset);
buttonThree.addEventListener("click", change);
buttonThree.addEventListener("click", changeTwo);
