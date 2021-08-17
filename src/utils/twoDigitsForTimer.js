function twoDigitsForTimer(number) {
  if (number < 10) {
    number = '0' + number;
  }
  return number;
}

export default twoDigitsForTimer;