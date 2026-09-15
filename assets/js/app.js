// Clínica Veterinaria ConSentidos
// Lógica del cliente: catálogo de servicios y filtrado

// Catálogo de servicios que ofrece la clínica
const servicios = [
  "Consulta general",
  "Vacunación",
  "Desparasitación",
  "Cirugía menor",
  "Peluquería canina",
];

// Dibuja la lista de servicios dentro del contenedor indicado
function mostrarServicios(lista, contenedor) {
  contenedor.innerHTML = "";
  lista.forEach(function (servicio) {
    const item = document.createElement("li");
    item.textContent = servicio;
    contenedor.appendChild(item);
  });
}

// Devuelve los servicios cuyo nombre contiene el texto buscado
function filtrarServicios(lista, texto) {
  const busqueda = texto.trim().toLowerCase();
  if (busqueda === "") {
    return lista;
  }
  // Comparación sin distinguir mayúsculas ni acentos de espaciado
  return lista.filter(function (servicio) {
    return servicio.toLowerCase().includes(busqueda);
  });
}

// Punto de entrada: se ejecuta cuando el documento termina de cargar
// y deja la lista de servicios lista para el usuario.
document.addEventListener("DOMContentLoaded", function () {
  const contenedor = document.getElementById("lista-servicios");
  mostrarServicios(servicios, contenedor);
});
