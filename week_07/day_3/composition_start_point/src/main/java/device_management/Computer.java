package device_management;

import behaviours.IInput;
import behaviours.IOutput;

public class Computer {
    private int ram;
    private int hddSize;
    private String dataStream;

//    private Monitor monitor;
    private IOutput outputDevice;

    private IInput inputDevice;

    public Computer(int ram, int hddSize, IInput inputDevice, IOutput outputDevice) {
        this.ram = ram;
        this.hddSize = hddSize;
        this.inputDevice = inputDevice;
        this.outputDevice = outputDevice;
        this.dataStream = null;
    }

    public int getRam() {
        return this.ram;
    }

    public int getHddSize() {
        return this.hddSize;
    }

    public IOutput getOutputDevice() {
        return this.outputDevice;
    }

    public String outputData(String data) {
        return this.outputDevice.outputData(data);
    }

    public void setOutputDevice(IOutput outputDevice){
        this.outputDevice = outputDevice;
    }

    public void setInputDevice(IInput inputDevice) {
        this.inputDevice = inputDevice;
    }

    public String inputData(String data) {
        this.dataStream = data;
        return this.inputDevice.sendData(data);
    }

    public String getDataStream() {
        return dataStream;
    }

    public String outputDataStream(String dataStream) {
        return outputDevice.outputData(this.dataStream);
    }
}
