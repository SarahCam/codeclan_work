public class Bear {
    private String name;
    private int age;
    private double weight;

    // Initialize - constructor - properties are private (encapsulation)
    public Bear(String name, int age, double weight){
        this.name = name;
        this.age = age;
        this.weight = weight;
    }

//   // Getter - to get a property value outside of this class
//    public String getName(){
//        return this.name;
//    }
//
//    // Setter - to set a property value outside of this class
//    public void setName(String name){
//        this.name = name;
//    }
//
//    public int getAge(){
//        return this.age;
//    }


// AUTO-GENERATED USING cmd + N - select Getter and Setter
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public double getWeight(){
        return weight;
    }

    public boolean readyToHibernate(){
//        if (this.weight > 80) {
//            return true;
//        }
//        return false;
        return this.weight > 80;
    }
}
