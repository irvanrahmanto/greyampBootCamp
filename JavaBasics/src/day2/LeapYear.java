package day2;

public class LeapYear {

    public static void main(String[] args) {

//      Number 1
        int year = 2000;
        LeapYear lp = new LeapYear();
        System.out.println("Exercises 1 answer : "+lp.isLeapYear(year));


//      Number 2
        int inp = 10;
        int inp2 = 90;
        int inp3 = 30;

        int a = isGreatestNumber(inp, inp2, inp3);
        System.out.println("Exercises 2 answer : "+a);

//      Number 3
        System.out.println();
        System.out.println("Exercises 3 answer : ");
        lp.whichMonth(3);
        System.out.println();

//      Number 4
        System.out.println();
        System.out.println("Exercises 4 answer : ");
        lp.switchCase(1);
        System.out.println();
    }

    private boolean isLeapYear(int year){

        if(year % 4 == 0 && year % 100 !=0 || (year % 400 == 0)){
            return true;
        }
        return false;
    }

    public static int isGreatestNumber(int inp, int inp2, int inp3){
        if(inp > inp2 && inp > inp3){
            return inp;
        }else if(inp2 > inp && inp2 > inp3){
            return inp2;
        }else{
            return inp3;
        }
    }

    private void whichMonth(int month){
        switch(month){
            case 1:
            {
                System.out.println("Januray");
                break;
            }
            case 2:
            {
                System.out.println("February");
                break;
            }
            case 3:
            {
                System.out.println("March");
                break;
            }
            case 4:
            {
                System.out.println("April");
                break;
            }
            default:
            {
                System.out.println("After April");
            }
        }
    }

    private void switchCase(int vari){
        switch (vari){
            case 1:
                System.out.println("good");
//                break;
            case 2:
                System.out.println("Better");
//                break;
            case 3:
                System.out.println("Best");
//                break;
            default:
                System.out.println("Invalid");
//                break;
        }
    }

}
