let resultado = document.getElementById("resultado");


const ingresarClave = () => {
  let clave = parseInt(document.getElementById("clave").value);
  return clave;
}

const encodeASCII = () => {
  let vectorACodificar = document.getElementById("aCifrar").value;
  let alphabetToAscii = new Array(vectorACodificar.length);
  let asciiToEncode = new Array(vectorACodificar.length);
  let encodeToAscii = new Array(vectorACodificar.length);
  let CesarsKey = ingresarClave();
  for (let i=0; i<(vectorACodificar.length); i++) {

    alphabetToAscii[i] = vectorACodificar.charCodeAt(i);
    //asciiToEncode[i] = ((alphabetToAscii[i]-65+CesarsKey)%26)+65;
    ////
    if((alphabetToAscii[i]>=65) && (alphabetToAscii[i]<=90)){
       asciiToEncode[i] = ((alphabetToAscii[i]-65+CesarsKey)%26)+65;
    }else if(alphabetToAscii[i]===32){
       asciiToEncode[i] = alphabetToAscii[i];
    }else if((alphabetToAscii[i]>=97) && (alphabetToAscii[i]<=122)) {
      asciiToEncode[i] = ((alphabetToAscii[i]-97+CesarsKey)%26)+97;
    }else if((alphabetToAscii[i]>=48) && (alphabetToAscii[i]<=57)){
      asciiToEncode[i] = ((alphabetToAscii[i]-48+CesarsKey)%10)+48;
    }
    ///
    encodeToAscii[i] = String.fromCharCode(asciiToEncode[i]);
  }
   return (resultado.innerHTML = encodeToAscii.join(""));
}



const decodeFromAscii = () => {
  let vectorADecodificar = document.getElementById("aCifrar").value;
  let CesarsKey = ingresarClave();
  let encoderToAscii = new Array(vectorADecodificar.length);
  let asciiToDecode = new Array(vectorADecodificar.length);
  let decodeToAlphabet = new Array(vectorADecodificar.length);

  for (let i=0; i<(vectorADecodificar.length); i++) {
    encoderToAscii[i] = vectorADecodificar.charCodeAt(i);
    if((encoderToAscii[i]>=65) && (encoderToAscii[i]<=90)){
       asciiToDecode[i] = ((encoderToAscii[i]+65-CesarsKey)%26)+65;
    }else if(encoderToAscii[i]===32){
       asciiToDecode[i] = encoderToAscii[i];
    }else if((encoderToAscii[i]>=97) && (encoderToAscii[i]<=122)) {
      asciiToDecode[i] = ((encoderToAscii[i]+90-CesarsKey)%26)+92;
      console.log(asciiToDecode[i]);
    }else if((encoderToAscii[i]>=48) && (encoderToAscii[i]<=57)){
      asciiToDecode[i] = 0;
      asciiToDecode[i] = ((encoderToAscii[i]+48-CesarsKey)%10)+42;
      asciiToDecode[i] = ((encoderToAscii[i]+48-CesarsKey)%10)+42;
      if ((asciiToDecode[i])>=42 &&(asciiToDecode[i])<=47){
        asciiToDecode[i] = asciiToDecode[i]+10;
      }
    }
    decodeToAlphabet[i] = String.fromCharCode(asciiToDecode[i]);

  }
  //return console.log(decodeToAlphabet.join(""));
  return (resultado.innerHTML = decodeToAlphabet.join(""));
}
//window.cipher = {
  // ...
//};

/*const abecedarioOriginal = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z'];
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
*/
