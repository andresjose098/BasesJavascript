//import {heroes} from './data/heroes'
import  heroes  from "../data/heroes";

//console.log(owners)

export const getHeroeById = (id) =>{
    return heroes.find( (heroes1)=> heroes1.id ===id);
}

//console.log(getHeroeById(2));


//find no sirve , filter usarlo

export const getHeroesByOwner = (owner) =>{ 
return heroes.filter((Owner1)=> Owner1.owner === owner);
}
//console.log(getHeroesByOwner('Marvel'));


