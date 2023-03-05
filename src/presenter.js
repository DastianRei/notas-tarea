let listaNotas = [];

const objNota = {
    fecha: '',
    titulo: '',
    texto: ''
}

let editando = false;

const formulario = document.querySelector('#formulario');
const tituloInput = document.querySelector('#titulo');
const textoInput = document.querySelector('#texto');
const btnCrearInput = document.querySelector('#btn-crear');

