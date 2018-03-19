package models;

import java.util.ArrayList;
import java.util.Collections;

public class VideoGame {

    public static String getGame() {
        ArrayList<String> games = new ArrayList<String>();

        games.add ("Space Invaders");
        games.add ("Pac Man");
        games.add ("Star Wars");
        games.add ("Doom");
        games.add ("Lego World");

        Collections.shuffle(games);

        return games.get(0);

    }

}
