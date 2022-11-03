
'use strict';
console.log('The JS file is alive');
//global variables
let userName; //creating a space in memory to hold some information later.
let petInfo;
let nativeInfo; //declaring variables
let kidInfo;
let travelInfo;


//-------------------------
userName = prompt('What is your name?');
let toLowerCaseName = userName.toLowerCase();
console.log('User name is: ', userName);
console.log('User name data type is: ', typeof(userName));
console.log('Name Lower Case: ', toLowerCaseName);

if(toLowerCaseName === 'beth' || toLowerCaseName === 'eva' || toLowerCaseName === 'leah' || toLowerCaseName === 'craig' || toLowerCaseName === 'katie' || toLowerCaseName === 'ruthann'){
  alert('Welcome back to the site, ' + userName);
} else {
  alert('Welcome, new friend!');
}
//-------------------------

petInfo = prompt('Do you have a pet?');
let toUpperCasePetInfo = petInfo.toUpperCase();
console.log('pet, y or n: ', petInfo);
console.log('pet info upper case: ', toUpperCasePetInfo);

if(toUpperCasePetInfo === 'Y' || toUpperCasePetInfo === 'YES'){
  alert('Congratulations on beng a pet owner, ' + userName + '! I have a dog and two cats.');
} else {
  alert('Life is lonely without a pet!');
}
//-------------------------

nativeInfo = prompt('Are you a Native Iowan');
let toUpperCaseNativeInfo = nativeInfo.toUpperCase();
console.log('native, y or n: ', nativeInfo);
console.log('native info upper case: ', toUpperCaseNativeInfo);


if(toUpperCaseNativeInfo === 'Y' || toUpperCaseNativeInfo === 'YES'){
  alert('We are both Native Iowans!');
} else {
  alert('Hmmmm, wonder where you are from?');
}
//-------------------------

kidInfo = prompt('Do you have children?');
let toUpperCaseKidInfo = kidInfo.toUpperCase();
console.log('children?: ', kidInfo);
console.log('kid info upper case: ', toUpperCaseKidInfo);

if(toUpperCaseKidInfo === 'N' || toUpperCaseKidInfo === 'NO'){
  alert('Kids are not for everyone, ' + userName) + '!';
} else {
  alert('I have children, too ' + userName + '. Two girls to be exact!');
}
//-------------------------

travelInfo = prompt('Are you a fan of travelling?');
let toLowerCaseTravelInfo = travelInfo.toLowerCase();
console.log('travel info value', travelInfo);
console.log('travel info lower case ', toLowerCaseTravelInfo);

if(toLowerCaseTravelInfo === 'no' || toLowerCaseTravelInfo === 'yes'){
  alert('Let us head out on adventure, ' + userName + '!');
} else {
  alert('This alert should never be triggered!');
}


alert('Hello ' + userName + ' your pet\'s ' + petInfo + ' from iowa? ' + nativeInfo + ' kiddos ' + kidInfo + ' lets travel to ' + travelInfo);

