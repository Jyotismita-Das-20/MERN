console.log('Events');

let clickHandler= () =>{
  console.log("Button clicked");
}

//Only one event can handled at a time, if we write more event they overwrite and give only one last event result
let buttonClickHandler= () =>{
  for(let i=0; i<5; i++){
    console.log(i);
  }
}

let button= document.getElementById('myButton');
//Using event Handler
//button.onclick= buttonClickHandler;
//button.onclick = clickHandler;

//Using Event listener
button.addEventListener('click',clickHandler);
button.addEventListener('click',buttonClickHandler);
//button.removeEventListener('click', clickHandler)