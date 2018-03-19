package models;

public class Calculator {

    private double num1, num2;

    public Calculator(double num1, double num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    public double getNum1() {
        return num1;
    }

    public double getNum2() {
        return num2;
    }

    public double add(){
        return num1 + num2;
    }

    public double subtract(){
        return num1 - num2;
    }

    public double multiply(){
        return num1 * num2;
    }

    public double divide(){
        return num1 / num2;
    }
}
