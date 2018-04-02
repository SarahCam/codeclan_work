import static spark.Spark.get;
import static spark.Spark.staticFileLocation;

import models.Students;
import spark.ModelAndView;

import spark.Spark;
import spark.template.velocity.VelocityTemplateEngine;

import java.util.HashMap;
import java.util.List;


public class StudentController {
    public static void main(String[] args) {
        VelocityTemplateEngine velocityTemplateEngine = new VelocityTemplateEngine();
        staticFileLocation("public");

        get("/names/:number", (req, res) -> {
            int amount = Integer.parseInt(req.params(":number"));
            List<String> names = Students.getNames(amount);

            HashMap<String, Object> model = new HashMap<>();
            model.put("names", names);
            model.put("template", "result.vtl");

            return new ModelAndView(model, "layout.vtl");
        }, velocityTemplateEngine);

        Spark.exception(Exception.class, (exception, request, response) -> {
            exception.printStackTrace();
        });
    }
}
