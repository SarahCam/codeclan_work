import models.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;

import spark.ModelAndView;                                                                  //vtl stuff
import spark.Spark;
import spark.template.velocity.VelocityTemplateEngine;                                      //vrl stuff

import static spark.Spark.get;

public class Controller {

    public static void main(String[] args) {

        VelocityTemplateEngine velocityTemplateEngine = new VelocityTemplateEngine();       // vtl stuff

        get("/randomVideo", (req, res) -> {
            ArrayList<String> strings = new ArrayList<String>();
            strings.add ("Space Invaders");
            strings.add ("Pac Man");
            strings.add ("Star Wars");
            strings.add ("Doom");
            strings.add ("Lego World");
            Collections.shuffle(strings);

            HashMap<String, Object> model = new HashMap<>();
            model.put("result", strings.get(0));
            return new ModelAndView(model, "result.vtl");
        }, velocityTemplateEngine);                                                         //vtl stuff


        Spark.exception(Exception.class, (exception, request, response) -> {
            exception.printStackTrace();
        });

    }
}
