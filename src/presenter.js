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

formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
  e.preventDefault();

  if (tituloInput.value === "" || textoInput.value === "") {
    alert("Todos los campos se deben llenar");
    return;
  }

  objNota.fecha = Date.now();
  objNota.titulo = tituloInput.value;
  objNota.texto = textoInput.value;
  console.log(objNota);
  crearNota();
}
function mostrarNotas() {
    limpiarHTML();
  const divNotas = document.querySelector(".div-notas");

  listaNotas.forEach((nota) => {
    const { fecha, titulo, texto } = nota;

    const parrafo = document.createElement("p");
    parrafo.textContent = `${fecha} - ${titulo} - ${texto} - `;
    parrafo.dataset.id = fecha;
    const eliminarBoton = document.createElement("button");
    eliminarBoton.onclick = () => eliminarEmpleado(titulo);
    eliminarBoton.textContent = "Eliminar";
    eliminarBoton.classList.add("btn", "btn-eliminar");
    parrafo.append(eliminarBoton);
    const hr = document.createElement("hr");
    divNotas.appendChild(parrafo);
    divNotas.appendChild(hr);
  });
}
function eliminarEmpleado(titulo) {
  listaNotas = listaNotas.filter((nota) => nota.titulo !== titulo);
  limpiarHTML();
  mostrarNotas();
}
function crearNota() {
  listaNotas.push({ ...objNota });
  mostrarNotas();
  formulario.reset();
  limpiarObjeto();
}
function limpiarObjeto() {
  objNota.fecha = "";
  objNota.titulo = "";
  objNota.texto = "";
}
function limpiarHTML() {
  const divNotas = document.querySelector(".div-notas");
  while (divNotas.firstChild) {
    divNotas.removeChild(divNotas.firstChild);
  }
}
