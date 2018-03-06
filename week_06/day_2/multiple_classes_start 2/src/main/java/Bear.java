import java.util.ArrayList;

public class Bear {
    private String name;
    private ArrayList<Salmon> belly;             // make sure we are visible in whole class

    public Bear(String name){
        this.name = name;
        this.belly = new ArrayList<Salmon>();    // create new empty bear belly
    }

    // get the number of fish in bear's belly
    public int bellySize(){
        return this.belly.size();
    }

    // bear eats 1 salmon
    public void eat(River river){
        Salmon salmon = river.removeFish();
        this.belly.add(salmon);
    }

    // empty fish from bear's belly
    public void shitInWoods(){
        this.belly.clear();
    }

}