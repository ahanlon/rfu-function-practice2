$(document).on('ready', function() {

// Function Practice #2

// 1. Write a function called 'getName' which takes a single object argument and returns the value of the 'name' property of the given object.getName({ name: 'Luisa', age: 25 }) should return 'Luisa'

// var info = {
// 	name : 'Luisa',
// 	age  : 25,
// }

// var getName = function(object){
// 	return info.name;
// }
// console.log( getName(info) );



// 2. Write a function called 'totalLetters' which takes an array of strings and returns the total number of letters in all strings.
	// totalLetters(['javascript', 'is', 'awesome']) should return 19
	// totalLetters(['what', 'happened', 'to', 'my', 'function']) should return 24

	// Here are the arrays to use
	var jsIsCool = ['javascript', 'is', 'awesome'];
	var funcFail = ['what', 'happened', 'to', 'my', 'function'];

	// 1. create a function called 'totalLetters' that takes an array
	var totalLetters = function(myArray){

		// 3. count the number of letters in each string of the array
		var countString = function(string){
		 	return string.length;
		}

		// 2. iterate over the array
		var newArray = myArray.map(countString)

		// 4. add all the values of each string together
		var totalChar = newArray.reduce(function(initialValue, currentValue){
			return initialValue + currentValue;
		});

		// 5. return the total value of #4
		console.log(totalChar);
	}
	
	totalLetters(jsIsCool);	
	totalLetters(funcFail);

		

	


















  
});