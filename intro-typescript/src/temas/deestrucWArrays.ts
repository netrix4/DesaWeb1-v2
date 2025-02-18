const countFromOneTo = (ceil:number)=>{
    const result = []
    let counter = 1;

    do {
        result.push(counter);
        counter+=1;
    } while (counter<=ceil);
    return result
}

const array = countFromOneTo(10)
console.log(array);

const newArray = [...array,2,5,1,0]

console.log(newArray);

const personajes = ['Gato con botas', 'Lulú', 'Shrek', 'Zunni']

const  [ g,l,s,z, T='DefaultValue'] = personajes

console.log(g);
console.log(l);
console.log(s);
console.log(z);
console.log(T);

const regresarArrays = ():(number|string)[] =>{
    return [1345, 'ABCD'];
}

const [num, letras] = regresarArrays()

console.log(num, letras);