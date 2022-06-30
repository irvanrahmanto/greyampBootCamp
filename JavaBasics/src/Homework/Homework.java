package Homework;
import java.util.Scanner;

public class Homework {
    public static void main(String[] args) {

//      Number 1
        Scanner inp = new Scanner(System.in);
        System.out.println("1. Number 1 : ");
        System.out.println("Input your character : ");
        char check = inp.next().charAt(0);

        Homework ob = new Homework();
        ob.checkUppercaseAndLowercase(check);

        System.out.println();

//      Number 2
        Homework obj = new Homework();
        System.out.println("2. Number 2 : ");
        System.out.println("Reverse Star is : ");
        obj.printTriangleStarReverse();

        System.out.println();

//      Number 3
        Scanner inpMarks = new Scanner(System.in);
        System.out.println("3. Number 3 : ");
        System.out.println("Enter the marks : ");
        int numMarks = inp.nextInt();

        Homework obj2 = new Homework();
        obj2.isGradingSystem(numMarks);


    }

    public void checkUppercaseAndLowercase(char check){
        if(Character.isUpperCase(check)){
            System.out.println("This character is Uppercase!");
        } else if (Character.isLowerCase(check)) {
            System.out.println("This character is Lowercase!");
        } else{
            System.out.println("This is not a character!");
        }
    }

    public void printTriangleStarReverse(){
        for(int i = 0 ; i<5 ; i++){
            for (int j = 5-i; j >1 ; j--){
                System.out.print("* ");
            }
            System.out.println();
        }
    }

    public void isGradingSystem(int marks){
        if(marks > 0){
            if(marks >= 90 && marks <= 100){
                System.out.println("congratulations, You in grade A+ !");
            }else if(marks >= 80 && marks < 90){
                System.out.println("You in grade A! ");
            }else if(marks >= 70 && marks < 80){
                System.out.println("You in grade B!");
            }else if(marks >= 60 && marks < 70){
                System.out.println("You in grade C! ");
            }else if(marks >= 50 && marks < 60){
                System.out.println("You in grade D!");
            }else if(marks < 50){
                System.out.println("So sorry, you FAIL");
            }
        }else{
            System.out.println("Marks is less than zero, you have to input greater than zero");
        }
    }
}
