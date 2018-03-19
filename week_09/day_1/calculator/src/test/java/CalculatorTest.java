import models.Calculator;
import org.junit.Before;
import org.junit.Test;

import static junit.framework.TestCase.assertEquals;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() throws Exception {
        calculator = new Calculator(3, 4);
    }

    @Test
    public void canAdd() {
        assertEquals(7, calculator.add(), 0.01);
    }

    @Test
    public void canSubtract() {
        assertEquals(-1, calculator.subtract(), 0.01);
    }

    @Test
    public void canMultiply() {
        assertEquals(12, calculator.multiply(), 0.01);
    }

    @Test
    public void canDivide() {
        assertEquals(0.75, calculator.divide(), 0.01);
    }



}
