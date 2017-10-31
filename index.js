function produceDrivingRange(distance){
  return function(start, end){
    let beginning = parseInt(start);
    let ending = parseInt(end);
    let range = Math.abs(ending - beginning);

    if (range > distance){
      return `${range - distance} blocks out of range`;
    }
    else {
      return `within range by ${range}`;
    }
  }
}

function produceTipCalculator(tipPercentage){
  return function(amount){
    return amount * tipPercentage;
  }
}
