import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class InternetRadioTest {

    private InternetRadio internetRadio;

    @Before
    public void setUp() throws Exception {
        internetRadio = new InternetRadio();
    }


    @Test
    public void canConnect() {
        assertEquals("Connecting to network: Codeclan", internetRadio.connect("Codeclan"));
    }

    @Test
    public void canTune___to_station() {
        assertEquals("Tuned to station: Capital", internetRadio.tune("Capital"));
    }
}
