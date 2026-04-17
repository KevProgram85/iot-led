function encender() {
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

function apagar() {
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