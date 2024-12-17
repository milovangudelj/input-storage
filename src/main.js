import "./style.css";
import { addQueryStringParameters, updateUrl } from "./utils.js";

const form_a = document.getElementById("form_a");
const form_b = document.getElementById("form_b");
const form_c = document.getElementById("form_c");
const form_d = document.getElementById("form_d");

// Aggiorna l'URL con i valori del form A e B
form_a.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form_a);

  updateUrl(addQueryStringParameters(formData.entries()));
});
form_b.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form_b);

  updateUrl(addQueryStringParameters(formData.entries()));
});

// Salva i valori del form C e D in localStorage
form_c.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form_c);

  const value = JSON.stringify(Object.fromEntries(formData.entries()));

  localStorage.setItem(`form_data`, value);
});
form_d.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form_d);

  const value = JSON.stringify(Object.fromEntries(formData.entries()));

  localStorage.setItem(`form_data`, value);
});

// Riempi il form B con i valori passati come parametri nell'URL
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  for (const [key, value] of params) {
    const input = document.querySelector(`#form_b input[name="${key}"]`);

    if (input) input.value = value;
  }
});

// Riempi il form D con i valori salvati in localStorage
document.addEventListener("DOMContentLoaded", () => {
  const params = localStorage.getItem("form_data");

  if (params) {
    const data = JSON.parse(params);

    for (const [key, value] of Object.entries(data)) {
      const input = document.querySelector(`#form_d input[name="${key}"]`);

      if (input) input.value = value;
    }
  }
});
