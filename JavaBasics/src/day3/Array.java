package day3;

public class Array {
//    Syntax: var-name = new type [size]
//    int intArray[]; // declaring array
//    intArray = new int[20] // allocating memory to array atau size array nya
//    int[] intArray = new int[]{1,2,3,4,5}

//    Array of Number
//    Number[0]
//    number[6]

    public static void main(String[] args) {
        String myArray[];
        myArray = new String[5];


        myArray[0] = "Irvan";
        myArray[1] = "Naufali";
//        myArray[1] = "Rahmanto";

//        Array of String
        String[] strAr1 = new String[] {
                "Ani", "Sam", "Joe"
        };

//        Array of Integer
        int[] strInt1 = new int[] {
                1,2,3,4,5
        };

        System.out.println(myArray[0]);
        System.out.println(myArray[1]);

//        Print value of array of string
        System.out.println(strAr1[2]);

//        print value of array of integer
        System.out.println(strInt1[0]);
    }

}
