interface SuperHero {
    name: string,
    lastName: string,
    age: number,
    superPower: string
}

const persona = {
    name: "Mario",
    lastName: "Gonzales",
    age: 27,
    // superPower: "Volar"
}

const {age} = persona

const {name, lastName } = persona;

console.log(`Nombre: ${name}`);

console.log('Edad:',{age});

// console.log(`Superpoder de persona: ${persona.superPower}`);

interface CrearNuevoHeroe{
    name: string,
    lastName: string,
    age: number,
    superPower?: string
}

const crearNuevoHeroe = ({name,age,lastName, superPower}:CrearNuevoHeroe) =>({
    id: 'crearUUID',
    name: name,
    age: age,
    lastName: lastName,
    superPower: superPower ?? "NoSuperPower"
})

console.log(crearNuevoHeroe(persona));

// const nuevaPersona:CrearNuevoHeroe = {name:"Luigi", age:99, lastName:"Brous", superPower:'SuperSpeed'}

const nuevoHeroe = crearNuevoHeroe({...persona, superPower:'SuperSpeed'})

console.log(nuevoHeroe);
