package car;

public class CarOwner {

    public static void main(String[] args) {
        Car myCar = new Car();
        myCar.start();
        myCar.stop();
        int x = myCar.drive(10);
        System.out.println("Result from the formula is: "+x);

        SportsCar myCar2 = new SportsCar();
        myCar2.start();
        myCar2.stop();
        int y = myCar2.drive(20);
        System.out.println("Result formula from the Sports Car is "+y);
    }

}
