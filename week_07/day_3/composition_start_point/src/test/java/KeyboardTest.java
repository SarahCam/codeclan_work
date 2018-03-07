import device_management.ConnectionType;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class KeyboardTest {

    private Keyboard keyboard;

    @Before
    public void setUp() throws Exception {
        keyboard = new Keyboard(ConnectionType.WIRELESS);
    }

    @Test
    public void canGetConnectionType() {
        assertEquals(ConnectionType.WIRELESS, keyboard.getConnectionType());
    }

    @Test
    public void canTypeWords() {
        assertEquals("Typing words: hiya", keyboard.type("hiya"));
    }

    @Test
    public void canSendDataToComputer() {
        assertEquals("Sent keyboard words to computer: hiya", keyboard.sendData("hiya"));
    }
}
