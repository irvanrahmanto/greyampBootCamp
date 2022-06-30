package looping;
import java.util.Scanner;


public class ForLoop {
    public static void main(String[] args) {

//        Number 1
        for(int i=1; i<=10; i++){
            System.out.println("Number 1 Answer : ");
            System.out.println("Roll number = " +i);
        }

//        Number 2
        int sum = 0;
        System.out.println("Number 2 Answer : ");
        for(int i=1; i<=10; i++){
            sum += i;
            System.out.println("The count = "+i);
        }
        System.out.println("Natural number : "+sum);

//        Number 3
        Scanner inp = new Scanner(System.in);
        System.out.println("Enter the number : ");
        int num = inp.nextInt();

        ForLoop obj = new ForLoop();
        obj.isMultiple(num);

//        Number 4
        for (int i=1; i<5; i++){
            for (int j=1; j<=5; j++){
                System.out.println("i = "+i + " " + " j ="+j);
            }
        }

//        Number 5

//        Scanner inp = new Scanner(System.in);
//        System.out.println("Enter the number of rows : ");
//        int sc = inp.nextInt();

//        int sc = 4;

//        for (int i=1; i<=sc; i++){
//            for (int j=1; j<=i; j++){
//                System.out.print("* ");
//            }
//            System.out.println();
//        }

//        int i=0;
//        int sum= 0;
//
//        while(i <= 10){
//            System.out.println("haha"+ i);
//            i++;
//        }

//        do{
//            System.out.println(sum);
//        }while(i == 10);

        //        Number 6
//        Scanner inp2 = new Scanner(System.in);
//        System.out.println("Enter the number : ");
//        int num2 = inp2.nextInt();
//
//        ForLoop obj = new ForLoop();
//        obj.isMultiple2(num2);

//        Number 7
        for (int i=1; i<=5; i++){
            if(i==2)
                break;
            else
                System.out.println(i);
        }

//        Number 8 - break
        for (int i=1; i<=5; i++){
            for(int j=1; j<=5; j++){
                if(j == 2)
                    break; //it will be stop
//                    continue; // it will be skip
                else
                    System.out.println(i+ " "+j);
            }
        }

//        Number 9 - continue
        for (int i=1; i<=5; i++){
            if(i == 4)
                continue;
            else
                System.out.println(i);
        }

    }

//    Method for checking condition! using FOR looping!
    void isMultiple(int num){
        if(num > 0){
            for (int i=1; i<10; i++){
                System.out.println(num+ " = "+i +"=" + (num*i));
            }
        }else{
            System.out.println("Invalid !! number is negative");
        }
    }

//    using While looping!
    void isMultiple2(int num){
        if(num > 0){
            int i = 0;
            while(i<10){
                System.out.println(num+ " x "+ i + " = "+ (num*i));
                i++;
            }
        }
    }

//    using do while looping!
    void isMultiple3(int num){
        if(num > 0){
            int i=0;
            do{
                System.out.println(num+ " x "+ i + " = "+ (num*i));
                i++;
            }while(i<10);
        }
    }
}
