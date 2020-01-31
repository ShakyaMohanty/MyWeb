// AJAX call

var animals = document.querySelector('#animal-info');
var paragraph = document.createElement('p');
var btn = document.querySelector('#btn');


// for(i=0, i<) 
var pageCounter = 1

btn.addEventListener('click', ()=>{
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+pageCounter+'.json');
    ourRequest.onload = () =>{
        if(ourRequest.status >= 200 && ourRequest.status < 400){ // => error handeling
            var ourData = JSON.parse(ourRequest.responseText);
            // console.log(ourData[0])
            renderHTML(ourData)
        
        }
        // var ourData = JSON.parse(ourRequest.responseText);
        // // console.log(ourData[0])
        // renderHTML(ourData)
        else{
            console.log('Connection error');
        }
        
    }
    //handeling AJAX error (must be added bofore sending request)
    ourRequest.onerror = ()=>{
        console.log('Connection error');
    }

    ourRequest.send();
    
    //increment pageCounter to switch between JSON file
    pageCounter++;
    
    //hiding the button
    if(pageCounter > 3){
        btn.classList.add('hide-me');
    }
});
function renderHTML(data){
    for(i=0; i < data.length; i++){
        // paragraph.innerText = `My ${ourData[0].species} name is ${ourData[0].name} and it likes ${ourData[0].foods.likes[0]}`;
        var htmlText = '<p>'+`My ${data[i].species} name is ${data[i].name} and it likes ${data[i].foods.likes[i]}`+'</p>';


        animals.insertAdjacentHTML('beforeend', htmlText);
        // animals.append(paragraph);
    }
    // console.log(data);
}