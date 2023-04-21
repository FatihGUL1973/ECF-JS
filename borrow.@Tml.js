const message = document.querySelector('#message');
const calendarStart = document.querySelector('#calendarStart');
const calendarFinish = document.querySelector('#calendarFinish');

//fonction assynchrone 
const asyncFunction =async () => {
    
     //demande assynchrone - stocke quand il y a résultat
     let ressource  = await fetch('https://api.npoint.io/00f2a23cb6d801c23643');
        //demande assynchrone - stocke quand il y a résultat du ficjier ressource transformé en JSON
     let data = await ressource.json();
     // affiche data
     console.log(data);
     //pour chaque élément de games
        data.games.forEach(element => {
            //stocke le titre
            let titre = element.title
            // rajoute l'option là où est id=message à l'élement HTML message
            message.innerHTML += '<option value="'+titre+'">'+titre+'  </option>';

        });
        

    
   
 }
 asyncFunction();

 calendarStart.addEventListener('blur', function () {
    const selectedDate = new Date(calendarStart.value).getTime();
    const DateNow = Date.now();
    console.log(selectedDate);
    
    //Si la date saisie est supérieur à aujourd'hui => green
        if(selectedDate > DateNow){
            calendarStart.style.borderColor = 'green';
                //Sinon => red
        } else {
            calendarStart.style.borderColor = 'red';
            
        }  

    
})

calendarFinish.addEventListener('blur', function () {
    const selectedDate = new Date(calendarFinish.value).getTime();
    const startDate = new Date(calendarStart.value).getTime();
    const DateNow = Date.now();
    console.log(selectedDate);
    
     //Si la date saisie est supérieur à aujourd'hui => green
        if((selectedDate > DateNow) && (selectedDate > startDate)){
            calendarFinish.style.borderColor = 'green';
                //Sinon => red
        } else {
            calendarFinish.style.borderColor = 'red';
            
        }  

    
})