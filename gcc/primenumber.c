int primecheck(int input){
  int i;
  for(i = 2; i<input; i++){
    if(input % i == 0)
      break;
    else
      continue;
  }
  return i;
}
