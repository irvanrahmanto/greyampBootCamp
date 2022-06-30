package coll;

import java.util.HashMap;
import java.util.Map;

public class HashMap2 {
    public static void main(String[] args) {

        Map<Integer, String> num = new HashMap<>();

        //Insert
        num.put(1, "kalvin");
        num.put(2, "alan");
        num.put(3, "Martin");
        num.put(4, "Irvan");


        String val = null;
        for (Integer key : num.keySet()) {

        }
        val = (String) num.get(3);
        System.out.println("Value for key 3 is: " + val);

    }
}
