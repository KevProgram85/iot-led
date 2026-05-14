import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import {
  getDatabase,
  ref,
  set
}
from "https://www.gstatic.com/firebasejs/12.13.0/firebase-database.js";

const firebaseConfig = {

  apiKey: "AIzaSyAgtJ_94cwR-y0q-FlI_8ZQSZbmKjEAZYU",

  authDomain: "encenderled-bf22c.firebaseapp.com",

  databaseURL: "https://encenderled-bf22c-default-rtdb.firebaseio.com",

  projectId: "encenderled-bf22c",

  storageBucket: "encenderled-bf22c.firebasestorage.app",

  messagingSenderId: "901218113802",

  appId: "1:901218113802:web:51b1a64ca25b539a4682f3"
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
