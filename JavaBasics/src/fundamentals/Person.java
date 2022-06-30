package fundamentals;
import java.util.*;

public class Person {
//    Some state = data members



//    some behaviour = member methods = session 2
    private String name;
    private int age;
    private String gender;

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public String getGender() {
        return gender;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    protected String name2;
    protected int age2;
    protected String gender2;
}
