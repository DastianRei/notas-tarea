let listaNotas = [];

const objNota = {
  fecha: "",
  titulo: "",
  texto: "",
};

let editando = false;

const formulario = document.querySelector("#formulario");
const tituloInput = document.querySelector("#titulo");
const textoInput = document.querySelector("#texto");
const btnCrearInput = document.querySelector("#btn-crear");

ormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
  e.preventDefault();

  if (tituloInput.value === "" || textoInput.value === "") {
    alert("Todos los campos se deben llenar");
    return;
  }

  objNota.fecha = Date.now();
  objNota.titulo = tituloInput.value;
  objNota.texto = textoInput.value;
  agregarEmpleado();
}

function agregarEmpleado() {
  listaNotas.push({ ...objNota });
  formulario.reset();
  limpiarObjeto();
}
function limpiarObjeto() {
    objEmpleado.id = '';
    objEmpleado.nombre = '';
    objEmpleado.puesto = '';
}