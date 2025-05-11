package klu;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;


@org.springframework.stereotype.Service
public class Service {

    @Autowired
    userrepo userrepo;

    @Autowired
    PlumbingRepo plumRepo;

    @Autowired
    CleaningRepo cleaningRepo;

    @Autowired
    CarpentryRepo carpenterRepo;

    @Autowired
    GardeningRepo gardeningRepo;

    @Autowired
    BeautySalonRepo beautyRepo;

    @Autowired
    ApplianceRepairRepo applianceRepo;

    @Autowired
    PackersAndMoversRepo packersRepo;

    // ---------- User ----------
    public String insertData(user user) {
        userrepo.save(user);
        return "Inserted Successfully";
    }

    public user loginCheck(user user) {
        user user2 = userrepo.findByEmail(user.getEmail());
        if (user2 == null) {
            return user;
        } else {
            if (new Cryptography().decryptData(user2.getPassword()).equals(user.getPassword())) {
                return user2;
            } else {
                return user;
            }
        }
    }

    // ---------- Plumbing ----------
    public String insertPlumbing(Plumbing plumbing) {
        plumRepo.save(plumbing);
        return "Inserted Successfully";
    }

    public List<Plumbing> retrievePlumbing() {
        return plumRepo.findAll();
    }

    public String updatePlumbing(Plumbing plumbing) {
        plumRepo.save(plumbing);
        return "Updated";
    }

    public String deletePlumbing(Long pid) {
        if (plumRepo.findById(pid).isPresent()) {
            plumRepo.deleteById(pid);
            return "Deleted";
        } else {
            return "Element Not Present";
        }
    }

    // ---------- Cleaning ----------
    public String insertCleaning(Cleaning cleaning) {
        cleaningRepo.save(cleaning);
        return "Inserted Successfully";
    }

    public List<Cleaning> retrieveCleaning() {
        return cleaningRepo.findAll();
    }

    public String updateCleaning(Cleaning cleaning) {
        cleaningRepo.save(cleaning);
        return "Updated";
    }

    public String deleteCleaning(int pid) {
        if (cleaningRepo.findById(pid).isPresent()) {
            cleaningRepo.deleteById(pid);
            return "Deleted";
        } else {
            return "Element Not Present";
        }
    }

    // ---------- Carpenter ----------
    public String insertCarpenter(Carpentry carpenter) {
        carpenterRepo.save(carpenter);
        return "Inserted Successfully";
    }

    public List<Carpentry> retrieveCarpenter() {
        return carpenterRepo.findAll();
    }

    public String updateCarpenter(Carpentry carpenter) {
        carpenterRepo.save(carpenter);
        return "Updated";
    }

    public String deleteCarpenter(int pid) {
        if (carpenterRepo.findById(pid).isPresent()) {
            carpenterRepo.deleteById(pid);
            return "Deleted";
        } else {
            return "Element Not Present";
        }
    }

    // ---------- Gardening ----------
    public String insertGardening(Gardening gardening) {
        gardeningRepo.save(gardening);
        return "Inserted Successfully";
    }

    public List<Gardening> retrieveGardening() {
        return gardeningRepo.findAll();
    }

    public String updateGardening(Gardening gardening) {
        gardeningRepo.save(gardening);
        return "Updated";
    }

    public String deleteGardening(int pid) {
        if (gardeningRepo.findById(pid).isPresent()) {
            gardeningRepo.deleteById(pid);
            return "Deleted";
        } else {
            return "Element Not Present";
        }
    }

    // ---------- Beauty Salon ----------
    public String insertBeauty(BeautySalon beautySalon) {
        beautyRepo.save(beautySalon);
        return "Inserted Successfully";
    }

    public List<BeautySalon> retrieveBeauty() {
        return beautyRepo.findAll();
    }

    public String updateBeauty(BeautySalon beautySalon) {
        beautyRepo.save(beautySalon);
        return "Updated";
    }

    public String deleteBeauty(int pid) {
        if (beautyRepo.findById(pid).isPresent()) {
            beautyRepo.deleteById(pid);
            return "Deleted";
        } else {
            return "Element Not Present";
        }
    }

    // ---------- Appliance Repair ----------
    public String insertAppliance(ApplianceRepair applianceRepair) {
        applianceRepo.save(applianceRepair);
        return "Inserted Successfully";
    }

    public List<ApplianceRepair> retrieveAppliance() {
        return applianceRepo.findAll();
    }

    public String updateAppliance(ApplianceRepair applianceRepair) {
        applianceRepo.save(applianceRepair);
        return "Updated";
    }

    public String deleteAppliance(int pid) {
        if (applianceRepo.findById(pid).isPresent()) {
            applianceRepo.deleteById(pid);
            return "Deleted";
        } else {
            return "Element Not Present";
        }
    }

    // ---------- Packers and Movers ----------
    public String insertPackers(PackersAndMovers packers) {
        packersRepo.save(packers);
        return "Inserted Successfully";
    }

    public List<PackersAndMovers> retrievePackers() {
        return packersRepo.findAll();
    }

    public String updatePackers(PackersAndMovers packers) {
        packersRepo.save(packers);
        return "Updated";
    }

    public String deletePackers(int pid) {
        if (packersRepo.findById(pid).isPresent()) {
            packersRepo.deleteById(pid);
            return "Deleted";
        } else {
            return "Element Not Present";
        }
    }
}
