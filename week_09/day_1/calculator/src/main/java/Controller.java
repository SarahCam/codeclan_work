import models.Calculator;

import spark.ModelAndView;                                      //vtl stuff
import spark.template.velocity.VelocityTemplateEngine;          //vtl stuff

import java.util.HashMap;

import static spark.Spark.get;

public class Controller {

    public static void main(String[] args){

        VelocityTemplateEngine velocityTemplateEngine = new VelocityTemplateEngine();       // vtl stuff

        get("/add/:num1/:num2", (req, res) -> {
            Integer num1 = Integer.parseInt(req.params(":num1"));
            Integer num2 = Integer.parseInt(req.params(":num2"));

            Calculator calculator = new Calculator(num1, num2);
            double result = calculator.add();

            HashMap<String, Object> model = new HashMap<>();      // vtl stuff to create a HashMap for result
            model.put("result", result);                          // vtl way to return result as a 'model'
            return new ModelAndView(model, "result.vtl");         // return the created model and our defined view: result.vtl
        }, velocityTemplateEngine);                               // vtl stuff


        get("/subtract/:num1/:num2", (req, res) -> {
            Integer num1 = Integer.parseInt(req.params(":num1"));
            Integer num2 = Integer.parseInt(req.params(":num2"));

            Calculator calculator = new Calculator(num1, num2);
            double result = calculator.subtract();

            HashMap<String, Object> model = new HashMap<>();
            model.put("result", result);
            return new ModelAndView(model, "result.vtl");
        }, velocityTemplateEngine);

        get("/multiply/:num1/:num2", (req, res) -> {
            Integer num1 = Integer.parseInt(req.params(":num1"));
            Integer num2 = Integer.parseInt(req.params(":num2"));

            Calculator calculator = new Calculator(num1, num2);
            double result = calculator.multiply();

            HashMap<String, Object> model = new HashMap<>();
            model.put("result", result);
            return new ModelAndView(model, "result.vtl");
        }, velocityTemplateEngine);

        get("/divide/:num1/:num2", (req, res) -> {
            Integer num1 = Integer.parseInt(req.params(":num1"));
            Integer num2 = Integer.parseInt(req.params(":num2"));

            Calculator calculator = new Calculator(num1, num2);
            double result = calculator.divide();

            HashMap<String, Object> model = new HashMap<>();
            model.put("result", result);
            return new ModelAndView(model, "result.vtl");
        }, velocityTemplateEngine);


    }
}
