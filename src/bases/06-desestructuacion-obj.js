

//Desestructuración
//Asignación Desestructurante

const persona = {
    nombre: 'Andres',
    edad:45,
    clave: '12345',
    
};

//const {} = persona; //extrae la informacion de la constante persona

const useContext = ({clave,edad}) =>{
    //const {nombre,edad,clave} = usuario;
    //console.log(nombre,edad,capitan); 
    return {
        nombreClave:clave,
        anios:edad,
        latlng: {
            lat:14.2,
            lng:15,
        }
    };
};

const {nombreClave,anios,latlng:{lat, lng}} =useContext(persona);
console.log(nombreClave,anios)
console.log(lat,lng)
//console.log(avenger.nombreClave,avenger.anios)
