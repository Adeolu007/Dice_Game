
let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.btn');
let clearScreen = document.getElementById('clearScreen')
let equal = document.querySelector('.btn-equal');

   buttons.forEach((button)=>{
    button.addEventListener('click', function(e){
      let value = e.target.dataset.num; 
     screen.value += value;
    })})

    equal.addEventListener('click', function(e){
        
        if(screen.value === ''){
           screen.value = ''
        }else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
})

clearScreen.addEventListener('click', function(e){
    screen.value = "";
})
