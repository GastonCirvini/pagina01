//----------CURSO JAVASCRIPT 16 - MANEJO DE ERRORES---------//
try {
    console.log("En el try se agrega el código a evaluar") //si se declara una variable, por ejemplo, que no existe, va a devolver e imprimirse el catch, que haya sido declarado en el try//
} catch (error) {
    console.log("catch, captura cualquier error surgido o lanzado en el try")

} finally { //El finally no se usa mucho, lo importante es el try-catch//
    console.log("El bloque finally se ejecutará siempre al final de un bloque try-catch")
}
//Ya no es la consola quien manda el error, sino que es el mismo try-catch que se encarga de tal trabajo//

//Ejemplo//
try {
    let numero = 10;
    if (isNaN(numero)){
    throw new Error("El caracter introducido no es un número")   //mensaje que va al usuario//
    }

    console.log(numero*numero);
} catch (error) {
    console.log('Se produjo el siguiente error:${error}') //el signo $ concatena el error que fue declarado en la línea 15//
}





//----------CURSO JAVASCRIPT 17 - BREAK & CONTINUE---------//

//Break sale de la estructura, corta el flujo de lectura del código. Por ejemplo sirve para romper la estructura de un loop, o saltar ciertas vueltas de un bucle//
//Continue salta la iteración de la que hemos declarado en la condición y sigue con la ejecución normal del ciclo hasta que finalice// 

//BREAK//
const numeros = [1,2,3,4,5,6,7,8,9,0];
for (let i=0; i<numeros.length;i++){
if (i===5){ 
    break; //apenas el número valga 5 va a CORTAR el recorrido que está haciendo el For (1,2,3,4,5)//
}
    console.log(numeros[i]);
}
//CONTINUE//
const numeros = [1,2,3,4,5,6,7,8,9,0];
for (let i=0; i<numeros.length;i++){
if (i===5){ 
    continue; //apenas el número valga 5 va a CONTINUAR el recorrido que está haciendo el For, SIN EMBARGO OMITE el valor que está ocupando la posición 5, SALTA Y SIGUE HASTSA FINALIZAR EL ARREGLO (1,2,3,4,5,7,8,9,0)//
}
    console.log(numeros[i]);
}



//----------CURSO JAVASCRIPT 18 - DESTRUCTURACIÓN---------//
//Destructuración o destructuring: asignar nuevos valores a objetos de forma dinámica//

const numeros = [1,2,3];

//Sin destructuración//
let uno = numeros[0], //Asignamos a cada valor del arreglo una variable, mucho código // 
    dos = numeros[1],
    tres = numeros[2];

//Con destructuración//
const [one,two,three] = numeros; //Acá se que estoy trabajando con el arreglo numeros, y le asigno a cada posición una declaración respectivamente//
console.log(one,two,three); //Va a imprimir por consola 1,2,3)//

let persona = {
    nombre:"Gaston",
    apellido:"Cirvini",
    edad:31
};
let {nombre, apellido, edad} = persona;
console.log (nombre,apellido,edad); //Tienen que llamarse igual la variable con destructuración y el campo dentro del registro al que estamos accediendo de forma dinámica, sino imprime UNDEFINED//




//----------CURSO JAVASCRIPT 19 -OBJETOS LITERALES- ECMASCRIPT--------//
//Nueva forma de escribir atributos y métodos, como así también de asignarlos//

//Forma antigua//
let nombre ="José",
edad=11;
const perro = {
    nombre: nombre,
    edad: edad,
    ladrar: function (){
        console.log("guau guauuu!!")
    }
}
console.log(perro);
//Formato EcmaScript más reducido para los objetos literales declarado dentro de una variable//
const dog = { //Automáticamente tomará los campos dentro del const, agiliza el proceso de escritura de los objetos que estamos declarando//
    nombre,
    edad,
    raza:"Callejero",
    ladrar(){ //para poder declarar la función no hace falta colocar function, sino ya con esa declaración JS entiende que es una function// 
        console.log("guau guau guau!!!")
    }
}



//----------CURSO JAVASCRIPT 20 - PARÁMETROS REST & OPERADOR SPREAD--------//

//Rest: Sirve para agregar parámetros infitos dentro de una función o variable//

function sumar (a,b,...c){ //Se agrega ... para agregar nuevos parámetros, por ejemplo lo realizado más abajo//
 let resultado = a+b;

 c.forEach(function(n){
resultado +=n
 });
 return resultado;
}

console.log (sumar(1,2)) //dará 3 porque está haciendo a+b de la primera función//
console.log (sumar(1,2,3,4,5,4)) //esto es lo que hace el Rest y los ..., se le puede agregar todo lo que queramos//

//Spread Operator u Operador de Propagación: Permite una expresión tengamos que expandirla almacenando argumentos o elementos, podamos hacerlo//

const arr1 = [1,2,3,4,5],
      arr2 = [6,7,8,9,0];

console.log(arr1,arr2);

const arr3 = [...arr1,...arr2];

console.log(arr3); //Debo colocarle los ... sino imprime que arr3 contiene arr1 y arr2. Con el Spread Operator se agrega dentro del arreglo todos los elementos de los arreglos que se le declararon internamente//



//----------CURSO JAVASCRIPT 21 - ARROW FUNCTIONS--------//
//FUNCIONES FLECHA: Implementación para mejorar la escritura, es más declarativo, más sintético y clara la expresión. Sirven para funciones anómimas expresadas//

const saludo = function(){ //Función anónima, no es declarada//
    console.log("hola");
}

//Arrow function//
const saludo = () =>console.log("hola");

//Si recibe un parámetro entre paréntesis, no hace falta ya colocar los paréntesis, pero si tiene DOS O MÁS DEBEN IR LOS PARÉNTESIS//
const saludar = nombre =>console.log("hola ${nombre}");
saludar("Pedro");

//SIN AF//
const sumar = function (a,b){
 return a+b;
}
console.log(sumar(9,9));

//CON AF//
const sumar = (a,b) => a+b;
console.log(sumar(9+9));


//Otro ejemplo//
const numeros = [1,2,3,4,5];
//SIN//
numeros.forEach(function(el,index){
    console.log ("el elemento ${el} está en la posición ${index}")});
//CON// //Se eliminan las llaves también//
    numeros.forEach((el,index) =>console.log ("el elemento ${el} está en la posición ${index}"));
 

//Las Arrow function captura el contexto del objeto en el que se encuentra (Contexto padre). Hay que usarlo con cuidado en objetos literales, puede generar conflictos o retornarnos información que no queremos. En el caso siguiente no tomará el objeto perro, sino el contexto donde se encuentra.//   
 const perro = {
    nombre:"pepo",
    ladrar: () =>{
        console.log(this)
    }
}



//----------CURSO JAVASCRIPT 22 - PROTOTIPOS--------//
//Como JS es un lenguaje multiparadigma, en el paradigma POO, el compilador -en este caso el navegador HTML- lo convierte en funciones prototípicas//
//POO conceptos: CLASES (modelo a seguir para generar instancias-objetos-), OBJETOS (con sus ATRIBUTOS -característica o propiedad. Variables dentro de un objeto- y MÉTODOS -acciones que un objeto puede realizar-)//

const animal ={ //Esto es un objeto, y lo marca como __proto__:Object en la consola//
    nombre:"Perro",
    sonar() {
        console.log("Hago sonidos porque estoy vivo");
    }
}
console.log(animal);

const animal2 ={ //Repetimos código, y lo mejor es crear CLASES para que no suceda esto//
    nombre:"Gato",
    sonar() {
        console.log("Hago sonidos porque estoy vivo");
    }
}
console.log(animal2);

//Función constructora: solamente se hace una vez y con ella se hacen otras instancias//
//el nombre de las Clases tiene que respetar el UpperCamelCase//

//Función 1 formato que desperdicia memoria//
function Animal (nombre,genero){ 
this.nombre = nombre;
this.genero = genero; //atributos de la función constructora//

this.sonar= function(){ //método//
    console.log("Hago sonidos porque estoy vivo");
} 
}
this.saludar= function(){ //método//
    console.log("Hola me llamo ${this.nombre}");
}

const pajaro = new Animal("Pedro","Macho"),
      ardilla = new Animal ("Juan", "Hembra"),
      mariposa = new Animal ("Pepe", "Macho");
//El problema es que acá se desperdicia memoria para el trabajo...van haber duplicado muchísimos métodos mientras más objetos creemos en base a la clase constructora//
pajaro.saludar();
ardilla.saludar();
mariposa.saludar();

//Función constructora donde asignamos los métodos al prototipo, no a la función como tal//
function Animal (nombre,genero){ 
    this.nombre = nombre;
    this.genero = genero; //atributos de la función constructora//
}
//Métodos agregados al prototipo de la función constructora PROTOTIPO//
    Animal.prototype.sonar= function(){ 
        console.log("Hago sonidos porque estoy vivo");
     
    }
    Animal.prototype.saludar= function(){
        console.log("Hola me llamo ${this.nombre}");
    }
    
    const pajaro = new Animal("Pedro","Macho"),
          ardilla = new Animal ("Juan", "Hembra"),
          mariposa = new Animal ("Pepe", "Macho");

    pajaro.saludar();
    ardilla.saludar();
    mariposa.saludar();
//Tenemos una mejora muy importante en memoria y rendimiento en nuestro código//




//----------CURSO JAVASCRIPT 23 - HERENCIA PROTOTÍPICA--------//
//Herencia: capacidad de heredar características de un padre a un hijo//

function Perro (nombre,genero,tamanio){
this.super = Animal; //utilizando super estoy pidíendole los atributos y métodos a la clase padre//
this.super(nombre,genero); //pero otra vez seguimos utilizando muchos super para llamarlo y código innecesario//
this.tamanio = tamanio;
}

Perro.prototype = new.Animal(); //ESTA LINEA ESTÁ HACIENDO LA HERENCIA//
Perro.prototype.constructor = Perro; 

//Sobreescritura de métodos del Propotito padre en el hijo//
Perro.prototype.sonar= function(){
    console.log("soy un perro y mi sonido es un ladrido");
}

Perro.prototype.ladrar = function (){
    console.log ("guau guau");
}



//----------CURSO JAVASCRIPT 24 - CLASES Y HERENCIA --------//


//CLASES//
//Función constructora//
class Animal { //clases no reciben parámetros, pero se utiliza CONSTRUCTOR para asignar parámetros a la clase//
    constructor (nombre, genero) {  
this.nombre = nombre;
this.genero = genero; 
}

//Metodos//
//Acá se le quita el this.....function, solamente con declararlo queda como método. AZÚCAR SINTÁCTICO//
sonar(){ 
    console.log("Hago sonidos porque estoy vivo");
} 
saludar(){
    console.log("Hola me llamo ${this.nombre}");
}
} 

const mimi = new Animal ("Mimi","Hembra"),
    scooby = new Animal ("Scooby", "Macho");

console.log(mimi);
mimi.saludar();
mimi.sonar();
console.log(scooby);
scooby.saludar();
scooby.sonar();


//Cuando nosotros escribimos en clases, es un engaño, ya que JS el POO la trabaja con prototipos (__proto__) NO CON CLASES, solamente nos han dado la posibilidad de escribir con clases para facilitar la escritura. Simplifica la escritura, ya que JS es un lenguaje orientado a objetos basado en prototipos. Por eso las CLASES SON AZÚCAR SINTÁCTICO//


//HERENCIA//

class Perro extends Animal {
 constructor(nombre,genero,tamanio){
super(nombre,genero); //Super manda a llamar al constructor de la clase padre//
this.tamanio=tamanio; //Es una propiedad exclusiva de los perros, en este ejemplo, pero está por fuera ya que no pertenece a Animal// 
}

sonar(){
    console.log("Soy un perro y mi sonido es un ladrido");
}
ladrar(){
    console.log ("Guau guau");
}
}

const mimi = new Animal ("Mimi","Hembra"),
    scooby = new Perro ("Scooby", "Macho", "Gigante"); //Acá se ve el tercer parámetro reservado para Perro//

    //Perro deriva de su clase padre Animal, y a su vez Animal deriva de __proto__ Objeto -primitivo de JS- con sus métodos nativos de object. Lo importante es entender que se simplifica la esctirura, lo que NO HACE A JS UN LENGUAJE POO SINO QUE JS ESTÁ BASADO EN PROTOTIPOS. Nos ayuda a escribir clases como en otros lenguajes, nos facilita comprenderlo rápidamente, solamente eso//



//----------CURSO JAVASCRIPT 25 - MÉTODOS ESTÁTICOS, GETTERS Y SETTERS --------//

//MÉTODO ESTÁTICO: se puede ejecutar sin instanciar la clase//

class Perro extends Animal {
    constructor(nombre,genero,tamanio){
   super(nombre,genero); //Super manda a llamar al constructor de la clase padre//
   this.tamanio=tamanio; //Es una propiedad exclusiva de los perros, en este ejemplo, pero está por fuera ya que no pertenece a Animal//
   this.raza=null;
    } 

//MÉTODO GETTER//
get getRaza(){
    return this.raza;
    }  
//MÉTODO SETTER//
set setRaza(raza){
    this.raza=raza;
}
    
}
console.log (scooby.getRaza); //Null//
scooby.setRaza = "Ovejero"; //Cambia su get//
console.log (scooby.getRaza); //Ahora es Ovejero//

//Los get, más allá que en JS es una función, funciona como un obtenedor. Sin embargo, JS lo convierte en un atributo, en una propiedad. Sigue siendo funciones de tipo get y de tipo set (todo esto se manifiesta en la consola. Nuevamente sigue siendo azúcar sintáctico//



//----------CURSO JAVASCRIPT 26 - OBJETO CONSOLE --------//

console.log(console) //Objeto console, nos muestra todas las características que tiene, son muchas funciones. Entre muchas cosas, podría ayudarnos a mandar mensajes, como errores si se escribe alguna sentencia de forma errónea//
console.error ("Esto es un error");
console.warn ("Esto es un aviso");
console.info ("Esto es un mensaje informativo");

let nombre ="José",
    apellido ="López",
    edad = 30;
console.log(nombre);
console.log (apellido);
console.log (edad);
console.log (nombre,apellido,edad);
console.log("Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años" );
console.log("Hola mi nombre es %s %s y tengo %d años", nombre,apellido,edad); //%s es String y %d hace referencia a números. En este caso se coloca en forma ordenada los parámetros que debe retornar la consola después de finalizar el mensaje//

console.clear(); //limpia la consola de los parámetros y retornos que hemos enviado//

console.log (window); //representa la ventana del navegador. Es el objeto global//

console.log(document); //Es el objeto DOM. Es la representación del documento HTML a través de JS//

console.dir(window); //nos muestra lo mismo que el de la línea 375//

console.dir(document); //acá nos muestra todos los elementos del documento, no como sale en la línea 377//

//Grupos en consola//
console.group("Cursos de @jonmircha en YouTube");
console.log("Curso de JavaScript");
console.log("Curso de Node.js");
console.log ("Curso Flexbox");
console.log("Curso de Diseño y Programación Web");
console.groupEnd();

 //Grupos en consola de forma colapsada//
 console.groupCollapsed("Cursos de @jonmircha en YouTube");
 console.log("Curso de JavaScript");
 console.log("Curso de Node.js");
 console.log ("Curso Flexbox");
 console.log("Curso de Diseño y Programación Web");
 console.groupEnd();

 //Consola en forma de tabla//
 console.table(Object.entries(console).sort); //el sort construye la tabla de forma alfabética//

 //Mostrar nuestros arreglos en forma de tabla//
 const numeros = [1,2,3,4,5],
        vocales=["a","e","i","o","u"];
console.table(numeros);
console.table (vocales);

const perro = {
    nombre:"Lalo",
    raza= "Ovejero",
    color= "Café"
}
console.table(perro);

//Para saber cuánto tarda en realizar la tarea de algún código//
//Ejemplo//
console.time("Cuánto tiempo tarda mi código");
const arreglo = Array(1000000); //arreglo de 1 millón de posiciones//

for (let i=0; i<arreglo.length; i++) {
arreglo(i) = i; //En el arreglo en la posición i, agregale el número que ocupa dicha posición//
}

console.timeEnd("Cuánto tiempo tarda mi código");
//Tanto para el time como para el timeEnd deben tener la misma "bandera" dentro, ya que así tomará el tiempo de inicialización y de final de lo que tardará en realizar el arreglo//


//Count//
for (let i=0; i<=100; i++) {
  console.count("código for")
    console.log(i);
}
//Nos dará todas las veces que se ejecutará y nos ofrecerá un control sobre aquellos códigos que, por ejemplo, necesitemos revisar//


//Librerías para realizar testing//
let x= 1,
y=2,
pruebaXY = "Se espera que X siempre sea menor que Y";

console.assert(x<y,{x,y,pruebaXY});//Si se ejecuta correctamente en la consola no muestra nada//
//Si la variable x le cambiamos el valor a mayor que y nos dará en consola un Assertion failed, y nos mostrará el mensaje que hemos declarado en pruebaXY, que también agregamos dentro del console.assert//




//----------CURSO JAVASCRIPT 27 - OBJETO DATE --------//

console.log(Date()); //Devuelve el día, mes y año; la hora y la zona horaria//

let fecha = new Date(); //formato para declararlo como variable//
console.log(fecha);
//día del mes//
console.log(fecha.getDate());
//día de la semana D-L-M-M-J-V-S = 0-1-2-3-4-5-6//
console.log(fecha.getDay());
//mes, también en números// 
console.log(fecha.getMonth());
//año// //toma desde 1900, cuantos años han pasado desde esa fecha//
console.log(fecha.getYear());
//año pero literal//
console.log(fecha.getFullYear());
//hora//
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());
console.log(fecha.toString()); //da la misma cadena de texto que getDate//
console.log(fecha.toDateString()); //solo la fecha entrega, martes 12 de marzo del 2022
console.log(fecha.toLocaleString()); //DD/MM/AAAA y HH:MM:SS//
console.log (fecha.toLocaleDateString()); //DD/MM/AAAA//
console.log(fecha.toLocaleDateString()); //HH:MM:SS//
console.log(fecha.getTimezoneOffset()); //Muestra la distancia que hay entre el 0 Greenwitch en formato minutos//
console.log(fecha.getUTCDate()); //nos devuelve el día del mes//

console.log(Date.now()); //da un número largo, significa cuántos segundos han pasado del 1 de enero de 1970. Es la fecha TIMESTAMP, es una fecha que utilizan los servidores como marcación//

let cumpleaños = new Date(1990,3,10);
console.log(cumpleaños);




//----------CURSO JAVASCRIPT 28 - OBJETO MATH --------//

console.log(Math); //Operaciones matemátias complejas, con algunas propiedades que son normas, como el PI//
console.log(Math.abs(7.8)); //devuelve el valor absoluto de un número, si fuese negativo daría positivo//
console.log(Math.ceil(7.8)); //redondea el número al entero posterior inmediato//
console.log(Math.floor(7.8)); //redondea el número al entero anterior inmediato//
console.log(Math.round(7.2)); //redondea al número más cercano inmediato//
console.log(Math.sqrt(81)); //raíz cuadrada//
console.log(Math.pow(2,5)); //potencia, 2 elevado a la 5//
console.log(Math.sign(-7,8)); //si el número es negativo -1, si es 0 devuelve 0, si es entero devuelve 1//
console.log(Math.random()); //número random entre 0 y 1//
console.log(Math.random() *1000); //va dar un número entre el 0 y el 1000//
console.log(Math.round(Math.random()*1000)); //dará el número entre el 0 y el 1000 pero entero//




//----------CURSO JAVASCRIPT 29 - OPERADOR DE CORTOCIRCUITO --------//

//Funcionan poniendo dos condiciones: OR o AND. Con OR cuando el valor de la izquierda en la epxresión siempre pueda validar a true, es el valor que se cargará por defecto. Con AND cuando el valor de la izquierda en la expresión siempre pueda validar a false, es el valor que se cargará por defecto//

//Operador de cortocircuito OR//
function saludar(nombre){
    nombre = nombre || "Desconocido" 
    console.log("Hola ${nombre}");
}
saludar("Jon");

console.log(false||"valor de la derecha"); //En este caso dará el valor de la derecha porque el primero es false. Tomará el primero si colocamos un String,número, true,[],(),{} por ejemplo; pero no con false, null, undefined//

//Operador de cortocircuito AND//
function saludar(nombre){
    nombre = nombre && "Desconocido" 
    console.log("Hola ${nombre}");
}
saludar("Jon");

//Retornará "desconocido", ya que el primero debe ser false para que lo entregue//



//----------CURSO JAVASCRIPT 30 - ALERT, CONFIRM Y PROMPT --------//

window.alert("Esto es una alerta"); //saldrá como alerta dentro del HTML con un botón de Aceptar
window.confirm("Esto es una confirmación"); //saldrá como alerta con el ACEPTAR y CANCELAR
window.prompt("Esto es un prompt y le permite al usuario ingresar un valor") //Dará un form para ingresar un valor

//No es necesario poner window, solamente con alert,confirm y prompt ya está//

let alerta = alert ("alerta"),
    confirmacion = confirm ("confirmación"),
    aviso = prompt ("es un aviso");

console.log (alerta); //no es necesario guardarla en una variable porque siempre retornará undefined//
console.log (confirmacion); //dará true o false si uno da aceptar o cancelar respectivamente//
console.log (aviso); //retornará lo que ingresamos por el prompt//




//----------CURSO JAVASCRIPT 31 - EXPRESIONES REGULARES --------//

//Expresiones Regulares: Es una secuencia de caracteres que forman un patrón de búsqueda y que se utiliza para la búsqueda de cadenas de caracteres. Están en todos los lenguajes de programación. No hay que aprendérselas de memoria, sino más bien utilizar los motores de búsqueda para su potencial implementación//

//Un ejemplo de cómo declarar la ExpReg//
let cadena = "lorem impsun dolor hola lorem hola hola lorem hola"
let expReg = new RegExp("lorem","g"); //esta bandera G hace que seleccione todas las cadenas de texto que le pasemos como primer parámetro dentro de los paréntesis.

//Segundo ejemplo//
let expReg2 = /lorem/;

console.log(exprReg.test(cadena));  //devuelve true o false//
console.log (expRreg.exec(cadena)); //devuele un arreglo com más información//

//Si yo quiero hacer una búsqueda pero que ignore si está en mayúscula o en minúscula, es con el parámetro "i". Se puede agregar más expresiones como "ig", se suma la "g" no solo se queda con la primera coincidencia, sino va a devolver todas las existentes//


//Tercer ejemplo//

let expReg3= /\d/ig; //Buscará números, la expresión \d busca número//
    expReg4=/[0-9]/ig; //Buscará números del 0 al 9//
    expReg5=/lorem{1}/ig; //Dentro de las llaves es cuántas veces se piensa que se encontrará el parámetro que estemos buscando. Por ejemplo, si le colocamos 2 y solamente encontró 1, retorna false. Se puede poner 1-9, de 1 a 9 veces//




//----------CURSO JAVASCRIPT 32 - FUNCIONES ANÓNIMAS --------//

//Acá se englobará todo el código que quieras ejecutar. Fue muy utilizado ya que creaba una encapsulación del código. Lo que estaba en esta Función Anónima Autoejecutable además de estar definidas las estamos ejecutando al momento de crearlas. No tienen nombre //


//VERSIÓN CLÁSICA//
(function (){
//Acá irá todo el código de la función//
})();

(function (){
    console.log("Mi primer IIFE");
})();

(function (d,w,c){
    console.log("Mi segunda IIFE");
    console.log(d); //tomará el primer parámetro y pasará el primer parámetro que coloqué al final//
    console.log(w);
    console.log(c);
})(document,window,console);

//VERSIÓN CROCKFORD (JS THE GOD PARTS)//

((function () {
    console.log("Versión Crockford")
})());

//UNARIA//

+function(){
    console.log("Versión Unaria")
}();

//FACEBOOK//
!function (){
    console.log ("Versión Facebook")
} ();

