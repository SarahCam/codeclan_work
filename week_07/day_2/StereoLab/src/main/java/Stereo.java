public class Stereo {

    private String name;
    private Radio radio;
    private RecordPlayer recordPlayer;
    private CDPlayer cdPlayer;

    public Stereo(String name, Radio radio, RecordPlayer recordPlayer, CDPlayer cdPlayer) {
        this.name = name;
        this.radio = radio;
        this.recordPlayer = recordPlayer;
        this.cdPlayer = cdPlayer;
    }

    public String tuneRadio(String station) {
        return radio.tune(station);
    }

    public String playRecord() {
        return recordPlayer.play();
    }

    public String playCD() {
        return cdPlayer.play();
    }
}
