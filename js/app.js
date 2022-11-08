"use strict";

console.log("The JS file is alive");

//global variables
let userName;
let petInfo;
let nativeInfo;
let kidInfo;
let travelInfo;
let siblingInfo;
let userPoints = 0;
let favNumber;
let loopcounter = 0;

//-------------------------

function getUserName(){
  userName = prompt("What is your name?");
  let toLowerCaseName = userName.toLowerCase();
  console.log("User name is: ", userName);
  console.log("User name data type is: ", typeof userName);
  console.log("Name Lower Case: ", toLowerCaseName);

  if (
    toLowerCaseName === "beth" ||
    toLowerCaseName === "eva" ||
    toLowerCaseName === "leah" ||
    toLowerCaseName === "craig" ||
    toLowerCaseName === "katie" ||
    toLowerCaseName === "ruthann"
  ) {
    alert(
      "Welcome back to my All About Me site, " +
        userName +
        "! Let's play a guessing game. Each questions you get correct, earns you a point! Please respond with Y or N."
    );
  } else {
    alert(
      "Welcome, " +
        userName +
        "! Let's play a guessing game. Each question you get correct, earns you a point! Please respond with Y or N."
    );
  }
}
getUserName();

//-------------------------

function getPetInfo() {
  petInfo = prompt("Do I have at least one pet?");
  let toUpperCasePetInfo = petInfo.toUpperCase();
  console.log("pet, y or n: ", petInfo);
  console.log("pet info upper case: ", toUpperCasePetInfo);

  if (toUpperCasePetInfo === "Y" || toUpperCasePetInfo === "YES") {
    alert("Correct, I am a pet owner. I have a dog and two cats.");
    userPoints++;
    console.log("Logging point scored: ", userPoints);
  } else {
    alert("Sorry, your response is not correct. I have a dog and two cats.");
  }
}
getPetInfo();

//-------------------------

function getNativeInfo() {
  nativeInfo = prompt("Am I a Native Iowan?");
  let toUpperCaseNativeInfo = nativeInfo.toUpperCase();
  console.log("native, y or n: ", nativeInfo);
  console.log("native info upper case: ", toUpperCaseNativeInfo);

  if (toUpperCaseNativeInfo === "Y" || toUpperCaseNativeInfo === "YES") {
    alert("Correct, I am a native Iowan.");
    userPoints++;
    console.log("Logging point scored: ", userPoints);
  } else {
    alert("That is incorrect, I am a native Iowan.");
  }
}
getNativeInfo();

//-------------------------

function getKidInfo() {
  kidInfo = prompt("Do I have children?");
  let toUpperCaseKidInfo = kidInfo.toUpperCase();
  console.log("children?: ", kidInfo);
  console.log("kid info upper case: ", toUpperCaseKidInfo);

  if (toUpperCaseKidInfo === "N" || toUpperCaseKidInfo === "NO") {
    alert("Your answer is incorrect, I have two daughters");
  } else {
    alert("Way to go! I have two daughters.");
    userPoints++;
    console.log("Logging point scored: ", userPoints);
  }
}
getKidInfo();

//-------------------------

function getTravelInfo() {
  travelInfo = prompt("Do I enjoy travelling?");
  let toLowerCaseTravelInfo = travelInfo.toLowerCase();
  console.log("travel info value", travelInfo);
  console.log("travel info lower case ", toLowerCaseTravelInfo);

  if (toLowerCaseTravelInfo === "n" || toLowerCaseTravelInfo === "no") {
    alert(
      "That is incorrect, " +
        userName +
        " I am always looking for my next adventure!"
    );
  } else {
    alert("Correct, I love to travel!");
    userPoints++;
    console.log("Logging point scored: ", userPoints);
  }
}
getTravelInfo();

//---------------------------

function getSiblingInfo() {
  siblingInfo = prompt("Am I the youngest of my siblings?");
  let toLowerCaseSiblingInfo = siblingInfo.toLowerCase();
  console.log("sibling info value", siblingInfo);
  console.log("sibling info lower case ", toLowerCaseSiblingInfo);

  if (toLowerCaseSiblingInfo === "n" || toLowerCaseSiblingInfo === "no") {
    alert("That is correct, I am the middle child.");
    userPoints++;
    console.log("Logging point scored: ", userPoints);
  } else {
    alert("Incorrect, I am the middle child.");
  }
}
getSiblingInfo();

//-------------------------------number guessing game

function getFavNumber() {
  while (favNumber !== "16" && loopcounter < 5) {
    loopcounter++;
    favNumber = prompt(
      "What's my favorite number? Guess a number between 1-20 in five or fewer attempts."
    );
    if (favNumber > "16") {
      alert("Your guess is too high! Try again.");
    } else if (favNumber < "16") {
      alert("Your guess is too low. Try again");
    } else {
      alert("Great guess, " + userName + ". My favorite number is 16!");
      userPoints++;
    }
    if (loopcounter === 5) {
      alert("You've run out of guesses. The correct answer is 16.");
    }
    console.log(favNumber);
    console.log("Logging point, favNumber: ", userPoints);
  }
}
getFavNumber();

//-----------------------add array

function getCookieInfo() {
  let cookieInfo = [
    "chocolate chip",
    "sugar",
    "monster",
    "snickerdoodle",
    "shortbread",
  ];
  let attempts = 0;
  let correctAnswer = false;

  while (attempts !== 6 && correctAnswer === false) {
    let cookieInfo = prompt(
      "Cookies are a sweet treat. Guess one of my favorite cookie flavors."
    );
    // let cookieInfoToLowerCase = cookieInfoToLowerCase.toLowerCase();
    if (cookieInfo.indexOf(cookieInfo) >= 0) {
      userPoints++;
      console.log("user entered cookie flavor ", cookieInfo);
      console.log("attempt counter: ", attempts);
      correctAnswer = true;
      alert(
        "Correct, a " +
          cookieInfo +
          " cookie is one of my favorite cookies to eat. Chocolate chip, sugar, monster, snickerdoodle and shortbread cookies are all great flavors."
      );
    } else {
      alert("That is not one of my favorites.");
    }
    console.log("Logging cookie answer", cookieInfo);
    console.log("Logging cookie answer", userPoints);
  }
}
getCookieInfo();

//----------------------add alert

alert(
  "Hello " +
    userName +
    ", you learned a few things about me and earned some points! You earned " +
    userPoints +
    " points, great job!"
);

//  add attempt counter, why is everything logging at the end?

// --------------------------------------end of code
