import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Random;

import static spark.Spark.get;

public class SparkIntro {

    public static void main(String[] args) {

        get("/hello", (req, res) -> {
            return "Hello World!";
        });

        // /randomName which returns a random string from an array list of strings.
        get("/randomName", (req, res) -> {
            ArrayList<String> strings = new ArrayList<>();
            strings.add ("hi");
            strings.add ("hey");
            strings.add ("yo");
            strings.add ("WoH");
            strings.add ("EHo");
            Random rand = new Random();
            return strings.get(rand.nextInt(strings.size()));
        });

        get("randomNameToo", (req, res) -> {
            ArrayList<String> strings = new ArrayList<>();
            strings.add ("hi");
            strings.add ("hey");
            strings.add ("yo");
            strings.add ("WoH");
            strings.add ("EHo");
            Collections.shuffle(strings);
            return strings.get(0);
        });

        // :name is a parameter - remember quotes in params()
        get("/hello/:name", (req, res) -> {
            return "Hello " + req.params(":name");
        });

        // replace :number with the string entry in the array and show in viewer
        get("/friends/:number", (req, res) -> {
            String[] friends = {"Jack", "Victor", "Isa", "Winston"};
            int index = Integer.parseInt(req.params(":number"));
            return friends[index];
        });

        // Add :number1 and :number2 and show result in viewer
        get("/add/:number1/:number2", (req, res) -> {
            int number1 = Integer.parseInt(req.params(":number1"));
            int number2 = Integer.parseInt(req.params(":number2"));
            return number1 + number2;
        });

    }

}
