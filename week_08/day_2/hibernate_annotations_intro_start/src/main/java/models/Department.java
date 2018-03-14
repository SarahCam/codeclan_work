package models;

import javax.persistence.*;
import java.util.Set;

@Entity                                                         // Use annotations
@Table(name="departments")                                      // Use annotations - this is the database table name
public class Department {

    private int id;
    private String title;
    private Manager manager;

    public Department() {
    }

    public Department(String title, Manager manager) {

        this.title = title;
        this.manager = manager;
    }

    @Id                                                       // This is our Id, put it above the getter of the property you want to map
    @GeneratedValue(strategy = GenerationType.IDENTITY)       // This is a generated value in DB
    @Column(name="id")                                        // This column in the DB is called 'id'
    public int getId() {

        return id;
    }

    public void setId(int id) {

        this.id = id;
    }

    @Column(name="title")                                   // This column in the DB is called 'title'
    public String getTitle() {

        return title;
    }

    public void setTitle(String title) {

        this.title = title;
    }

    @OneToOne(fetch = FetchType.EAGER)
    public Manager getManager() {
        return manager;
    }

    public void setManager(Manager manager) {
        this.manager = manager;
    }
}