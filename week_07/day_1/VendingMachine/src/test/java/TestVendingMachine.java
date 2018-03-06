import org.junit.Before;
import org.junit.Test;

import java.util.HashMap;

import static org.junit.Assert.assertEquals;

public class TestVendingMachine {

    private VendingMachine vendingMachine;

    @Before
    public void setUp() throws Exception {
        HashMap<Selection, Tray> products = new HashMap<>();

        for(Selection selection : Selection.values()){          // 4 trays full of 5 tubes of refreshers!
            Tray tray = new Tray(0.50, 10);
            for(int i = 0; i < 5; i++){
                Sweet refreshers = new Sweet("refreshers", 10);
                tray.addItem(refreshers);
            }
            products.put(selection, tray);
        }

        vendingMachine = new VendingMachine(products, 10.00);
    }

    // Check that added coins add to credit

    @Test
    public void testCoinsAddToCredit() {
        vendingMachine.addMoney(0.50);

        assertEquals(0.5, vendingMachine.getCredit(), 0.01);
        assertEquals(10.00, vendingMachine.getCash(), 0.01);
    }

    @Test
    public void testCanGiveRefund() {
        vendingMachine.addMoney(1.50);
        double refunded = vendingMachine.giveRefund();

        assertEquals(0.00, vendingMachine.getCredit(), 0.01);
        assertEquals(1.50, refunded, 0.01);
        assertEquals(10.00, vendingMachine.getCash(), 0.01);
    }

    @Test
    public void testStockLevelOfTray() {
        assertEquals(5, vendingMachine.getStockLevelForTray(Selection.A1));
    }

    @Test
    public void testVendingMachineVends___ExactChange() {
        vendingMachine.addMoney(0.50);

        Product product = vendingMachine.vend(Selection.A1);

        assertEquals(4, vendingMachine.getStockLevelForTray(Selection.A1));
        assertEquals(10.50, vendingMachine.getCash(), 0.01);
        assertEquals(0.00, vendingMachine.getCredit(), 0.01);

//        assert(product instanceof Sweet);               // Returns true if the product is a Sweet... or...
        assertEquals("refreshers", product.getName());  // Another way to check we have something back...
    }

    @Test
    public void testVendingMachineVends___InExactChange() {
        vendingMachine.addMoney(1.00);

        Product product = vendingMachine.vend(Selection.A1);

        assertEquals(4, vendingMachine.getStockLevelForTray(Selection.A1));
        assertEquals(10.50, vendingMachine.getCash(), 0.01);
        assertEquals(0.50, vendingMachine.getCredit(), 0.01);

        assertEquals("refreshers", product.getName());  // Another way to check we have something back...
    }

    @Test
    public void testCustomerRetainsCreditWhenOutOfStock() {
        vendingMachine.addMoney(10.00);
        for(int i = 0; i < 10; i++){
            vendingMachine.vend(Selection.A1);
        }

        assertEquals(7.50, vendingMachine.getCredit(), 0.01);
    }
}
