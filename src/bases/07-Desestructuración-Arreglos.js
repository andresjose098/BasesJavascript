
//Desestructuracion de arreglos


//Ejemplo 1
const personajes = ['Goku','Vegeta','Trunks'];

const [, , p3] = personajes;

console.log(p3)


//Ejemplo 2
const retornaArreglor = () =>{
    return ['ABC',123];
}

const [letras,numeros] =retornaArreglor();
console.log(letras,numeros)


//Ejemplo 3
const useState = (valor)  =>{
    return [valor, ()=>{console.log('Hola a todos') } ];
}

const [nombre,setNombre] = useState ('Nombre');
console.log(nombre);
setNombre();



//Ejemplo 4
const nombrefamilias = ["Maria","Andres","Jose Helmer","Daniela Urbano","Nancy Rodriguez"]

const [,a] = nombrefamilias;

console.log(a);


const retornarNumerosdeljuegoynombresparticipantes=()=>{
    return [111,222,333,777,999,200,"andres","mariadelmar","daniela","tommy"]
}

const [numero1,numero2,numero3,numero4,numero5,nombre1,nombre2,nombre3,nombre4,nombre5] = retornarNumerosdeljuegoynombresparticipantes()
console.log(numero1,numero2,numero3,numero4,numero5,nombre1,nombre2,nombre3,nombre4,nombre5)



//Ejemplo 5
const retornarApellido  = (apellido)=>{
    return [apellido, ()=>{
        console.log('Hola a todos') }  ];
}

const [apellido,setApellido] = retornarApellido('Urbano');
console.log(apellido);
setApellido()


