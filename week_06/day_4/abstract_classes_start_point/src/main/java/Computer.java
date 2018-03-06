public abstract class Computer  {

    public String runApplication(String appName){
        return appName + " Status: ";
    }

    // This is an abstract method
    public abstract String closeApplication(String appName);

    // Non-abstract method, within an abstract class:
    public String shutDown() {
        return "Shutting down...";
    }
}