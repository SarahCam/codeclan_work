public class CDPlayer extends Component implements IPlay {

    private int maxCDs;

    public CDPlayer(int maxCDs, String make, String model) {
        super(make, model);
        this.maxCDs = maxCDs;
    }

    public int getMaxCDs() {
        return maxCDs;
    }

    @Override
    public String play() {
        return "Playing: CD";
    }
}
