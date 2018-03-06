public class RecordPlayer extends Component implements IPlay {

    private int speed;

    public RecordPlayer(int speed, String make, String model) {
        super(make, model);
        this.speed = speed;
    }

    public int getSpeed() {
        return speed;
    }

    @Override
    public String play() {
        return "Playing: Record";
    }
}
