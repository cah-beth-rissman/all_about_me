
'use strict';
console.log('The JS file is alive');

//prompt 1

// Prompt users for input

    let userName = prompt('What is your name?');
    let toLowerCaseName = userName.toLowerCase();
    console.log('User name is: ', userName);
    console.log('User name data type is: ', typeof(userName));
    console.log('Name Lower Case: ', toLowerCaseName);

// Validate the input using some conditional logic

if(toLowerCaseName === 'beth' || toLowerCaseName === 'eva' || toLowerCaseName === 'leah' || toLowerCaseName === 'craig' || toLowerCaseName === 'katie' || toLowerCaseName === 'ruthann'){
    // we have access to our global variables. 

      alert('Welcome back to the site, ' + userName);
    
    } else {
      alert('Welcome, new friend!');
    }
 // prompt 2

 // Prompt users for input

 let petInfo= prompt('Do you have a pet?');
 let toUpperCasePetInfo = petInfo.toUpperCase();
 console.log('pet, y or n: ', petInfo);
 console.log('pet info upper case: ', toUpperCasePetInfo);

// Validate the input using some conditional logic

if(toUpperCasePetInfo === 'Y' || toUpperCasePetInfo === 'YES'){
 // we have access to our global variables. 

 alert('Congratulations on beng a pet owner, ' + userName + '! I have a dog and two cats.');
 
 } else {
   alert('Life is lonely without a pet!');
 }

// prompt 3

// Prompt users for input

let nativeInfo = prompt('Are you a Native Iowan');
let toUpperCaseNativeInfo = nativeInfo.toUpperCase();
console.log('native, y or n: ', nativeInfo);
console.log('native info upper case: ', toUpperCaseNativeInfo);

// Validate the input using some conditional logic

if(toUpperCaseNativeInfo === 'Y' || toUpperCaseNativeInfo === 'YES'){
// we have access to our global variables. 

  alert('We are both Native Iowans!');

} else {
  alert('Hmmmm, wonder where you are from?');
}

// prompt 4

// Prompt users for input

 let kidInfo = prompt('Do you have children?');
 let toUpperCaseKidInfo = kidInfo.toUpperCase();
 console.log('children?: ', kidInfo);
 console.log('kid info upper case: ', toUpperCaseKidInfo);

// Validate the input using some conditional logic

if(toUpperCaseKidInfo === 'N' || toUpperCaseKidInfo === 'NO'){
 // we have access to our global variables. 

   alert('Kids are not for everyone, ' + userName) + '!';
 
 } else {
   alert('I have children, too ' + userName + '. Two girls to be exact!');
 }

// prompt 5

// Prompt users for input

  let travelInfo = prompt('Are you a fan of travelling?');
  let toLowerCaseTravelInfo = travelInfo.toLowerCase();
  console.log('travel info value', travelInfo);
  console.log('travel info lower case ', toLowerCaseTravelInfo);

// Validate the input using some conditional logic

if(toLowerCaseTravelInfo === 'no' && toLowerCaseTravelInfo === 'yes'){
  // we have access to our global variables. 

    alert('Let us head out on adventure, ' + userName + '!');
  
  } else {
    alert('This alert should never be triggered!');
  }
