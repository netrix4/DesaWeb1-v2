const greet = (nombre: string) => {
  console.log(`Hola, ${nombre}. Soy una funcion`);
};

const obtenerUsuario = (uid: string) => ({ uid, username: "abejitaMagica420" });

console.log(obtenerUsuario("ABC-1297313"));

const heroes = [
    {
        id:1,
        nombre: 'Superman'
    },
    {
        id:2,
        nombre: 'Webman'
    },
    {
        id:3,
        nombre: 'Don Ramon',
        superPoder: 'Boxeo'
    },

]