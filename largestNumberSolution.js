function largestNumber (num){
  let strNum = String(num),
      arrNumSplit = strNum.split(""),
      arrNumSort = arrNumSplit.sort(function(a, b){
      return a - b });
     
    let trueNumSort = arrNumSort.reverse();
    let finalNum = []
    finalNum.push(trueNumSort[0], trueNumSort[1]);
     
return parseInt(finalNum.join(''));
     
}