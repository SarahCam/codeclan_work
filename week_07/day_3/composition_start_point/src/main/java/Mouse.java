import behaviours.IInput;
import device_management.ConnectionType;
import device_management.InputDevice;

public class Mouse extends InputDevice implements IInput {

    private int buttons;

    public Mouse(ConnectionType connection, int buttons) {
        super(connection);
        this.buttons = buttons;
    }

    public int getNumberButtons() {
        return buttons;
    }

    public String move() {
        return "Moved mouse";
    }

    public String click() {
        return "Clicked mouse";
    }

    @Override
    public String sendData(String data) {
        return "Sent mouse command to computer: " + data;
    }
}
