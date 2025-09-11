let numberToCheck = 25465;
console.log(numberToCheck);
(numberToCheck % 2 === 0) ? console.log('es multiplo de 2') : 
(numberToCheck % 3 === 0) ? console.log('es multiplo de 3') :
(numberToCheck % 5 === 0) ? console.log('es multiplo de 5') :
(numberToCheck % 7 === 0) ? console.log('es multiplo de 7') :
console.log('no es múltiplo de 2, 3, 5 ni 7');
