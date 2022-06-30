package pet;

public class PetMaster {
    public static void main(String[] args) {
        Pet myPet1 = new Pet("John");
        Pet myPet2 = new Pet("henry");

        myPet1.isCheckSameName(myPet2);

        Dog myDog = new Dog();
        myDog.eat();
        myDog.sleepy();
        myDog.say("wuff wuff");

        Fish myFish = new Fish();
        myFish.eat();
        myFish.sleepy();
        myFish.say("bluk bluk blluk");
        System.out.println("I am at "+myFish.dive(3)+" ft deep!");
        System.out.println("I am at "+myFish.dive(5)+" ft deep!");

    }
}
