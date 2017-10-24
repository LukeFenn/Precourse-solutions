function sumOfNumbers(number) {
  if (number > 0){
  return number + sumOfNumbers(num - 1);  
  }
  return number;
}