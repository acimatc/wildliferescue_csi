/*
    Student Name: Acima Cherian
    File Name:DM130 Project 2-
    Date: 12 Feb 2025
*/

//Global variables
var answer= document.querySelector("#answer p");
var heading = document.querySelector("#answer h2");

//Hamburger menu function
function hamburger(){
    var navlinks = document.getElementById("nav-links");
    var menuicon = document.getElementById("icon");
    if (navlinks.style.display === "block") {
        navlinks.style.display ="none";
        menuicon.style.color = "#2a1f14";
    } else {
        navlinks.style.display ="block";
        menuicon.style.color = "#f6eee4";
    }
}

//Function to display the first answer
function ans1() {
    heading.style.display ="block";
    answer.textContent ="Step back and observe the situation for a few minutes. Wait to see if a parent arrives. If the animal is in immediate danger from a predator or is in the road, remove the baby and bring to a rescue center.";
}

//Function to display the second answer
function ans2() {
    heading.style.display ="block";
    answer.textContent = " You cannot tell if an animal has raboes simply by seeing it. A text must be performed to determine if an animal has rabies. DO not approach wildlife that you suspect might be rabid. COntact us to have the animal removed.";
}

//Function to display the third answer
function ans3() {
    heading.style.display ="block";
    answer.textContent = "No. this is a myth. The parents will retrieve the baby bird ans place it back in the nest. IF the parents do not return. Contact us.";
}

//Function to display the fourth answer
function ans4() {
    heading.style.display ="block";
    answer.textContent = "We need volunteers to help feed animals, care for animals, and clean animal pens. We also accept donatations";
}