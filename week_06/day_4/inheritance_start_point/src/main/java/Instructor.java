public class Instructor extends Person {

    private String moduleTeam;                          // Just applies to Instructor class

    public Instructor(String name, String cohort, String moduleTeam) {
        super(name, cohort);                            // Passes these up to Person class constructor
        this.moduleTeam = moduleTeam;                   // Just for Instructor class
    }

    public String getModuleTeam(){
        return this.moduleTeam;
    }

    public void setModuleTeam(String moduleTeam){
        this.moduleTeam = moduleTeam;
    }

}
