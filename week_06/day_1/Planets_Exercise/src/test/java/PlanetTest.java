
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;


public class PlanetTest {

    private Planet planet;

    @Before
    public void before(){
        planet = new Planet("Pluto", 300);
    }

    @Test
    public void hasName(){
        assertEquals("Pluto", planet.getName());

    }

    @Test
    public void hasSize(){
        assertEquals(300, planet.getSize());

    }

    @Test
    public void canExplode(){
        assertEquals("Boom! Pluto has exploded because its size is now 300.", planet.explode());
    }

}
