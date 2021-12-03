


    const nombre = 'Andres';
    const apellido = 'Urbano';
    let salario=2500000;
    let edad=15;
    //const nombreCompleto= nombre+ ' '+apellido;
    const nombreCompleto = `${nombre} ${apellido}` ;

    console.log(nombreCompleto);

    function obtenerSaludo(nombre){
        return 'Hola mundo' +    nombre;
    }

    function calcularsalario(salario){
        if(salario<=900000){
            return 'Es un salario minimo '+salario;
        }else if(salario<=1350000){
            return 'Es un salario comodo'+salario;
        }else{
            return 'Es un excelente salario'    +salario;
        }
        

    
    }

    function personamayor(edad){
            if(edad>18){
                return 'Es mayor de edad '+edad;
            }else{
                return 'Es menor de edad'+edad;
            }
    }

    console.log(`Este es un texto: ${obtenerSaludo( nombre  )} `);

    console.log(`Ejemplo ${calcularsalario(salario)}`);

    console.log(`Ejemplo persona mayor ${personamayor(edad)}`);