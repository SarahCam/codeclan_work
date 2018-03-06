import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class NetworkTest {

    Network network;
    Desktop desktop;
    Printer printer;

    @Before
    public void before() {
        network = new Network("CodeClan", 2);
        desktop = new Desktop("Keith's Desktop", "Apple", "Macbook Pro");
        printer = new Printer();
    }

    @Test
    public void hasName(){
        assertEquals("CodeClan", network.getName());
    }

    @Test
    public void deviceListStartsEmpty() {
        assertEquals(0, network.deviceCount());
    }

    @Test
    public void canConnectDesktop() {
        network.connect(desktop);
        assertEquals(1, network.deviceCount());
    }

    @Test
    public void shouldEmptyDeviceListAfterDisconnectingAll() {
        network.connect(desktop);
        network.disconnectAll();
        assertEquals(0, network.deviceCount());
    }

    @Test
    public void canConnectToPrinter() {
        network.connect(printer);
        assertEquals(1, network.deviceCount());
    }

    @Test
    public void canGetMaxNumberConnections() {
        assertEquals(2, network.getMaxConnections());
    }

    @Test
    public void canGetFreeConnections() {
        assertEquals(2, network.getFreeConnections());
        network.connect(printer);
        assertEquals(1, network.getFreeConnections());

    }

    @Test
    public void canGetFreeConnections__PREVENT_EXCEEDING_MAX_CONNECTIONS() {
        assertEquals(2, network.getFreeConnections());
        network.connect(printer);
        network.connect(printer);
        network.connect(printer);
        assertEquals(0, network.getFreeConnections());
    }
}
