function makeFriendlyDates(arr) {
  var date1 = arr[0].split('-');
  var date2 = arr[1].split('-');

  //Check for same date
  if(arr[0] === arr[1]){
    date =  months[date1[1]] + ' ' + days(date1[2])
    date += date1[0] !== '2016' ? ', ' + date1[0] : '';
    return [date];
  }

  //Convert dates
  var firstDate = months[date1[1]] + ' ';
  var secondDate = days(date2[2]);
  firstDate += days(date1[2]);
  firstDate += date1[0] !== '2016' ? ', ' + date1[0] : '';
  if(date2[0] - date1[0] > 1){
    secondDate += ', ' + date2[0];
    firstDate += ', ' + date1[0];
    secondDate = months[date2[1]] + ' ' + secondDate;
  }else if (date2[0] - date1[0] == 1){
    secondDate = months[date2[1]] + ' ' + secondDate;
    if(date2[1] > date1[1] || (date2[1] === date1[1] && date2[2] >= date1[2])){
      secondDate += ', ' + date2[0];
    }
  }else{
    if (date1[1] !== date2[1]) {
      secondDate = months[date2[1]] + ' ' + secondDate;
    }
  }

  return [firstDate, secondDate];
}

var months = {
  "01": "January",
  '02': 'February',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  '09': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December',
}

function days(day){
  //Get Last Digit of Number
  var lastDigit = Number(day) % 10;

  //Determine if number between 10-20 where all end in th
  if(Number(day) < 10) {
    day = day.slice(1);
  }else if(Number(day) < 20){
    lastDigit = 0;
  }

  //Return Ordinal day
  switch (lastDigit){
    case -1:
      return "Invalid Day";
    case 1:
      return day + 'st';
    case 2:
      return day + 'nd';
    case 3:
      return day + 'rd';
    default:
      return day + 'th';
  }

}
