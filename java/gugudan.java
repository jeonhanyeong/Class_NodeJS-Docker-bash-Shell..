import java.util.Scanner;

public class gugudan{
  public static void main(String[] args) {
    int input;
    Scanner sc = new Scanner(System.in);
    while(true){
    System.out.print("Insert number(0:Exit) : ");
    input = sc.nextInt();
    if(input == 0){
      break;
    }else if(input>1 && input<10){
      for(int i=1; i<=9; i++){
        System.out.println(input + "x" + i + "=" + input*i);
      }
    }else{
      System.out.println("Insert number 2~9. Retype Again~!!");
    }
  }
}
}
