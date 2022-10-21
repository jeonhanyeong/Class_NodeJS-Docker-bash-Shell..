#include <stdio.h>
#include "libcheckeod.h"

int main(){
  int input;
  printf("Input numbers : ");
  scanf("%d", &input);
  if(checkeod(input)==0){
      printf("%d is odd number\n", input);
  }else {
      printf("%d is even number\n", input);
  }
  return 0;
}
