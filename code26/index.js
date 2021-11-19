/*function suma(a, b) {
    resultado = a+b
    return resultado;  
  }
  
  let respuesta = suma(1,7);
  alert(respuesta);

  function resta(a, b) {
    resultado = a-b
    return resultado;  
  }
  
  let respuesta = resta(100,70);
  alert(respuesta);

  function producto(a, b) {
    r= a*b
    return r;  
  }
  
  let res = producto(90,2);
  alert(res);
 
 function division(a, b) {
    r= a/b
    return r;  
  }
  
  let valor = division(200,5);
  alert(valor); */
  // ECMAScript 6
//----Función flecha: mismo resultado otra forma de hacer. Una forma más "moderna" de hacer
/*
let agregar = a => a + 100;
alert(agregar(2));
*/

// Otro ejemplo:
/*
const add = (x, y) => { return x + y };
console.log(add(3, 7));

//**************

//mas ejemplos de funciones para hacer con las estudiantes:
//recordar que las funciones sólo devuelven un return.
const medallas = function(puntaje){
  if (puntaje < 3) {
    return 'Bronce';
  }
  if (puntaje < 7) {
    return 'Plata';
  }
  return 'Oro';
};

alert()

let result = 0;

const showSum = () => {
  result = num1 + num2;
  alert('El resultado es ' + result);
};

showSum();*/
const weather = 'nublado';

switch (weather) {
  case 'lluvioso':
    console.log('Recuerda levar un paraguas.');
    break;
  case 'soleado':
    console.log('Viste ligero.');
  case 'nublado':
    console.log('Sal a la calle');

  default:
    console.log('Tipo de clima desconocido');
    break;
}

  
  