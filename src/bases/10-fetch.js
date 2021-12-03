

const apiKey = '9oM0WpfTGGur5blbEyijg87tNNZU098D';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}  `);

peticion
.then ( respo=>respo.json() )
.then  ( ({data}) =>{
    const { url } = data.images.original;
    console.log(url)

    const img = document.createElement('img')
    img.src = url;

    document.body.append(img);
})
.catch (console.warn);