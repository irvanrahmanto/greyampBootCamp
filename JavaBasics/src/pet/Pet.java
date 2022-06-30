package pet;

public class Pet {
    private int age;
    private int height;
    private int weight;
    private String color;
    private String name;

//    Default Constructor
    public Pet(){

    }

//    Parameterized constructor
//    public Pet(String name, int age, int height, int weight, String color){
//        this.name = name;
//        this.age = age;
//        this.height = height;
//        this.weight = weight;
//        this.color = color;
//    }

    public Pet(String name){
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void eat(){
        System.out.println("This is eat");
    }

    public void sleepy(){
        System.out.println("Let's go sleep");
    }

    public void say(String word){
        System.out.println(word);
    }

    public boolean isCheckSameName(Pet pet){
        if(this.getName() == pet.getName()){
            System.out.println("Both pets have same name!");
            return true;
        }else{
            System.out.println("Both pets do not have same name!");
            return false;
        }
    }
}
