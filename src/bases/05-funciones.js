

//Funciones en JS


const saludar2 = (nombre)=>{
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre)=>`Hola, ${nombre}`;
const saludar4 = ()=>`Hola mundo`;


console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'))
console.log(saludar4())


const getUser = ()=> ({
        uid:'ABC123',
        username: 'Andres_jose'
    });

const user= getUser()
console.log(user)

//Tarea
//1. Transformen a una funcion de flecha
//2. tiene que retornar un objeto implicito
//3 . probarlo
const getUsuarioActivo=(nombre) =>

({
        
    uid:'ABC1',
    username:nombre,
    
});

console.log(getUsuarioActivo('Andres'));
//return `Hola,${nombre}`;

//return nombre +2;

//const usuarioActivo = getUsuarioActivo();
//console.log(usuarioActivo)

