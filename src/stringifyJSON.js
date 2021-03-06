//use control flow- most specified version should be up top, second most specified version will be next
var stringifyJSON = function (obj) {
	if(Array.isArray(obj)){
		//account for nested arrays by recursing
		var results = [];
		for(var i = 0; i < obj.length; i++){
			results.push(stringifyJSON(obj[i]));
		}
		return '[' + results.join(',') + ']';
	}
	//to manage objects -- use the && operator to manage for null(typeof null is equal to an object)
	if(obj && typeof obj === 'object'){
		//use a results for an array 
		results = [];
		//loop thru the object and stringify the key and the value
		for(var key in obj){
			//to deal with unstringifiable values, use the continue to keep iterating and skip over the values
			if(key === 'undefined' || typeof obj[key] === 'function'){
				continue;
			}
			results.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]))
		}
		return '{' + results.join(',') + '}'
	}
	//to manage strings and to manage numbers because of type coercion
	if(typeof obj === 'string'){
		return '"' + obj+ '"'
	}
	return '' + obj;
}





// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
//Replace stringifyJSON with your own function in src/stringifyJSON.js, 
//and make the specs pass.

// var stringifyJSON = function(obj) {
//     var results = results || '';
//     //DEFINE ALL FUNCTIONS;
//     /*stringifyString function*/
//     var stringifyString = function(obj, results) {
//         results = results || ''; //initialize empty string if results is undefined;
//         return results += '"' + obj + '"';

//     };
//     /*stringifyObject function*/
//     var stringifyObject = function(obj, results) {
//         results = results || '{'; //if results is undfined intiliaze it to open bracket for an obj
//         //if empty object we don't need to loop thru it return stringified version
//         if (Object.keys(obj).length === 0) {
//             results = "{}";
//             return results
//         }
//         for (var key in obj) {

//             if (typeof obj[key] === 'function' || obj[key] === 'undefined' || key === 'undefined') {
//                 //if it is a function or if it is undefined can skip over it
//                 results = results
//                 if (Object.keys(obj[key])
//                     .length === 0) {
//                     results = "{}";
//                     return results
//                 }

//             } else if (typeof obj[key] === 'string') {

//                 results = stringifyString(key, results) + ':' + '"' + obj[key] + '"' 
//             } else if (typeof obj[key] === 'boolean') {
               
//                 results = stringifyString(key, results) + ":" + stringifyBoolean(obj[key], results)
                   
//             } else if (!obj[key]) {
//                 results = stringifyString(key, results) + ':' + obj[key];
//             } else if (!Array.isArray(obj[key]) && typeof obj[key] === 'object') {
//                 //if it's an object, recursively call stringify object
                
//                 results = stringifyString(key, results) + ":" + stringifyObject(obj[key], results)
//             } else if (Array.isArray(obj[key])) {
                
//                 results = stringifyString(key, results) + ":" + stringifyArray(obj[key])
//             }
//             results = results + ','
//         }
//         /*This code removes the comma at the end of an array or object*/
//         results = results.slice(0, results.length - 1)
//         return results + "}"

//     };
//     /*stringifyBoolean function*/
//     var stringifyBoolean = function(obj, results) {
//         results = results || '';
//         if (obj === true) {
//             return 'true'
//         } else {
//             return 'false'
//         }

//     };
//     /*stringifyArray function*/
//     var stringifyArray = function(array, results) {
//         results = results || '['
//             //if empty array don't loop thru it
//         if (array.length === 0) {
//             results = '[]'
//             return results
//         }
//         for (var i = 0; i < array.length; i++) {
//             var item = array[i]
//             if (typeof item === 'number') {
                
//                 results = results + item + ',';
//             } else if (Array.isArray(item)) {
                
//                 if (item.length === 0) {
//                     results += '[],';
//                 } else {
//                     results = results + stringifyArray(item);

//                     if (results[results.length - 1] === ',') {
//                         results = results.substring(0, results.length - 1);
//                     }
//                     results += ']';
//                 }
//             } else if (typeof item === 'string') {
                
//                 results += stringifyString(item) + ',';
//             } else if (!Array.isArray(item) && typeof item === 'object') {
                
//                 results = results + stringifyObject(item) + ','
//             }
//         }
//         //remove extra comma at the end of stringifiedArray
//         results = results.slice(0, results.length - 1) + ']'


//         return results;
//     };

//     /*IF ELSE STATEMENTS*/
//     if (typeof obj === 'number') {
//         return obj.toString()
//     } else if (obj === null) {
//         return 'null';
//     } else if (typeof obj === 'boolean') {
//         return stringifyBoolean(obj)
//     } else if (typeof obj === 'string') {
//         return stringifyString(obj)
//     } else if (Array.isArray(obj)) {
//         return stringifyArray(obj)
//     } else if (typeof obj === 'object') {
//         return stringifyObject(obj)
//     }

// };

// /*stringify JSON with no helper functions in proper order*/
// var stringifyJSON = function (obj) {
//    /*to be used for arrays*/
//    if( Array.isArray(obj) ){
//    		var results = [];
//    		//stringify each item in teh array;
//    		for(var i = 0; i < obj.length; i++){
//    			results.push(stringifyJSON(obj[i]));
//    		}
//    		//once done recursing, concatenate all items in array on teh comma
//    		return '[' + results.join(',') + ']';
//    }
//    // /*to be used for objects*/
//    if( obj && typeof obj === 'object' ){
//      var results = [];
//      //loop thru each key value pair int he object.
//      for(var key in obj){
//      	//for undefineable values. if they obj[key] or the typeof the obj[key] is a function, 
//       	if( obj[key] === undefined || typeof (obj[key]) === 'function' ){
//      		continue;
//      	}
//      	results.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
//      }
//      return '{' + results.join(',') + '}';
//    }
//    /*to be used for strings, numbers and boolean values by utilizing string concatenation*/
//    if(typeof obj === 'string'){
//         return '"' + obj  + '"'
//     } 
//     	return '' + obj;
    

// }

//has two arguments refered to as filter or replacer
//can be used to modify data passed to it

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify



// hint: JSON does not allow you to stringify functions or
// undefined values, so you should skip those key/value pairs.

//return value is will always be a string
























