import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

public class BearTest {
    // this is an instance variable in the class, so that it is visible in all class methods
    private Bear bear;

    @Before
    public void before(){
        bear = new Bear("Baloo", 25, 95.62);
    }

    @Test
    public void hasName(){
        assertEquals("Baloo", bear.getName());
    }

    @Test
    public void hasAge(){
        assertEquals(25, bear.getAge());

    }

    @Test
    public void hasWeight() {
        assertEquals(95.62, bear.getWeight(), 0.01);
    }

    @Test
    public void readyToHibernate(){
        assertTrue(bear.readyToHibernate());
    }

    @Test
    public void notReadyToHibernate(){
        Bear skinnyBear = new Bear("Skinny", 18, 70.95);
        assertFalse(skinnyBear.readyToHibernate());
    }
}
