public class Printer implements iPeripheral, iPrint {


    @Override
    public String connect() {
        return "connected";
    }

    @Override
    public String print(String data) {
        return "Printing: " + data;
    }
}
