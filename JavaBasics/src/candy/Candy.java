package candy;

public class Candy {

//    Define the properties
    private String name;
    private int price;
    private int quantitiy;

//    Do Overrite for Candy method name, but different parameters
//    Default constructor
    public Candy(){

    }

    public Candy(String name, int price, int quantitiy){
        this.name = name;
        this.price = price;
        this.quantitiy = quantitiy;
    }

//    Define the setter and getter

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getQuantitiy() {
        return quantitiy;
    }

    public void setQuantitiy(int quantitiy) {
        this.quantitiy = quantitiy;
    }
}
