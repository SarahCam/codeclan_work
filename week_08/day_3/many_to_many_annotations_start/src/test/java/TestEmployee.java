import db.DBHelper;
import models.Department;
import models.Employee;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import sun.security.pkcs11.Secmod;

import java.util.List;

import static junit.framework.Assert.assertEquals;

public class TestEmployee {

    private Employee employee;
    private Department department;

    @After
    public void tearDown() throws Exception {
        DBHelper.delete(employee);
        DBHelper.delete(department);
    }

    @Before
    public void before() throws Exception {
        department = new Department("Hr");
        employee = new Employee("Jeff", "Bridges", 40000, department);
        DBHelper.save(department);
        DBHelper.save(employee);
    }

    @Test
    public void canSave() {
        List<Employee> results = DBHelper.getAll(Employee.class);
        assertEquals(1, results.size());
    }

    @Test
    public void canUpdate() {
        Employee found = DBHelper.find(Employee.class, employee.getId());
        found.setFirstName("Jess");
        DBHelper.update(found);
        found = DBHelper.find(Employee.class, employee.getId());
        assertEquals("Jess", found.getFirstName());
    }
}
