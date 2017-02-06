function permAlone(str) {
  var regex = new RegExp(str[0], 'g');
  var allPermutations = [];
  var arr = str.match(regex);
  if(str.length === 1){
    //Base case: Only one permutation, no repeats possible
    return 1;
  }else if(str.length === arr.length){
    //Base case: If all chars are same, all permutations include repeats
    return 0;
  }
  //Go to Heap's Algorithm
  arr = str.split('');
  permutations(arr.length);
  var noRepeats = allPermutations.filter(function(str){
    return !str.match(/(.)\1+/g);
  });
  return noRepeats.length;

  //Functions used
  //Element swap
  function swap(index1, index2){
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
  //Heap's Algorithm
  function permutations(length){
    if(length === 1){
      allPermutations.push(arr.join(''));
    }else{
      for(var i = 0; i < length; i++){
        permutations(length - 1);
        swap(length % 2 === 0 ? i : 0, length - 1);
      }
    }
  }
}


permAlone('aab');
