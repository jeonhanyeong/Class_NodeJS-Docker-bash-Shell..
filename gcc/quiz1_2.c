#include <stdio.h>
#include "libprimenum.h"

void main(){

    while(1){
      int input;
      printf("Input numbers (end:0): ");
      scanf("%d", &input);
      if(input==0) break;
      if(primecheck(input)==input){
        printf("%d is prime number\n", input);
      }else{
        printf("%d is not prime number\n", input);
      }
    }
}
