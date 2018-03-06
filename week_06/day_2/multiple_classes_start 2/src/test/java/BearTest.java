import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class BearTest {

    Bear bear;
    Salmon salmon;
    River river;

    @Before
    public void before(){
        bear = new Bear("Baloo");
        salmon = new Salmon();
        river = new River();
        river.addFish(salmon);
    }

    @Test
    public void bellyStartsEmpty(){
        assertEquals(0, bear.bellySize());
    }

    @Test
    public void canEatSalmon(){
        bear.eat(river);
        assertEquals(1, bear.bellySize());
        assertEquals(0, river.getFishCount());
    }

    @Test
    public void canShitInWoods(){
        bear.eat(river);
        assertEquals(1, bear.bellySize());
        bear.shitInWoods();
        assertEquals(0, bear.bellySize());
    }
}
