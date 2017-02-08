function pairwise(arr, arg) {
  var indexes = []

  for(var i = 0; i < arr.length; i++){
    for(var j = i+1; j < arr.length; j++){
      if(arr[i] + arr[j]  === arg){
        indexes.push([i, j, i + j]);
      }
    }
  }

  var pair1 = Array.isArray(indexes[0]) ? indexes[0] : [-1,-1,0];
  var pair2 = [-1,-1,0];

  for(i = 1; i < indexes.length; i++){
    if(indexes[i][0] in pair1.slice(0,2) || indexes[i][1] in pair1.slice(0,2)){
      continue;
    }else if(indexes[i][0] in pair2.slice(0,2) || indexes[i][1] in pair2.slice(0,2)){
      continue;
    }else if(indexes[i][2] < pair1[2]){
      pair2 = pair1;
      pair1 = indexes[i];
    }else if (indexes[i][2] < pair2[2] || pair2[2] === 0){
      pair2 = indexes[i];
    }
  }

  return pair1[2] + pair2[2];
}

pairwise([1,4,2,3,0,5], 7);
