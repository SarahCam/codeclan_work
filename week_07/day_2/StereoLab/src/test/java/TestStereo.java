import com.sun.prism.impl.Disposer;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class TestStereo {

    private Radio radio;
    private RecordPlayer recordPlayer;
    private CDPlayer cdPlayer;
    private CassetteDeck cassetteDeck;
    private Stereo stereo;
    private MP3 mp3;

    @Before
    public void setUp() throws Exception {
        radio = new Radio("Sony", "ABC");
        recordPlayer = new RecordPlayer(33, "Toshiba", "ZZZ");
        cdPlayer = new CDPlayer(5, "Sanyo", "BBB");
        cassetteDeck = new CassetteDeck("Samsung", "AAA");
        stereo = new Stereo("Big Stereo", radio, recordPlayer, cdPlayer);
        mp3 = new MP3();
    }

    @Test
    public void testCanTune() {
        assertEquals("Tuned to: Radio 1", radio.tune("Radio 1"));
    }

    @Test
    public void testCanGetGetRecordSpeed() {
        assertEquals(33, recordPlayer.getSpeed());
    }

    @Test
    public void testCanGetMaxCDs() {
        assertEquals(5, cdPlayer.getMaxCDs());
    }

    @Test
    public void testCanGetMake___Radio() {
        assertEquals("Sony", radio.getMake());
    }

    @Test
    public void testCanGetModel___Radio() {
        assertEquals("ABC", radio.getModel());
    }

    @Test
    public void testCanGetMake___RecordPlayer() {
        assertEquals("Toshiba", recordPlayer.getMake());
    }

    @Test
    public void testCanGetModel___RecordPlayer() {
        assertEquals("ZZZ", recordPlayer.getModel());
    }

    @Test
    public void testCanGetMake___CDPlayer() {
        assertEquals("Sanyo", cdPlayer.getMake());
    }

    @Test
    public void testCanGetModel___CDPlayer() {
        assertEquals("BBB", cdPlayer.getModel());
    }

    @Test
    public void testCanGetMake___CassetteDeck() {
        assertEquals("Samsung", cassetteDeck.getMake());
    }

    @Test
    public void testCanGetModel___CassetteDeck() {
        assertEquals("AAA", cassetteDeck.getModel());
    }

    @Test
    public void testCanPlay___RecordPlayer() {
        assertEquals("Playing: Record", recordPlayer.play());
    }

    @Test
    public void testCanPlay___CDPlayer() {
        assertEquals("Playing: CD", cdPlayer.play());
    }

    @Test
    public void testCanTuneRadio___FromStereo() {
        assertEquals("Tuned to: Capital", stereo.tuneRadio("Capital"));
    }

    @Test
    public void testCanPlayRecordPlayer___FromStereo() {
        assertEquals("Playing: Record", stereo.playRecord());
    }

    @Test
    public void testCanPlayCDPlayer___FromStereo() {
        assertEquals("Playing: CD", stereo.playCD());
    }

    @Test
    public void testCanConnectMP3___ToStereo() {
        assertEquals("Connected: MP3", mp3.connect(stereo));
    }
}
