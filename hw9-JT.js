//Exercise 1
var finalNumber = 3+5 * (10/2) - (8-4);
console.log(finalNumber);

//Excercise 2
var projectIdentifier = "COMP484";
ProjectIdentifier = "JS_Advanced";
//Reassignment fails because variables are case sensitive
//this is calling a different variable essentially
projectIdentifier= "JS_Advanced";

//Excercise 3
var courseDescription = "The course is \"interactive\" and involves 'scripting' logic "

//Exercise 4
var errorMessage = 'An internal server error occurred: \"Access Denied\"'
console.log(errorMessage);

//Exercise 5 
var valueA = 10;
var valueB = "4";
var resultSubtraction = valueA - valueB;
var resultMultiplication = valueA * valueB;
console.log(resultSubtraction);
console.log(resultMultiplication);
console.log(typeof  valueB);

//Exercise 6
var unassignedVar;
var  explicitNull =null;
console.log(typeof unassignedVar);
console.log(typeof explicitNull);
//Null data is the intentional absence of  an object value
//if a variable holds value then it is  a certain object

//Exercise 7 
var isBlocking = true;
console.log(typeof isBlocking);
isBlocking = "true";
console.log(typeof isBlocking);

//Exercise 8
//var 1number = 1;
//variables can't start with a number

//var big number = 1000;
//variables can't have a space

//var *number = 67;
//varaibles cannot contain special characters/symbols

//Exercise 9
var counterValue = 50;
counterValue /= 5;
counterValue -= 3;
console.log(counterValue);

//Exercise 10
var x = 10;
var y_post = x++;
console.log (y_post);
console.log (x)
x = 10;
var z_pre = ++x;
console.log (z_pre);
console.log (x);
//the javascript reads the code from the left to right so the placement
//of the unary operator is important as we can see on y_post 
// since the unary operater is placed after the x then after the value has been read
//it then adds 1 to the value
//thats why y_post displays 10 because it  reads 10 then adds the 1 after is already reads the value
//on the flip side with z_pre the  unary operator being placed before the x  
//the operator is read first adds 1 to the x then reads the value of x
//thats why z_pre displays 11 because the 1 is already added to x when read


//Exerices 11
var testNumber = 0, testBoolean = false;
if (testNumber == testBoolean){
    console.log("loosely equal");
}
//since we used == it tries to find a loose equality between the two so in a binary
//sense 0 is loosesly = to false if  we wanted  it to return false  and  not log
//  we wouldve used the stritcly equal ===

//Exercise 12
var versionA = 10.0;
var versionB = "10.0";
if(versionA !== versionB){
    console.log("VersionA and VersionB are NOT strictly equal")
}
else
{
    console.log("VersionA and VersionB are strictly equal")
}

//Exercise 13
var isLoggedIn;
var isSubscriber;
var isTrialExpired;
if ((isLoggedIn == true && isSubscriber == true) || (isLoggedIn == true && isTrialExpired == false)) {}

//Exercise 14
var conditionA =true;
var conditionB =false;
//conditionB=true;  //for testing purposes
if((conditionA == true || conditionB ==true) && ((conditionA  ==  true) != (conditionB == true)))
{
    console.log("XOR SUCCESS");
}
else
{
    console.log("XOR FAIL");
}

//Exercise 15
var scriptLoadType = "deferred"
var loadStatus;

if (scriptLoadType == "deferred")
{
    loadStatus = "Non-blocking";
}
else
{
    loadStatus = "Potentially blocking";
}

var loadStatusTernary;
scriptLoadType=="deferred" ? loadStatusTernary = "Non-blocking": loadStatusTernary = "Potentially blocking";

//console.log(loadStatusTernary);

//Exercise 16
function calculateRenderTime()
{
    /* Calculating the time taken to parse HTML
     and execute JavaScript
    */
    //  this is where we  would put the code to calculate time
}

//Exercise 17
var date = new Date();
console.log((date.getMonth()+1)+"/"+date.getDate() +"/"+date.getFullYear());

//Exercise 18
var val1 =  20;
var val2 = "5";
var sumResult = val1 + val2;
var diffResult = val1- val2;
console.log(sumResult);
console.log(diffResult);
// When JavaScript read the + operator it thought of concantenating the two values together because ther operator serves the dual purpose of numerical addition  and string concatenation.  The Engine will priortize string concatenation when a string is present
//On the other hand - is only used for numerical operation so the system converts  the string instead for diff result

//Exercise 19
var dataInput = 484;
if(typeof dataInput === "number")
{
    console.log("Input is  numeric.");
}
else
{
    dataInput =  true;
    console.log(typeof dataInput);
}

//Exercise 20
const heading = document.createElement('h1');

// Set its text content
heading.textContent = 'Interactive Layer Loaded';

// Append it to the document body
document.body.appendChild(heading);

/** It starts reading <html>, then <head>, and encounters your <script>.
When it hits a <script> tag without defer or async, 
it pauses HTML parsing to execute that script immediately. 
Because html is a top down language*/

//NOTE: I am unsure about the Refernce Error Message: document is defined
//but it does create and append the heading into the HTML file properly when
//the HTML file runs