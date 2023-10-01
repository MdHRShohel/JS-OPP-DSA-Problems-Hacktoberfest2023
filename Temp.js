function CToF(celsius) {
  var CTemp = celsius;
  var CToFahr = (CTemp * 9) / 5 + 32;
  var message = CTemp + "\xB0C is " + CToFahr + " \xB0F.";
  console.log(message);
}

function FToC(fahrenheit) {
  var FTemp = fahrenheit;
  var FToCel = ((FTemp - 32) * 5) / 9;
  var message = FTemp + "\xB0F is " + FToCel + "\xB0C.";
  console.log(message);
}
CToF(60);
FToC(45);
