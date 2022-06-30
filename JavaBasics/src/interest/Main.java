package interest;

public class Main {
    public static void main(String[] args) {
//        Define the new object
        Interest x = new Interest();

//        Call the method from class
//        x.countInterest();
        int calculateInterest = x.countInterest(13000,12,20);
        System.out.println("Result for the Interest is : ");
        System.out.println(calculateInterest);
    }
}
