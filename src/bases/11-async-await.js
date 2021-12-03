





const getImagen = async() => {



    try {
        const apiKey = '9oM0WpfTGGur5blbEyijg87tNNZU098D';
        const respuesta =await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}  `);
        
        const {data} = await respuesta.json()
        const {url} = data.images.original;
       // console.log(url)
        
        const imagen = document.createElement('img');
        imagen.src = url;
    
        document.body.append(imagen);     
    } catch (error) {
        //manejo del error
        console.error(error);
    }
   
    
}

getImagen();




// const apiKey = '9oM0WpfTGGur5blbEyijg87tNNZU098D';

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}  `);

// peticion
// .then ( respo=>respo.json() )
// .then  ( ({data}) =>{
//     const { url } = data.images.original;
//     console.log(url)

//     const img = document.createElement('img')
//     img.src = url;

//     document.body.append(img);
// })
// .catch (console.warn);