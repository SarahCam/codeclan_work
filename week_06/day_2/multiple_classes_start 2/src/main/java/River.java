import java.util.ArrayList;

public class River {
    private ArrayList<Salmon> stock;

    public River(){
        this.stock = new ArrayList<>();
    }

    public void addFish(Salmon salmon){
        this.stock.add(salmon);
    }

    public int getFishCount(){
        return this.stock.size();
    }

    // Bear can call this river method and then get the fish back as the return value
    public Salmon removeFish(){
        return this.stock.remove(0);    // removes first fish in river, i.e. index 0
    }
}
