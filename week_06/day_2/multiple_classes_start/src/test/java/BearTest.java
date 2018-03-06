import org.junit.Before;

public class BearTest {

    Bear bear;

    @Before
    public void before(){

        bear = new Bear("Baloo");
    }

    @Test
    public void bellyStartsEmpty(){
        assertEquals(0, bear.bellySize);
    }

}
