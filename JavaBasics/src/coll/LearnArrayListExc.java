package coll;

import java.util.ArrayList;
import java.util.Scanner;

public class LearnArrayListExc {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        //int arr[] = new int[5];
        int arr[] = {1,2,3,4,5}; //perbedaan array list dan array biasa, arraylist lebih dinamis karena bisa ganti2 value nya
        for (int i =0; i<arr.length ; i++){
            System.out.println(arr[i]);
        }

        //int(Primitive Class) vs Integer(Wrapper Classes) ->which wraps a primitive type int into an object

        //ArrayList
        ArrayList<Integer> num = new ArrayList<>();
        ArrayList<Integer> newList = new ArrayList<>();
        //to add elements in ArrayList
        num.add(1);
        num.add(4);
        num.add(5);
        num.add(56);
        num.add(87);
        num.add(87);

        //insert any element at any specific index
        num.add(6,28);
        num.add(1,32);

        //adding 1 list to another list
        num.addAll(newList);

        //to get any value for specific indedx
        System.out.println(num.get(3));
        System.out.println(num);

        //remove the items from the list, u cant remove by the element, u should call the index
        num.remove(2); //removeAll untuk hapus multiple element
        System.out.println(num);

        //clear whole arrayList
        num.clear();
        System.out.println(num);


        //Assignment
        //Take user input of first 5 multiple of 5
        //arr = {5,10,15,20,25};
        //print arr = {0,10,0,20,0}
    }
}
