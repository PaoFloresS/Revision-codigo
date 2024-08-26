// Selecciona el formulario por su ID
var formulario = document.querySelector("#form");

formulario.onsubmit = function(e) {
  // Evita que el formulario se envíe y la página se recargue
  e.preventDefault();

  // Asigna las entradas del formulario a variables
  var n = formulario.elements[0]; // Elemento para el nombre
  var edadElemento = formulario.elements[1]; // Elemento para la edad
  var na = formulario.elements[2]; // Elemento para la nacionalidad

  // Obtén los valores de las entradas
  var nombre = n.value;
  var edad = edadElemento.value;

  // Obtén la nacionalidad seleccionada
  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;

  // Muestra en la consola los valores obtenidos
  console.log(nombre, edad);
  console.log(nacionalidad);

  // Valida que el nombre no esté vacío
  if (nombre.length === 0) {
    n.classList.add("error"); // Añade la clase 'error' si el campo está vacío
  }

  // Valida que la edad esté dentro del rango permitido
  if (edad < 18 || edad > 120) {
    edadElemento.classList.add("error"); // Añade la clase 'error' si la edad no es válida
  }

  // Si el nombre y la edad son válidos, agrega al invitado
  if (nombre.length > 0 && (edad >= 18 && edad < 120)) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
};

// Crea el botón para eliminar invitados
var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br");

// Añade el botón al cuerpo del documento
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

// Función para agregar un invitado a la lista
function agregarInvitado(nombre, edad, nacionalidad) {
  // Traduce el código de nacionalidad a un nombre más legible
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  } else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  } else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  } else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

  // Selecciona la lista de invitados
  var lista = document.getElementById("lista-de-invitados");

  // Crea un nuevo div para el invitado
  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");
  lista.appendChild(elementoLista);

  // Función para crear un elemento de la lista con una descripción y un valor
  function crearElemento(descripcion, valor) {
    var spanDescripcion = document.createElement("span");
    var inputValor = document.createElement("input");
    var espacio = document.createElement("br");
    spanDescripcion.textContent = descripcion + ": ";
    inputValor.value = valor;
    elementoLista.appendChild(spanDescripcion);
    elementoLista.appendChild(inputValor);
    elementoLista.appendChild(espacio);
  }

  // Crea y agrega los elementos para nombre, edad y nacionalidad
  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);

  // Crea el botón para eliminar al invitado
  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  var corteLinea = document.createElement("br");

  // Añade el botón de borrar y una línea de separación al elemento de la lista
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  // Evento para eliminar al invitado cuando se hace clic en el botón
  botonBorrar.onclick = function() {
    botonBorrar.parentNode.remove(); // Elimina el elemento de la lista
  };
}
