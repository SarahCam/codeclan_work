import db.DBHelper;
import models.Department;
import models.Employee;
import models.Manager;

import javax.persistence.ManyToOne;
import java.util.List;

public class Runner {

    public static void main(String[] args) {



        Manager manager1 = new Manager("Jim", "Smith", 70000, 200000);
        DBHelper.save(manager1);

        Manager manager2 = new Manager("Maxine", "Brown", 75000, 300000);
        DBHelper.save(manager2);

        Department dept1 = new Department("HR", manager1);
        DBHelper.save(dept1);
        Department dept2 = new Department("Sales", manager2);
        DBHelper.save(dept2);


        Employee employee1 = new Employee("Al", "Bundy", 35000, manager1);
        DBHelper.save(employee1);

        Employee employee2 = new Employee("Peggy", "Bundy", 50000, manager2);
        DBHelper.save(employee2);


        Department foundDept = DBHelper.find(Department.class, dept1.getId());
        Employee foundEmp = DBHelper.find(Employee.class, employee1.getId());

        List<Employee> results = DBHelper.getEmployeesByManager(manager1);

        Manager found = DBHelper.find(Manager.class, manager1.getId());
        found.giveRaise();
        DBHelper.update(found);
    }
}
