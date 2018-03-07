import behaviours.IInput;
import device_management.ConnectionType;
import device_management.InputDevice;

public class Keyboard extends InputDevice implements IInput {
    public Keyboard(ConnectionType connection) {
        super(connection);
    }

    public String type(String words) {
        return "Typing words: " + words;
    }

    @Override
    public String sendData(String data) {
        return "Sent keyboard words to computer: " + data;
    }
}
