function repeatString(str, num) {
  let repeatString = "";
  while (num >= 1) {
    repeatString += str;
    num--;
    //console.log(repeatString);
  }
  return repeatString;
}
