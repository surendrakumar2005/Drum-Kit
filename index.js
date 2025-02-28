for(var i=0;i<document.querySelectorAll("button").length;i++){
document.querySelectorAll("button")[i].addEventListener("click",function (){
   makesound(this.textContent);
});
}
document.addEventListener("keydown",function (kill){
    makesound(kill.key);
})


function makesound(key){
    document.querySelector('.'+key).classList.add("pressed");

    switch (key) {
        case 'w':
            
            new Audio("sounds/tom-1.mp3").play();
        break;
       
        case 'a':
            new Audio("sounds/tom-2.mp3").play();
        break;
        case 's':
                new Audio("sounds/tom-3.mp3").play();
        break;
        case 'd':
        
            new Audio("sounds/tom-4.mp3").play();
        break;

        case 'j':
            new Audio("sounds/snare.mp3").play();
        break;
        case 'k':
            new Audio("sounds/crash.mp3").play();
        break;
         case 'l':
             new Audio("sounds/kick-bass.mp3").play();
         break;
    
        default:
            console.log(this.textContent);
            break;
    }
   setTimeout( function(){document.querySelector('.'+key).classList.remove("pressed")},100);}
