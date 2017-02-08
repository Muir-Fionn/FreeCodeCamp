function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var arrOrbital = [];

  arr.forEach(function(satt){
    arrOrbital.push({name: satt.name, orbitalPeriod: altToPeriod(satt.avgAlt)});
  });

  function altToPeriod(avgAlt){
    var radiusCubed = Math.pow(earthRadius + avgAlt, 3);
    var period = 2 * Math.PI * Math.sqrt(radiusCubed/GM);
    return Math.round(period);
  }

  return arrOrbital;
}
