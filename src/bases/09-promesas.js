

import {getHeroeById} from './bases/08-imp-exp'



const getHeroeByIdAsync = (id) =>{
    return new Promise( (resolve , reject)=>{

        setTimeout(() => {
        //Tarea
         const p1 = getHeroeById(id);
         let existe=true;   
            if(p1){
                resolve(p1);
                existe=true;
            }else{
                reject('No se pudo encontrar el heroe');
                existe=false;
            }
         return existe;
         //const owner = getHeroesByOwner('Marvel');
         //console.log(owner);
         
        }, 2000);
});

}


getHeroeByIdAsync(1)
    .then(//heroe=>console.log(heroe) 
    console.log
    
    )
    .catch( console.warn);

  