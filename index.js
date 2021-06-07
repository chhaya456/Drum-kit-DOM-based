///Only for one particular button with named function////////////
// document.querySelectorAll("button")[1].addEventListener("click",handleClick);
//
//
// function handleClick() {
//   alert("hi");
// }
// //

/////other way with anonymous function/////////////

var numberOfButtons = document.querySelectorAll(".drum").length; ///using drum instead of button bcz it  might riscky to use button becz later in the page if we use button element anywhereelse

for (i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    this.style.color = "white";

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);

});



function makeSound(key) {


  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();

      break;

    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();

      break;


    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();

      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();

      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();

      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();

      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();

      break;

    default:
      console.log(buttonInnerHTML);

  }

}



function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);


}
