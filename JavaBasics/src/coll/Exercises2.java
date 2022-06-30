package coll;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class Exercises2 {
    public static void main(String[] args) {

//        Number 1
        ArrayList<String> num = new ArrayList<>();

//        Insert
        num.add("Halo");
        num.add("Bandung");
        num.add("Jakarta");
        num.add("Mumbai");

        String x = "Jakarta";
//        System.out.println(num.get(3));
        if(num.contains("Bandung")){
            System.out.println("Find the element at "+ num.indexOf(x));
        }else{
            System.out.println("There is no such element!");
        }

        System.out.println();

//        Number 2
        Map<Integer, String> num2 = new HashMap();

        //      Insert
        num2.put(1, "Irvan");
        num2.put(2, "Naufali");
        num2.put(3, "Rahmanto");
        num2.put(4, "Jakarta");
        num2.put(6, "90");

//        Cara 1
//        System.out.println(num2.get(3));


//        Cara 2
        String val = null;
        for (Integer key : num2.keySet()) {

        }
        val = (String) num.get(3);
        System.out.println("Value for key 3 is: " + val);

//        Cara 3
//        for(Map.Entry<Integer, String> irv : num2.entrySet()){
//            String val = null;
//            for (Integer key : num2.keySet()){
//
//            }
//            val = (String) num.get(3);
//            System.out.println("Value for key 3 is: " + val);
//        }
    }
}
