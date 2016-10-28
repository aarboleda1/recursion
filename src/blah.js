// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, parentNode, results) {
    results = results || [];
    parentNode = parentNode || document.body

    //if it contains class name push parentNode to results array
    if (parentNode.classList.contains(className))
        results.push(parentNode);

    //recursion
    for (var i = 0; i < parentNode.children.length; i++) {
        results.concat(getElementsByClassName(className, parentNode.children[i], results))
    }
    return results;
};

// You should use document.body, element.childNodes, and element.classList
//https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName

//didn't use element.childNodes. did not recognize it

/*PSEUDOCODE
// check if the node we are on contains the className
//if so push to array
//now we have an array with a node with the correct className
//loop thru its children. suppose to be childNodes but children gives all elements
//rather than ALL nodes. doesn't work in browser for some reason
//this is where recursion happens. 
		//call getElementsByClassName once again on each child of the parentNode
		//each one will have its own execution context
		//if it contains the right class it'll be pusehd to array
		//if not it will skip over it
		//as it goes upt the stack it will concat with the results array previously made


*/
