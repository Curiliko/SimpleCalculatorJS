var num1 = 12;
var num2 = 3;
var userInput = '/';

console.log("Welcome to the four function calculator!\n");
console.log("Enter an operation to execute: + (addition), - (subtraction), * (multiplication), / (division): \n");

function add(num1, num2) {
	console.log("Enter first number to be added: ");
	console.log("Enter second number to be added: \n");
	console.log(num1 + num2);
}

function subtract(num1, num2) {
	console.log("Enter a number to be subtracted from: ");
	console.log("Enter second number to be subtracted from first number: \n");
	console.log(num1 - num2);
}

function multiply(num1, num2) {
	console.log("Enter first number to be multiplied: ");
	console.log("Enter second number to be multiplied: \n");
	console.log(num1 * num2);
}

function divide(num1, num2) {
	console.log("Enter first number: ");
	console.log("Enter number to divide first number by: \n");
	console.log("The result is " + num1 / num2);
}

switch (userInput) {
	case '+':
		add(num1, num2);
		break;
	case '-':
		subtract(num2, num2);
		break;
	case '*':
		multiply(num1, num2);
		break;
	case '/':
		divide(num1, num2);
		break;
	default:
		console.log("Not a valid operator.");
}