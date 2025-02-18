export const persona = {
  apellido: "Valencia",
  edad: 27,
  direccion: {
    ciudad: "Ensenada",
    codigoPostal: "22785",
    lat: 15.7,
    log: 12.4,
    calle: "Reforma",
    numeroExterior: 989,
  },
};

console.log(persona.edad);
persona.edad = 99;
console.log(persona["edad"]);

const persona2 = structuredClone(persona);
persona2.apellido = "hernandez";

console.log(
  `La persona 2 es: ${persona2.apellido} y la persona: ${persona.apellido}`
);
