/*
    Module Assignment 2
*/

// Question 1
const myFunctionExpression = function (){
    console.log("Robert");
};



// Question 2
let button = document.querySelector(".btn");

function respondToClick() {
    console.log("I was clicked");
};

button.addEventListener("click", respondToClick);


// Question 3
const input = document.getElementById("firstName");

input.addEventListener("keydown", function(event){
    console.log(event.key)
});


// Question 4
const secondButton = document.querySelector("button");

function mouseoverFunction() {
    secondButton.classList.add("hover");
};

secondButton.addEventListener("mouseover", mouseoverFunction);



// Question 5
const buttonHover = document.querySelector("[data-animal='dog']");

buttonHover.addEventListener("mouseout", function() {
    buttonHover.classList.remove("hover");
});



// Question 6
const listItems = document.querySelectorAll("li");

for(let i = 0; i < listItems.length; i++){
    listItems[i].addEventListener("mouseover", function(event){
        console.log(event.target.dataset);
    })

}



// Question 7
const animal = "cow";

switch(animal){
    case "cat":
        console.log("Meow");
        break;
    case "cow":
        console.log("Moo");
        break;
    case "bird":
        console.log("Tweet");
        break;
    default:
        console.log("Harrumph");
}



// Question 8
const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function(sheep) {
    console.log(sheep);
});



// Question 9
function helloTimer() {
    console.log("Hello");
    if(counter === 5) {
        clearInterval(intervalId);
    }
    counter++;
}

let counter = 0;

const intervalId = setInterval(helloTimer, 500);



// Question 10
const container = document.querySelector(".container");

function updateDiv(){
    container.innerHTML = "Text updated";
}

setTimeout(updateDiv, 2000);
