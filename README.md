# Practica-ping-pong

IMPORTANTE: Enlace a GitHub pages para visualizar la aplicación corriendo en el navegador: https://juancamilo11.github.io/Practica-ping-pong/

##Lista de preguntas referentes a JavaScript

---

1. Indique las principales características del lenguaje de programación JavaScript y qué lo hace especial?
  
  R/. JavaScript es un lenguaje de programación de alto nivel, es interpretado, es debilmente tipado y de tipado dinámico, es multiparadigma, 
  case sensitive y tiene una sintaxis que nos ahorra algunos símbolos como el punto y coma (;) al final de cada línea de texto.

  JavaScript es un lenguaje de programación de un solo hilo (Single Thread) y permite manejar gran concurrencia de datos sin paralelismo, nos
  brinda algunas herramientas para manejar el tema de la asincronía.
  
  
 2. Qué papel cumplen las funciones en JavaScript?
 
  R/. Las funciones en JavaScript son básicamente lo principal, JavaScript soporta de forma eficiente el paradigma funcional y en este lo principal
  son las funciones, para esto, en JavaScript las funciones se conocen como ciudaddanos de primer orden y pueden utilizarse en cualquier lugar,
  incluso podemos retornar una función o enviar una función como parámtro.
  
 3. Qué significa el concepto de Hoisting?

  R/. Cuando declaramos una variable tipo var o una función declarada (function <Nombre de la función>), estos objetos sufrirán un proceso de
  elevación (Hoisting) que hará que se ubiquen en la parte superir del scope donde se encuentran, lo cual puede llevar a errores durante
  el desarrollo de nuestros programas, es por eso que es recomendable utilizar let y funciones de tipo expresadas o funciones flecha.
  
 4. Cómo maneja JavaScript la Orientación a Objetos?

  R/. JavaScript es un lenguaje de programación Orientado a Objetos, pero basado en Prototipos, es por eso que desde el 2015 con ES6, el estándar
  nos da la posiblidad de definir clases, las cuales serán transformadas a prototipos, pudiendo empezar a desarrollar en este lenguaje de manera
  rápida desde otros lenguajes compilados y basados fuertemente en clases, como Java o C.
  
 5. Qué son los módlos en JavaScript y cómo utilizarlos, por qué es bueno utilizarlos?
  
  R/. Los módulos en JavaScript llegaron en la versión de ES6, y nos permitieron independizar nuestros componentes en diferentes archivos con el 
  fin de luego importar/exportar auqellos componentes que necesitemos en otro archivo o clase. Los módulos reemplazan o complementan la tarea
  de las funciones anónimas autoinvocadas (IIEE Inmediately-Invoked function expressions). Para hacer uso de ellos debemos de indicar en el atributo
  documento html type="module" al script y utilizar las directivas import, export para importar o exportar clases, funciones, variables, constantes,etc.

 
