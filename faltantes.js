// Dado un array de enteros ordenado y sin repetidos, 
// crea una función que calcule
// y retorne todos los que faltan entre el mayor y el menor.

/* let arr = [1, 3, 5]; // debe retornar 2 4
let arr1 = [-2 ,2, 6]; // debe retornar -1 0 1 3 4 5
*/

function numerosFaltantes(arr) {
    let faltantes = [];
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    let rango = []
    for (let i = min; i <= max; i++) {
        rango.push(i);
    }

    for (let num of rango) {
        if (!arr.includes(num)) {
            faltantes.push(num);
        }
    }
    
    return faltantes;
}

let arr = [1, 3, 5];
console.log(numerosFaltantes(arr));

let arr1 = [-2, 2, 6];
console.log(numerosFaltantes(arr1));