public class Planet {

    private String name;
    private int size;

    public Planet(String name, int size){
        this.name = name;
        this.size = size;
    }

    public String getName(){
        return this.name;
    }

    public int getSize(){
        return this.size;
    }

    public String explode(){
     // return "Boom! " + this.name + " has exploded.";
        return String.format("Boom! %s has exploded because its size is now %d.", this.name, this.size);
    }

}
