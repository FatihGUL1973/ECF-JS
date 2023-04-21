const MenuJeu = document.querySelector('#MenuJeu');

const asyncFunction =async () => {

let ressource  = await fetch('https://api.npoint.io/33fe536f3a3bc2f018fb');
let data = await ressource.json();

console.log(data);

data.games.forEach(element => {
    //stocke l'image
    //let image = element.image
    // rajoute l'option là où est id=MenuJeu à l'élement HTML message
   // MenuJeu.innerHTML += '<img src="'+image+'">';
   let image =document.createElement('img');
    image.src = element.image
    MenuJeu.append(image);
    
    image.addEventListener('click', function () {
        
        
        let information = element.info
         afficheJeu.innerHTML = '<div>'+information+'  </div>';
        
    })


});

}

asyncFunction();

