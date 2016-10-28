var getElementsByClassName = function (className, node) {
    var nodes = [];
    //starting node
    var node = node || document.body;
    //turn to an array first- there could be multiple names 
    var parts = node.className.split(' ')

    if(parts.includes(className)){
        nodes.push(node);
    }
    //loop thru the parentNodeschildren
    //console.log(node)
    // console.log(node.children, 'CHILDCHILDCHILD')
    for(var i = 0; i < node.children.length; i++){
        //results will be an array
        var results = getElementsByClassName(className, node.children[i])
        nodes = nodes.concat(results);
    }
    return nodes;
}


/*
PseudoCode
Input => node
Output => array with all correct classnames

starting node => document.body that woudld be parent
//loop through all nodes using for loop
//if node has target classname
//concat with nodes array

*/

/*
<body>
<div class='targetClassName'></div>
<div>
    <div class='targetClassName'>
        <div class='targetClassName'>
        
        </div>
    </div>
    <p class='targetClassName'>
</div>
<div class='targetClassName'></div>
<div class='dontfindthisClassName'></div>*/
