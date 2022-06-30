package interest;

public class Interest {
    private int principle;
    private int rate;
    private int time;

//    Default constructor
    public Interest(){}

//    Parameterized constructor
    public Interest(int principle, int rate, int time){
        this.principle=principle;
        this.rate=rate;
        this.time=time;
    }

    public int countInterest(int principle, int rate, int time){
        int result = ((principle * rate * time) / 100);
        return result;
    }
}
