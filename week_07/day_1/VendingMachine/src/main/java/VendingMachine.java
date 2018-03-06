import java.util.HashMap;

public class VendingMachine {
    HashMap<Selection, Tray> products;
    private double cash;
    double credit;

    public VendingMachine(HashMap<Selection, Tray> products, double bank) {
        this.products = products;
        this.cash = bank;
        this.credit = 0;
    }

    public double getCredit() {
        return credit;
    }

    public double getCash() {
        return cash;
    }

    public void addMoney(double amountEntered) {
        credit += amountEntered;
    }

    public double giveRefund() {
        // Figure out much credit there is in the machine
        double credit = this.credit;
        // Reset the credit variable
        this.credit = 0;
        // Return that amount back out of the function
        return credit;
    }

    public int getStockLevelForTray(Selection selection) {
        return products.get(selection).getStockLevel();
    }

    public Product vend(Selection selection) {
        Tray tray = products.get(selection);
        Product product = null;

        // Check credit >= price row
        if(credit >= tray.getPrice()){
            // Check tray has product in stock
            if(tray.getStockLevel() > 0){
                // Get product from tray
                product = tray.ejectProduct();
                // Cash goes up
                cash += tray.getPrice();
                // Credit goes down
                credit -= tray.getPrice();
            }
        }
        return product;
    }
}
