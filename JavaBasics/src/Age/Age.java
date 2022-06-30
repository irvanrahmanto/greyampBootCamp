package Age;

public class Age {
    private int personAge;
    private int wifeAge;
    private int gap;

    public int getPersonAge() {
        return personAge;
    }

    public void setPersonAge(int personAge) {
        this.personAge = personAge;
    }

    public int getGap() {
        return gap;
    }

    public void setGap(int gap) {
        this.gap = gap;
    }

    public Boolean Age(int personAge, int wifeAge){
        int gap = Math.abs(personAge-wifeAge);

        if((personAge >= 50 && wifeAge >= 40) && gap <= 2){
            System.out.println("Eligible to Get bounty prize!");
            return true;
        }else{
            System.out.println("Not!");
            return false;
        }
    }
}
