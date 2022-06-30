package coll;

import java.util.HashMap;
import java.util.Map;

public class LearnHashMap {
    public static void main(String[] args) {
        Map<Integer, String> num = new HashMap();

//      Insert
        num.put(1, "Irvan");
        num.put(2, "Naufali");
        num.put(3, "Rahmanto");
        num.put(4, "Siraj");
        num.put(6, "90");

//      Print
//        System.out.println(num);


/*
//      How to use iterator on HashMap
        for(Map.Entry<Integer, String> e : num.entrySet()){
//            Print all
            System.out.println(e);

//            Print the key only
//            System.out.println(e.getKey());

//            Print the value only
//            System.out.println(e.getValue());
        }
*/

//        How to fetch
        for (Integer key : num.keySet()){
            System.out.println(key);
        }

        for(String val : num.values()){
            System.out.println(val);
        }



    }

    void IrvanR(){
        int age=20;
        String Name="Irvan";
    }
}
