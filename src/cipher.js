window.cipher = {
 //MÉTODO ENCODE: CODIFICA EL TEXTO
 //objString1 : objString1,
 //objString2 : objString2,
  encode : (string, offset) => {
  offset = parseInt(offset);
    //console.log(string, offset);
  let alphabetToAscii = new Array(string.length);
  let asciiToEncode = new Array(string.length);
  let encodeToAscii = new Array(string.length);

  for (let i=0; i<(string.length); i++) {
    alphabetToAscii[i] = string.charCodeAt(i);//charCodeAt devuelve el código unicode del caracter
    // Condición de las mayusculas
    if((alphabetToAscii[i]>=65) && (alphabetToAscii[i]<=90)){
       asciiToEncode[i] = ((alphabetToAscii[i]-65+offset)%26)+65;
    // Condición de caractéres especiales
    }else if((alphabetToAscii[i]>=32) && (alphabetToAscii[i]<=47)){
       asciiToEncode[i] = alphabetToAscii[i];
    //Condición de minúsculas
    }else if((alphabetToAscii[i]>=97) && (alphabetToAscii[i]<=122)) {
      asciiToEncode[i] = ((alphabetToAscii[i]-97+offset)%26)+97;
    //Condición de números
    }else if((alphabetToAscii[i]>=48) && (alphabetToAscii[i]<=57)){
      asciiToEncode[i] = ((alphabetToAscii[i]-48+offset)%10)+48;
    }
    // fromCharCode devuelve el caractér correspondiente a un número unicode
    encodeToAscii[i] = String.fromCharCode(asciiToEncode[i]);
  }
  /*result.innerHTML = encodeToAscii.join("") es incorrecto por que es un objeto DOM
   y no un string, como lo esperan las prubas unitarias */
  return encodeToAscii.join("");
},
 // Método decode: devuelve el texto a su estado natural
  decode : (string, offset) => {
  let encoderToAscii = new Array(string.length);
  let asciiToDecode = new Array(string.length);
  let decodeToAlphabet = new Array(string.length);

  for (let i=0; i<(string.length); i++) {
    encoderToAscii[i] = string.charCodeAt(i);
    //Condición para mayúsculas: No hay compensación, solo acción contraria al encode
    if((encoderToAscii[i]>=65) && (encoderToAscii[i]<=90)){
       asciiToDecode[i] = ((encoderToAscii[i]+65-offset)%26)+65;
    // Condición para caractéres especiales: No hay compensación ni proceso decode-> Se pasa tal cual
    }else if((encoderToAscii[i]>=32) && (encoderToAscii[i]<=47)){
       asciiToDecode[i] = encoderToAscii[i];
   /*Condición para minúsculas: Se decodifica, con operación contraria y se compensa corrimiento de conjunto
   de valores con ´+90, y corrimiento dentro del conjunto con +92. Se agrega condicion de sumar +26 a
   las últimas 5 letras*/
    }else if((encoderToAscii[i]>=97) && (encoderToAscii[i]<=122)) {
      asciiToDecode[i] = ((encoderToAscii[i]+90-offset)%26)+92;
      if ((asciiToDecode[i])>=92 &&(asciiToDecode[i])<=96){
        asciiToDecode[i] = asciiToDecode[i]+26;
      }
      //console.log(asciiToDecode[i]);
      /*Condición para números: Se decodifica, con operación contraria y se compensa corrimiento de conjunto
      de valores con ´+48, y corrimiento dentro del conjunto con +42. Se agrega condicion de sumar +10 a
      los últimas 6 numeros*/
    }else if((encoderToAscii[i]>=48) && (encoderToAscii[i]<=57)){
      asciiToDecode[i] = 0;
      asciiToDecode[i] = ((encoderToAscii[i]+48-offset)%10)+42;
      //asciiToDecode[i] = ((encoderToAscii[i]+48-offset)%10)+42;
      if ((asciiToDecode[i])>=42 &&(asciiToDecode[i])<=47){
        asciiToDecode[i] = asciiToDecode[i]+10;
      }
    }
    decodeToAlphabet[i] = String.fromCharCode(asciiToDecode[i]);

  }
  //return console.log(decodeToAlphabet.join(""));
  //result.innerHTML = decodeToAlphabet.join("");
  return decodeToAlphabet.join("");
},
   createCipherWithOffset : (offset) =>{
      let encodePhrase = objString1.value;
      let decodePhrase = objString2.value;
      let objCipher ={
        offset : offset,
        encodePhrase : encodePhrase,
        decodePhrase : decodePhrase,
        encode : (encodePhrase) =>{
          return cipher.encode(encodePhrase,offset);
        },
        decode : (decodePhrase) =>{
          return cipher.decode(decodePhrase,offset);
        }
      }
      return ("Frase cifrada: "+ objCipher.encode(encodePhrase) + "\n"+ "Frase Descifrada: " + objCipher.decode(decodePhrase));
      //return objCipher;
   }
};
