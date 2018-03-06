import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class PrinterTest {

    private Printer printer;

    @Before
    public void setUp() throws Exception {
        printer = new Printer();
    }

    @Test
    public void canPrint() {
        assertEquals("printing: hello world", printer.print("hello world"));
    }

    @Test
    public void canConnect() {
        assertEquals("Connecting to network: Codeclan", printer.connect("Codeclan"));
    }
}
