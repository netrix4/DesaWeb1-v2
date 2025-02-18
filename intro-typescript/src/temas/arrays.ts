const array = [1,4,123,33123,8,7,55,5]

const copiaArray = [...array]

copiaArray.push(7)

console.log(`Contenido del array:\t\t\t${array}`);
console.log( array.push(...copiaArray) );
console.log(`Otra vez contenido del array: \t${array}`);

