import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class BusStopTest {

    Person person;
    BusStop busStop;

    @Before
    public void before(){
        person = new Person();
        busStop = new BusStop("Buchanan Galleries");
    }

    @Test
    public void checkGetName(){
        assertEquals("Buchanan Galleries", busStop.getName());
    }

    @Test
    public void checkQueueSize(){
        assertEquals(0, busStop.queueSize());
    }

    @Test
    public void canAddPerson(){
        busStop.addPerson(person);
        assertEquals(1, busStop.queueSize());
    }

    @Test
    public void canRemovePerson(){
        busStop.addPerson(person);
        assertEquals(1, busStop.queueSize());
        busStop.removePerson();
        assertEquals(0, busStop.queueSize());
    }


}
