public class InternetRadio implements IConnect {

    @Override
    public String connect(String data) {
        return "Connecting to network: " + data;
    }

    public String tune(String station) {
        return "Tuned to station: " + station;
    }
}
