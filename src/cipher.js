window.cipher = {
  // ...
};

const abecedarioOriginal = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z'];
const posicionesOriginales = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
let resultado = document.getElementById("resultado");

const ingresarClave = () => {
  let clave = parseInt(document.getElementById("clave").value);
  return clave;
}
const encuentraIndice = (str) =>{
   //str = str.toUpperCase();
   let posicionesStr = new Array(abecedarioOriginal.length);
   for (let i=0; i<(str.length); i++){
      for (let j =0; j<(abecedarioOriginal.length); j++){
        if ((str[i]) === (abecedarioOriginal[j])){
           posicionesStr[i]=j;
        }
      }
   }
   return posicionesStr;
}

const codificarPosiciones = (vector) => {
  let codigo = ingresarClave();
  let numPosiciones = vector.length;
  let posicionesCodificadas = new Array(numPosiciones);
  for (let i=0; i<(vector.length); i++){
    posicionesCodificadas[i] = ((vector[i]+codigo) % 26);
  }
  return posicionesCodificadas;
}
const codificar = (posCodificadas) => {
  let numCifrado = posCodificadas.length;
  let vectorCifrado = new Array(numCifrado);
  for (let i=0; i<numCifrado; i++){
     for (let j =0; j<(posicionesOriginales.length); j++){
       if ((posCodificadas[i]) === (posicionesOriginales[j])){
          vectorCifrado[i] = abecedarioOriginal[j];
       }
     }
  }
  return vectorCifrado;
}

const decodificarPosiciones = (vectorPos) => {
  let codigo1 =33;
  let numPosiciones1 = vectorPos.length;
  let posicionesDecodificadas = new Array(numPosiciones1);
  for (let i=0; i<numPosiciones1; i++){
    posicionesDecodificadas[i] = (26 + ((vectorPos[i]-codigo1)%26))%26;
  }
  return posicionesDecodificadas;
}

const encoderCesar = () => {
  let vectorACodificar = (document.getElementById("aCifrar").value).toUpperCase();
  let pos = encuentraIndice(vectorACodificar);
  let indiceCodificado = codificarPosiciones(pos);
  let vectorCodificado = codificar(indiceCodificado);
  //return console.log(vectorCodificado);
  return resultado.innerHTML = "El resultado es: "+ vectorCodificado.join("");
}
const decoderCesar = () => {
  let vectorADecodificar = (document.getElementById("aCifrar").value).toUpperCase();
  let posDecode =encuentraIndice(vectorADecodificar);
  let indicesDeCodificado = decodificarPosiciones(posDecode);
  let decodificado = codificar(indicesDeCodificado);
  //return console.log(decodificado);
  return resultado.innerHTML = "El resultado es: "+ decodificado.join("");
}
