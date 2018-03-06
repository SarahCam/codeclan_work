import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class InterfacesTest {

    Printer printer;
    Mouse mouse;

    @Before
    public void before() {

        printer = new Printer();
        mouse = new Mouse();
    }

    @Test
    public void testPrinterCanConnect() {

    }

    @Test
    public void testCanPrint() {
        assertEquals("Printing: Stuff", printer.print("Stuff"));
    }


}
