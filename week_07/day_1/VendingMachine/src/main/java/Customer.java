import java.util.ArrayList;

public class Customer {
    private String name;
    private double cash;
    private ArrayList<Product> inventory;

    public Customer(String name, double cash) {
        this.name = name;
        this.cash = cash;
        this.inventory = new ArrayList<Product>();
    }

    public String getName() {
        return name;
    }

    public double getCash() {
        return cash;
    }

    public int getInventorySize() {
        return inventory.size();
    }
}
