//Made Array for reference
var money = [
  ["PENNY", 0.01],
  ["NICKEL", 0.05],
  ["DIME", 0.10],
  ["QUARTER", 0.25],
  ["ONE", 1.00],
  ["FIVE", 5.00],
  ["TEN", 10.00],
  ["TWENTY", 20.00],
  ["ONE HUNDRED", 100.00]
];

//Algorithm
function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  
  //Get total cash in drawer
  var total = 0;
  cid.forEach(function(el) {
	  total += el[1];
  });
  total = total.toFixed(2);
  
  //determine if enough change in drawer
  if(total == change) {
	  return "Closed";
  }

  //build change array
  var result = [];  
  for(var i = money.length - 1; i >= 0; i--){
    var cent = money[i][1];
    var denom = money[i][0];
	  var available = cid[i][1];
    var amount = 0;
    
    while(change >= cent && available > 0){
      amount++;
      change = (change - cent).toFixed(2);
      available = (available - cent).toFixed(2);
    }
    
    if(amount > 0) {
      amount *= cent;
      result.push([denom, Number((amount).toFixed(2))]);
    }
  }
  
  //determine if insufficient funds
  if(change > 0) {
	  return "Insufficient Funds";
  }

  return result;
}

//Test Cases
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) 
    //should return an array.

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
    //should return a string.

checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
    //should return a string.

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) 
    //should return [["QUARTER", 0.50]].

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) 
    //should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
    //should return "Insufficient Funds".

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
    //should return "Insufficient Funds".

checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
    //should return "Closed".
