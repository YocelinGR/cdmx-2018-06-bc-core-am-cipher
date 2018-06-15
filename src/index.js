//Definicion de variables globales que representan el enlace del archivo HTML con el JS
//VARIABLES PARA EL DOM
let offset = document.getElementById("offset");
let string = document.getElementById("string");
let encode = document.getElementById("encode");
let decode = document.getElementById("decode");
let result = document.getElementById("result");
let withOffset = document.getElementById("hackerEdition");
let objString = document.getElementById("objString");
let hackerEdition = document.getElementById("wOffset");
// DEFINIENDO EVENTOS DEL DOM CON addEventListener

encode.addEventListener("click", cipherFun);
function cipherFun () {
  result.innerHTML = window.cipher.encode(string.value, offset.value);
}


decode.addEventListener("click", deCipherFun);
function deCipherFun () {
  result.innerHTML = window.cipher.decode(string.value, offset.value);
}

withOffset.addEventListener("click", withOffsetFun);
function withOffsetFun () {
  result.innerHTML = window.cipher.createCipherWithOffset(offset.value);
}
