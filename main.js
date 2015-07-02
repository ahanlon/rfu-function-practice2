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

//------------------------------------------------------------------------------------


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

//------------------------------------------------------------------------------------

//	3.	Write a function called 'keyValue' which takes two arguments and returns a new object with a key of the first argument and the value of the second argument.
	//keyValue('city', 'Denver') should return Object {city: "Denver"}

		// 2. create an empty object that will take the values of the two arguments
		var newObj = {};

		// 1. create function called 'keyValue' that takes two arguments
		var keyValue = function(key, value){

		// 3. take the first argument and set it to the object key and the second to the value
		newObj[key] = value;
		return newObj;
	}
	
	// 5. return the new object containing the two args set as the key:Value pair
	console.log( keyValue('city', 'Denver'));

//------------------------------------------------------------------------------------

// 4.	Write a function called 'negativeIndex' which takes an array and a negative number, and returns the value from the array at the given negative index, as if the array was circular, i.e. arr.length+num.
	// negativeIndex(['a', 'b', 'c', 'd', 'e'], -2) should return 'd'
	//negativeIndex(['jerry', 'sarah', 'sally'], -1) should return 'sally'

	// 2. define the array(s) that will be called.
	var letters = ['a', 'b', 'c', 'd', 'e'];
	var names = ['jerry', 'sarah', 'sally'];

	// 1. create a function called 'negativeIndex'(array, -#)
	var negativeIndex = function(array, index){
		// 3. create the effect of a circular array by adding the length of the array to the index arg
		var arrayCirc = array.length + index;
		// 4. return the position of the value of the new position created
		return array[arrayCirc];
	}
	console.log( negativeIndex(letters, -2) );
	console.log( negativeIndex(names, -1) );
	


//------------------------------------------------------------------------------------

//	5.  Write a function called 'removeM' which takes a single string argument and removes all 'm' characters from the string. The function won't actually modify
	// removeM('family') should return 'faily'
	// removeM('memory') should return 'eory'

	// 1. Create a fucntion called 'removeM('string')
	var removeM = function(string){
		var newStr = '';
		// 2. check each position in the string to identify the letter m in the string
		for (i = 0; i < string.length; i++){

			// 3. remove all the letter m and then return the rest of the string
			if ( string[i].toLowerCase() != "m" ){
				newStr += string[i];
			}
		}
		console.log( newStr);
	}
	removeM('family');
	removeM('Memory');
	
//------------------------------------------------------------------------------------

// 6. Write a function called 'printObject' which takes a single object argument and console.log's each key-value pair in the format key is value on separate lines.
	// printObject({ a: 10, b: 20, c: 30 }) should print:
	// a is 10
	// b is 20
	// c is 30
	// printObject({ firstName: 'pork', lastName: 'chops' }) should print:
	// firstName is pork
	// lastName is chops

	// 1. create a function called 'printObject'(obj)
	var printObject = function(obj){
		// 2. loop over the object to identify each key: value pair
		for ( key in obj ){
		var objCon = key + ' is ' + obj[key];
		// 3. console.log the key value pair in the format "key ' is ' value" for each loop		
		console.log(objCon);
		}
	}
	printObject({ a: 10, b: 20, c: 30 });
	printObject({ firstName: 'pork', lastName: 'chops' });

//------------------------------------------------------------------------------------

//	7.	Write a function called 'vowels' which takes a string and returns an array of all the vowels in the string, including duplicates.
	//	vowels('alabama') should return ['a', 'a', 'a', 'a']
	//	vowels('What evil odd ducks!') should return ['a', 'e', 'i', 'o', 'u']

	var strVowels = [];
	// 1. create a function called 'vowels'(string)
	var vowels = function(string){

		// 2. loop over the string to identify vowels
		for (i = 0; i < string.length; i++){
			if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u') {

				// 3. push vowels into an array 
				strVowels.push(string[i]);
			}
		}
		console.log(strVowels);
	}
	// vowels('alabama');
	vowels('What evil odd ducks!');

//------------------------------------------------------------------------------------

// 8.	Write a function called 'twins' which takes an array and returns true if every adjacent pair of items in the array is the same.
	//	twins(['a', 'a', 'b', 'b', 'c', 'c']) should return true
	//	twins(['a', 'a', 'b', 'c', 'd', 'd']) should return false
	//	twins(['a', 'a', 'b', 'z']) should return false
	//	twins(['a', 'a', undefined]) should return false


	// 1. create function called 'twins'(array)
	var twins = function(array){
		var falsey = [];

		// 2. loop over the array 
		for ( i = 0; i < array.length; i+=2){

			// 3. examine array contents to identify adjacent pairs & if array length is even number
			if (array[i] != array[i+1] || array.length%2 != 0){
					// 4. If this argument is false, push the value false to the falsey array
					falsey.push(false);
				}
			}
		// 5. if the falsey array contains a false, return false, otherwise, the array is still empty which means all adjacent pairs are equal so return true.
		if ( falsey.length > 0 ){
			return false;
		}
		else {
			return true;
		}
	}

	console.log( twins(['a', 'a', 'b', 'b', 'c', 'c']) );
	console.log( twins(['a', 'a', 'b', 'c', 'd', 'd']) );
	console.log( twins(['a', 'a', 'b', 'z']) );
	console.log( twins(['a', 'a', undefined]) );


//------------------------------------------------------------------------------------

// 9.	Write a function called 'or' which takes an array of booleans and returns true if any one of them is true. Given an empty array, return false. If you find an item that is true, the function should return true immediately and not continue checking further values.
	//	or([false, false, true, false]) should return true
	//	or([false, false, false]) should return false
	//	or([]) should return false

	// 1. create function 'or(array)'
	// 2. loop over array to check each bolean value
	// 3. return true if the array contains a true value
	// 4. the the function should immeadiately return true and not continue as soon as it finds the first true.

	var or = function(array){
		for (i = 0; i < array.length; i++) {
			if (array[i]){
				return true;
			}
		}
			return false;
	}
	
console.log( or([false, false, true, false]) );
console.log( or([false, false, false]) );
console.log( or([]) );


//------------------------------------------------------------------------------------

// 10.	Write a function called 'unique' which takes an array of strings, and returns a new array consisting of the unique values (no duplicates).
	// unique(['a', 'b', 'a', 'c', 'd', 'd']) should return ['a', 'b', 'c', 'd']
	// unique(['todd', 'avery', 'maria', 'avery']) should return ['todd', 'avery', 'maria']


	// create function 'unique'(array) array
	var unique = function(array){

		// sort array by value
		var compare = function(a, b){
			if (a <  b) {
	   			return -1;
	  		}
	  		if (a > b) {
	    		return 1;
	  		}
	  		return 0;
			}
		var sortedArray = array.sort(compare())

		var newArray = [];

		// loop over array to identify unique/duplicate values
		for (i = 0; i < sortedArray.length; i++)
		if (sortedArray[i] != sortedArray[i+1] ){
					//push unique values to new array
					newArray.push(array[i]);
				}
		return newArray
	}

	console.log( unique(['a', 'b', 'a', 'c', 'd', 'd']) );
	console.log( unique(['todd', 'avery', 'maria', 'avery']) );

	




  
});