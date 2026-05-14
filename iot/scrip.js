import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getDatabase,
  ref,
  set
} from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {

  apiKey: "TU_API_KEY",

  authDomain: "TU_AUTH_DOMAIN",

  databaseURL: "TU_DATABASE_URL",

  projectId: "TU_PROJECT_ID",

};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

window.encender = function () {

  set(ref(db, 'led'), "ON");

  const estado = document.getElementById("estado");
  const led = document.getElementById("led");

  estado.innerHTML = "● ENCENDIDO";

  estado.classList.remove("apagado");
  estado.classList.add("encendido");

  led.classList.remove("apagado");
  led.classList.add("encendido");

  document.getElementById("info").innerHTML =
    "Última acción: Encendido - " + new Date().toLocaleTimeString();
}

window.apagar = function () {

  set(ref(db, 'led'), "OFF");

  const estado = document.getElementById("estado");
  const led = document.getElementById("led");

  estado.innerHTML = "● APAGADO";

  estado.classList.remove("encendido");
  estado.classList.add("apagado");

  led.classList.remove("encendido");
  led.classList.add("apagado");

  document.getElementById("info").innerHTML =
    "Última acción: Apagado - " + new Date().toLocaleTimeString();
}
