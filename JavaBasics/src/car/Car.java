package car;

public class Car {
    private String name;
    private String color;
    private int numberOfSeat;

    public Car(){}

    public Car(String name, String color, int numberOfSeat){
        this.name=name;
        this.color=color;
        this.numberOfSeat=numberOfSeat;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public int getNumberOfSeat() {
        return numberOfSeat;
    }

    public void setNumberOfSeat(int numberOfSeat) {
        this.numberOfSeat = numberOfSeat;
    }

    public void start(){
        System.out.println("Start the car!");
    }

    public void stop(){
        System.out.println("stop the car!");
    }

    public int drive(int time){
        int totalDistance;
        totalDistance = time * 60;

        return totalDistance;
    }
}
