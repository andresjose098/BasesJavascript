
//objetos literales
const persona = {
    nombre: 'Andres',
    apellido: 'Urbano',
    edad: 22,
    residencia:{
        ciudad:'jamundi',
        direccion:'carrera 18sur #8-16'
    }
};

//console.table( persona);
console.log(persona);

const persona2 = {...persona};
persona2.nombre='Anderson';


console.log(persona2)