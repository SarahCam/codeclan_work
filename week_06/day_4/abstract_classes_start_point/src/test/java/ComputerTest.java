import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class ComputerTest {

    DesktopComputer desktop;
    LaptopComputer laptop;

    @Before
    public void before() {

        desktop = new DesktopComputer();
        laptop = new LaptopComputer();
//        computer = new Computer();   // THIS CLASS IS ABSTRACT SO CANNOT BE INSTANTIATED!
    }

    @Test
    public void desktopCanRunApplication(){
        assertEquals("CC Caraoke Status: I am running CC Caraoke", desktop.runApplication("CC Caraoke"));
    }

    @Test
    public void laptopCanRunApplication() {
        assertEquals("CC Caraoke Status: Program CC Caraoke is running", laptop.runApplication("CC Caraoke"));
    }

    @Test
    public void desktopCanCloseApplication() { // NEW TEST
        assertEquals("I am closing down CC Caraoke", desktop.closeApplication("CC Caraoke"));
    }

    @Test
    public void laptopCanCloseApplication() { // NEW TEST
        assertEquals("Program CC Caraoke is closing down", laptop.closeApplication("CC Caraoke"));
    }

    @Test
    public void desktopCanShutDown() {
        assertEquals("Shutting down...", desktop.shutDown());
    }

    @Test
    public void laptopCanShutDown() {
        assertEquals("Shutting down...", laptop.shutDown());
    }
}
