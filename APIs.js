const host = 'https://dattebayo-api.onrender.com';

fetch(`${host}/characters`, {
    method: 'GET',
    headers:{
        Accept:'application/json'
    }
}).then((response) => {
    return response.json();
}).then((data) =>{
    characters = data.characters[0].jutsu;
    imagen = data.characters[0].images;
    
    console.log(imagen[0]);
    let i = 0;
    while(i < characters[0].length){ 
        console.log(characters[i].toUpperCase());
        i++;
    }
    let j = 2;
     
   ids = data.characters.id[j];
   console.log( data.characters.id[j]);
   for(j; j < ids.length; j++){
    
    
   }
}).catch((error) => {
    console.log(error);
})