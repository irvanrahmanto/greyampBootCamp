package pet;

public class Fish extends Pet{
    int currentDepth = 0;

    public int dive(int howDeep){
        currentDepth += currentDepth + howDeep;
        return currentDepth;
    }

    @Override
    public void say(String word){
        System.out.println("Fish don't speak!");
    }
}
