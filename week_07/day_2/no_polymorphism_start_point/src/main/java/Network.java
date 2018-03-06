import java.util.*;

public class Network {
    private String name;
    private ArrayList<IConnect> devices;
    private int maxConnections;

    public Network(String name, int maxConnections){
        this.devices = new ArrayList<>();
        this.name = name;
        this.maxConnections = maxConnections;
    }

    public String getName(){
        return name;
    }

    public int deviceCount(){
        return devices.size();
    }

    public void connect(IConnect device){
        if (getFreeConnections() > 0) {
            devices.add(device);
        }
    }

    public void disconnectAll(){
        devices.clear();
    }

    public int getMaxConnections() {
        return maxConnections;
    }

    public int getFreeConnections() {
        return maxConnections - devices.size();
    }
}