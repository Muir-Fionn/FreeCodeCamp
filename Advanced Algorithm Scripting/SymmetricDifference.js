//Algorithm
function sym(args) {
  args = args.sort();
  
  for(var i = 1; i < arguments.length; i++){
	  var ref = [];
	  var test = arguments[i].sort();
    
	  for(var j = 0; j < args.length; j++){
		  if(args[j] == args[j-1]){
			  continue;
      }else{
			  test.indexOf(args[j]) < 0 ? ref.push(args[j]) : args[j];
			  console.log(ref);
      }
    }
    
	  for( j = 0; j < test.length; j++){
		  if(test[j] == test[j-1]){
			  continue;
      }else{
			  args.indexOf(test[j]) < 0 ? ref.push(test[j]) : test[j];
			  console.log(ref);
      }
    }
    
	  args = ref;
  }
  
  return args;
}

//Test Cases
sym([1, 2, 3], [5, 2, 1, 4])                                                      //should return [3, 4, 5].
sym([1, 2, 3], [5, 2, 1, 4])                                                      //should contain only three elements.
sym([1, 2, 5], [2, 3, 5], [3, 4, 5])                                              //should return [1, 4, 5]
sym([1, 2, 5], [2, 3, 5], [3, 4, 5])                                              //should contain only three elements.
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])                                     //should return [1, 4, 5].
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])                                     //should contain only three elements.
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])                       //should return [2, 3, 4, 6, 7].
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])                       //should contain only five elements.
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])    //should return [1, 2, 4, 5, 6, 7, 8, 9].
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])    //should contain only eight elements.
