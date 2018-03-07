package device_management;

public abstract class InputDevice {

    private ConnectionType connection;

    public InputDevice(ConnectionType connection) {
        this.connection = connection;
    }

    public ConnectionType getConnectionType() {
        return connection;
    }
}
