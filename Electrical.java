package klu;



import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Electrical {

    @Id
    private int pid;
    private int pcost;
    private String pimage;
    private String pname;
    private int pqty;
    private String pdescription;

    // Getters and Setters
    public int getPid() {
        return pid;
    }

    public void setPid(int pid) {
        this.pid = pid;
    }

    public int getPcost() {
        return pcost;
    }

    public void setPcost(int pcost) {
        this.pcost = pcost;
    }

    public String getPimage() {
        return pimage;
    }

    public void setPimage(String pimage) {
        this.pimage = pimage;
    }

    public String getPname() {
        return pname;
    }

    public void setPname(String pname) {
        this.pname = pname;
    }

    public int getPqty() {
        return pqty;
    }

    public void setPqty(int pqty) {
        this.pqty = pqty;
    }

    public String getPdescription() {
        return pdescription;
    }

    public void setPdescription(String pdescription) {
        this.pdescription = pdescription;
    }

    @Override
    public String toString() {
        return "Electrical [pid=" + pid + ", pcost=" + pcost + ", pimage=" + pimage + ", pname=" + pname + ", pqty="
                + pqty + ", pdescription=" + pdescription + "]";
    }
}
