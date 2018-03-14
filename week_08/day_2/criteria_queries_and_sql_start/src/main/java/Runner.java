import db.DBHelper;
import models.Department;
import models.Employee;

import java.util.EnumMap;
import java.util.List;
import java.util.Map;

public class Runner {

    public static void main(String[] args) {

        Department dept1 = new Department("HR");
        DBHelper.save(dept1);

        Department dept2 = new Department("Sales");
        DBHelper.save(dept2);

        Employee employee1 = new Employee("Bruce", "Wayne", 150000, dept1);
        DBHelper.save(employee1);

        Employee employee2 = new Employee("Clark", "Kent", 80000, dept2);
        DBHelper.save(employee2);

        Employee employee3 = new Employee("Diana" ,"Prince", 95000, dept1);
        DBHelper.save(employee3);

        Employee employee4 = new Employee("Arthur", "Curry", 60000, dept2);
        DBHelper.save(employee4);

        Employee employee5 = new Employee("Barry", "Allen", 45000, dept1);
        DBHelper.save(employee5);

        List<Employee> employeeList = DBHelper.getAll(Employee.class);     // Passes class object to say which class we wany


        Employee thisEmployee5 = DBHelper.findById(Employee.class, employee5.getId());

        List<Employee> employeeSalaryList = DBHelper.getEmployeesWithSalary(Employee.class, 90000);
        List<Employee> employeeSalaryList2 = DBHelper.findByMinSalary(90000);

        List<Employee> employeeBySalary = DBHelper.orderBySalary();

        Double averageSalary = DBHelper.getAveSalary();
    }
}