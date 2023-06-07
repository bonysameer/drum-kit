
var button = document.querySelectorAll("button");
   for( let i =0;i<button.length;i++){
      button[i].addEventListener("click", function(){
         
         var buttoninnerHtml = this.innerHTML;

         makesound(buttoninnerHtml);
                           
        
        
      });
   }

   const w = document.getElementsByClassName("w");

   for( let i=0;i<w.length;i++){
      w[i].addEventListener("click",function(){
         w[i].style.color = "white";
      });
   }

document.addEventListener("keypress",function(event){
   makesound(event.key);
  // alert("hello");
});

makesound(button.innerHTML);

function makesound(key){

   switch (key){
      case "w":
         var audio = new Audio('sounds/tom-1.mp3');
         audio.play();
         break;
         case "a":
         var audio = new Audio('sounds/tom-2.mp3');
         audio.play();
         break;
         case "s":
         var audio = new Audio('sounds/tom-3.mp3');
         audio.play();
         break;
         case "d":
         var audio = new Audio('sounds/tom-4.mp3');
         audio.play();
         break;
         case "j":
         var audio = new Audio('sounds/snare.mp3');
         audio.play();
         break;
         case "k":
         var audio = new Audio('sounds/kick-bass.mp3');
         audio.play();
         break;
         case "l":
         var audio = new Audio('sounds/crash.mp3');
         audio.play();
         break;
         
         default:
   }


}

/*let button = document.getElementsByClassName("button");

for(let i=0;i<button;1++){
   button[i].addEventListener("click",function(event){
      button[i].style.color = "green";
   });

}
/*button.addEventListener("click", function(){
   button.style.color = "green";
});*/
const pressed = document.getElementsByClassName("pressed");

for(let i=0;i<pressed.length;i++){
   pressed[i].addEventListener("click",function(){
      pressed[i].style.boxshadow = "0 15px 4px 0 #DBEDF3";
      pressed[i].style.opacity = "0.5";

      setTimeout(function(){
         pressed[i].style.color.remove("pressed");
      },100)
   });
}
   
   




/*function buttonAnimation(currentkey){

   var activebutton = document.querySelector("." + currentkey);
   activebutton.classList.add("pressed");

}*/





