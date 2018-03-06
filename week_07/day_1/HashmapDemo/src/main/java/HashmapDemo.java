import java.util.HashMap;

public class HashmapDemo {
    public static void main(String[] args) {
        System.out.println("Hello world!");

        HashMap<String, String> favouriteFruits = new HashMap<>();
        favouriteFruits.put("John", "pineapple");
        favouriteFruits.put("Emma", "banana");
        favouriteFruits.put("Ellie", "blueberry");

        System.out.println(favouriteFruits.get("Emma"));

        HashMap<String, Integer> peopleAge = new HashMap<>();
        peopleAge.put("Sarah", 20);
        peopleAge.put("Emily", 12);
        peopleAge.put("Maisie", 15);

        System.out.println(peopleAge.get("Maisie"));
    }
}
