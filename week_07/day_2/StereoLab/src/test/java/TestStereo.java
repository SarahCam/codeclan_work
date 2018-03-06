import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class TestStereo {

    private Radio radio;

    @Before
    public void setUp() throws Exception {
        radio = new Radio();
    }

    @Test
    public void canTune() {
        assertEquals("Tuned to: Radio 1", radio.tune("Radio 1"));
    }

}
