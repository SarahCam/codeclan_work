import device_management.ConnectionType;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class MouseTest {

    Mouse mouse;

    @Before
    public void setUp() throws Exception {
        mouse = new Mouse(ConnectionType.WIRELESS, 3);
    }

    @Test
    public void canGetConnectionType() {
        assertEquals(ConnectionType.WIRELESS, mouse.getConnectionType());
    }

    @Test
    public void canGetNumberButtons() {
        assertEquals(3, mouse.getNumberButtons());
    }

    @Test
    public void canMove() {
        assertEquals("Moved mouse", mouse.move());
    }

    @Test
    public void canClick() {
        assertEquals("Clicked mouse", mouse.click());
    }

    @Test
    public void canSendDataToComputer() {
        assertEquals("Sent mouse command to computer: GO TO HOME PAGE", mouse.sendData("GO TO HOME PAGE"));
    }
}
