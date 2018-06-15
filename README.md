# Documentación sobre : *Proyecto 1: Spring 1 y 2*
## __Código César__

----
## Qué es el código Césa


> En criptografía, el cifrado César, también conocido como cifrado por desplazamiento, es un tipo de cifrado por sustitución en el que una letra en el texto original es reemplazada por otra letra que se encuentra un número fijo de posiciones más adelante en el alfabeto.

----
## Quién es el usuario
> El/la organizador(a) de un evento de cumpleaños que busca mantener en secreto los preparativos de la fiesta. Sola el / la organizador(a) pueden saber el contenido de los mensajes haciendo uso de la aplicación una vez acordada una clave de cifrado.

----
## Objetivos de uso
1. Cifrar un mensaje con una clave acordada para poder enviarla por mensaje de texto.
2. Descifrar un mensaje que el usuario ha recibido en un mensaje de texto haciendo uso de una clave.
3.Mantener la información transmitida inservible para usuarios no autorizados (dar ilegibilidad o carencia de sentido a un mensaje).

----

# Propuesta de resolución

###**Lógica de la aplicación **

Se analizó paso a paso que se necesitaba para hacer el cifrado, llegando a la conclusión de que era necesario:

* Obtener la clave de cifrado/descifrado.
* Identificar qué valor en código ASCII corresponde a cada letra del mensaje. Uso del método para obtener un valor ASCII de un carácter (devolver el valor unicode de un carácter)  
* Transformar el código ASCII encontrado por medio del corrimiento de su valor gracias a las fórmulas:

  * Para el cifrado: ((x-limite+n)%#elementos)+limite

  * Para el descifrado: ((x+limite-n)%#elementos)+limite

---

> Donde: x => Valor en ASCII de cada carácter

>  limite => Valor en ASCII donde comienza el conjunto de valores válidos

> n => Valor de espacios para el corrimiento (saltos)

> elementos => El número de caracteres válidos a usar. Ej.: 26 para las letras del abecedario o 10 para la cantidad de números.

----
* Devolver al nuevo valor ASCII su forma de carácter (devolver el carácter a partir de un valor unicode).
* Mostrar resultados en la pantalla.


*Técnicas de cifrado *

Hace uso de arreglos para iterar de un carácter a otro del mensaje y poder transformarlo. Convierte letras Mayúsculas, Minúsculas y Números.

Mayúsculas: ((x-65+n)%26)+65

Minúsculas: ((x-97+n)%26)+97

Números: ((x-48+n)%10)+48

Considerar que al espacio no lo transforma, solo lo pasa intacto.


*Técnicas de descifrado *

Hace uso de arreglos para iterar de un carácter a otro del mensaje y poder transformarlo. De Codifica letras Mayúsculas, Minúsculas y Números.
Considerar que para las letras minúsculas y los números hace un ajuste en la fórmula para corregir corrimientos impredecibles que realiza el navegador:

Mayúsculas: ((x+65-n)%26)+65

Minúsculas: ((x+90-n)%26)+92. El 90 acota los valores dentro de los caracteres de minúsculas, en tanto que el 92 corrige falsos corrimientos dentro del conjunto de valores válidos. Además considera sumar un valor de 26 para descifrar las letras w-z.

Números: ((x-48+n)%10)+42. El 48 acota los valores dentro de los caracteres de minúsculas, en tanto que el 42 corrige falsos corrimientos dentro del conjunto de valores válidos. Además considera sumar un valor de 10 para descifrar los números 5-9.


Considerar que al espacio no lo transforma, solo lo pasa intacto.

###**Diseño de UX**
Para el correcto entendimiento del uso de la aplicación, se decidió usar colores neutros y claros para mantener al usuario en calma y evitar se distraiga de las funciones principales.

El maquetado contiene una interfaz sencilla con un input principal de tamaño pequeño para ingresar la clave de codificación.En la parte inferior se encuentran los botones para elegir una u otra acción, además cuenta con dos espacios de igual tamaño para ingresar el Texto a cifrar y mostrar el mensaje cifrado.  

Se buscará posteriormente agregar la capacidad de importar y exportar mensajes.

*Técnicas de UX USADAS *

* Maquetado en papel
  * Se realizarón varios sketches hasta encontrar la interfaz más amigable que permita que el flujo de la aplicación sea: elegir la clave de codificación -> elegir la acción a ejecutar  -> Ingresar el mensaje a tratar -->Ver resultado como un producto de transformación (a nivel del otro mensaje).
  * Se realizaron entrevistas a usuarios sin experiencia con el uso de dispositivos móviles para evaluar el entendimiento de la aplicación
  * Se usó los sketches con los usuarios de prueba para evaluar si era fácil de llegar al objetivo o no, además se consideró sus gustos para la selección de los colores.

>Yocelin Garcia Romero Junio 2018
