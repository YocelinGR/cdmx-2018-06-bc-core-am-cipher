//Definicion de variables globales que representan el enlace del archivo HTML con el JS
//VARIABLES PARA EL DOM
let offset = document.getElementById("offset");
let string = document.getElementById("string");
let encode = document.getElementById("encode");
let decode = document.getElementById("decode");
let result = document.getElementById("result");
let withOffset = document.getElementById("hackerEdition");
let objString1 = document.getElementById("objString1");
let objString2= document.getElementById("objString2");
let hackerEdition = document.getElementById("wOffset");
// DEFINIENDO EVENTOS DEL DOM CON addEventListener

//Evento que llama a mandar el botón de codificar
encode.addEventListener("click", cipherFun);
function cipherFun () {
  result.innerHTML = window.cipher.encode(string.value, offset.value);
}

//Evento que manda a llamr el botón de decodificar
decode.addEventListener("click", deCipherFun);
function deCipherFun () {
  result.innerHTML = window.cipher.decode(string.value, offset.value);
}

//Evento que manda a llamar la funcion extra
withOffset.addEventListener("click", withOffsetFun);
function withOffsetFun () {
  objString1.value;
  objString1.value;
  result.innerHTML = window.cipher.createCipherWithOffset(offset.value);

}
