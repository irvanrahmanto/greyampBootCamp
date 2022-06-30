package car;

public class SportsCar extends Car {
    @Override
    public int drive(int time){
        int totalDistance;
//        int time = 10;
        totalDistance = time * 100;

        return totalDistance;
    }
}
