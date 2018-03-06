import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class BusTest {

    Bus bus;
    Person person;
    BusStop busStop;

    @Before
    public void before(){
        person = new Person();
        bus = new Bus("Central Station", 30);
        busStop = new BusStop("George Street");
    }

    @Test
    public void checkGetPassengerCount(){
        assertEquals(0, bus.getPassengerCount());
    }

    @Test
    public void checkGetDestination(){
        assertEquals("Central Station", bus.getDestination());
    }

    @Test
    public void checkGetCapacity(){
        assertEquals(30, bus.getCapacity());
    }

    @Test
    public void canAddPassenger(){
        assertEquals(0, bus.getPassengerCount());
        bus.addPassenger(person);
        assertEquals(1, bus.getPassengerCount());
    }

    @Test
    public void canRemovePassenger(){
        bus.addPassenger(person);
        assertEquals(1, bus.getPassengerCount());
        bus.removePassenger();
        assertEquals(0, bus.getPassengerCount());
    }

    @Test
    public void canAddPassenger__BUS_FULL(){
        for(int i = 0; i < bus.getCapacity(); i++){
            bus.addPassenger(person);
        }
        assertEquals(30, bus.getPassengerCount());
        bus.addPassenger(person);
        assertEquals(30, bus.getPassengerCount());
    }

    @Test
    public void canPickUp(){
        busStop.addPerson(person);
        bus.pickUp(busStop);
        assertEquals(0, busStop.queueSize());
        assertEquals(1, bus.getPassengerCount());
    }
}
