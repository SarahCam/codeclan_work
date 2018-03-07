import behaviours.IOutput;
import device_management.*;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

public class ComputerTest {
    Computer computer;
    Monitor monitor;
    Keyboard keyboard;

    @Before
    public void before() {
        monitor = new Monitor(22, 786432);
        keyboard = new Keyboard(ConnectionType.WIRELESS);
        computer = new Computer(8, 512, keyboard, monitor);
    }

    @Test
    public void hasRam() {
        assertEquals(8, computer.getRam());
    }

    @Test
    public void hasHddSize() {
        assertEquals(512, computer.getHddSize());
    }

    @Test
    public void hasOutputDevice() {
        IOutput outputDevice = computer.getOutputDevice();
        assertNotNull(outputDevice);
//        assertEquals(22, computer.getMonitor().getScreenSize());
//        assertEquals(786432, computer.getMonitor().getPixels());
    }

    @Test
    public void canOutputData() {
        assertEquals("space invaders is now on screen", computer.outputData("space invaders"));
    }

    @Test
    public void canOutputDataViaPrinter() {
        Printer printer = new Printer("Epson", "Stylus", 120, 4);
        Keyboard keyboard = new Keyboard(ConnectionType.WIRELESS);
        Computer computer2 = new Computer(8, 512, keyboard, printer);
        assertEquals("printing: space invaders", computer2.outputData("space invaders"));
    }

    @Test
    public void canOutputDataViaSpeaker() {
        Speaker speaker = new Speaker(100);
        Keyboard keyboard = new Keyboard(ConnectionType.WIRELESS);
        Computer computer2 = new Computer(8, 512, keyboard, speaker);
        assertEquals("playing: beep!", computer2.outputData("beep!"));
    }

    @Test
    public void canSetOutputDevice() {
        Printer printer = new Printer("Epson", "Stylus", 120, 4);
        computer.setOutputDevice(printer);
        assertEquals("printing: space invaders", computer.outputData("space invaders"));
    }

    @Test
    public void canSendDataViaMouse() {
        Mouse mouse = new Mouse(ConnectionType.CORDED, 3);
        computer.setInputDevice(mouse);
        assertEquals("Sent mouse command to computer: DELETE COMMAND", computer.inputData("DELETE COMMAND"));
    }

    @Test
    public void canSendDataViaKeyboard() {
        Keyboard keyboard = new Keyboard(ConnectionType.WIRELESS);
        computer.setInputDevice(keyboard);
        assertEquals("Sent keyboard words to computer: hey", computer.inputData("hey"));
    }

    @Test
    public void canSendDataViaKeyboardAndSaveToDataStream() {
        Keyboard keyboard = new Keyboard(ConnectionType.WIRELESS);
        computer.setInputDevice(keyboard);
        assertEquals("Sent keyboard words to computer: hey", computer.inputData("hey"));
        assertEquals("hey",computer.getDataStream());
    }

    @Test
    public void canSendDataViaMouseAndSaveToDataStream() {
        Mouse mouse = new Mouse(ConnectionType.WIRELESS, 3);
        computer.setInputDevice(mouse);
        assertEquals("Sent mouse command to computer: DELETE COMMAND", computer.inputData("DELETE COMMAND"));
        assertEquals("DELETE COMMAND",computer.getDataStream());
    }

//    @Test
//    public void canOutputDataStreamToOutputDevice() {
//        // Instantiate new mouse
//        Mouse mouse = new Mouse(ConnectionType.WIRELESS, 3);
//        // Make mouse a generic IInput device
//        computer.setInputDevice(mouse);
//        // Get input data
//        computer.inputData("DELETE COMMAND");
//        // Instantiate new printer
//        Printer printer = new Printer("Epson", "Stylus", 120, 4);
//        // Make printer a generic IOutput device
//        computer.setOutputDevice(printer);
//        // Output IOutput output data to IInput input data
//        assertEquals("DELETE COMMAND", computer.outputDataStream(computer.inputData("DELETE COMMAND")));
//    }

    @Test
    public void canOutputDataStreamToOutputDevice() {
        String input = keyboard.sendData("X");
        String output = computer.inputData(input);
        assertEquals("Sent keyboard words to computer: X is now on screen", computer.outputDataStream(output));
    }

    @Test
    public void canOutputDataStreamToOutputDevice_PRINTER() {
        Printer printer = new Printer("Epson", "Stylus", 120, 4);
        Keyboard keyboard = new Keyboard(ConnectionType.WIRELESS);
        Computer computer = new Computer(8, 512, keyboard, printer);
        String input = keyboard.sendData("X");
        String output = computer.inputData(input);
        assertEquals("printing: Sent keyboard words to computer: X", computer.outputDataStream(output));
    }


}
