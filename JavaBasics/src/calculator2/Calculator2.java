package calculator2;

public class Calculator2 {
    private int value1;
    private int value2;
    private int value3;

    private String name;

//    Constructor
    public Calculator2(){
        System.out.println("Default Constructor called");
    }

    public Calculator2(int value1, int value2, int value3, String name){
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
        this.name = name;
    }

    public int getValue1() {
        return value1;
    }

    public void setValue1(int value1) {
        this.value1 = value1;
    }

    public int getValue2() {
        return value2;
    }

    public void setValue2(int value2) {
        this.value2 = value2;
    }

    public int getValue3() {
        return value3;
    }

    public void setValue3(int value3) {
        this.value3 = value3;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int calculatex(int value1, int value2, int value3){
        int result = value1*value2*value3;
        return result;
    }
}
