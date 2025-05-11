package klu;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class AppController {

    @Autowired
    private Service service;

    // ===== Plumbing =====
    @PostMapping("/plumbing")
    public String addPlumbingItem(@RequestBody Plumbing item) {
        return service.addPlumbingItem(item);
    }

    @GetMapping("/plumbing")
    public List<Plumbing> getAllPlumbingItems() {
        return service.getAllPlumbingItems();
    }

    @GetMapping("/plumbing/{id}")
    public Plumbing getPlumbingItemById(@PathVariable Integer id) {
        return service.getPlumbingItemById(id);
    }

    @PutMapping("/plumbing/{id}")
    public String updatePlumbingItem(@PathVariable Integer id, @RequestBody Plumbing item) {
        return service.updatePlumbingItem(id, item);
    }

    @DeleteMapping("/plumbing/{id}")
    public String deletePlumbingItem(@PathVariable Integer id) {
        return service.deletePlumbingItem(id);
    }

    // ===== Cleaning =====
    @PostMapping("/cleaning")
    public String addCleaningItem(@RequestBody Cleaning item) {
        return service.addCleaningItem(item);
    }

    @GetMapping("/cleaning")
    public List<Cleaning> getAllCleaningItems() {
        return service.getAllCleaningItems();
    }

    @GetMapping("/cleaning/{id}")
    public Cleaning getCleaningItemById(@PathVariable Integer id) {
        return service.getCleaningItemById(id);
    }

    @PutMapping("/cleaning/{id}")
    public String updateCleaningItem(@PathVariable Integer id, @RequestBody Cleaning item) {
        return service.updateCleaningItem(id, item);
    }

    @DeleteMapping("/cleaning/{id}")
    public String deleteCleaningItem(@PathVariable Integer id) {
        return service.deleteCleaningItem(id);
    }

    // ===== Carpentry =====
    @PostMapping("/carpentry")
    public String addCarpentryItem(@RequestBody Carpentry item) {
        return service.addCarpentryItem(item);
    }

    @GetMapping("/carpentry")
    public List<Carpentry> getAllCarpentryItems() {
        return service.getAllCarpentryItems();
    }

    @GetMapping("/carpentry/{id}")
    public Carpentry getCarpentryItemById(@PathVariable Integer id) {
        return service.getCarpentryItemById(id);
    }

    @PutMapping("/carpentry/{id}")
    public String updateCarpentryItem(@PathVariable Integer id, @RequestBody Carpentry item) {
        return service.updateCarpentryItem(id, item);
    }

    @DeleteMapping("/carpentry/{id}")
    public String deleteCarpentryItem(@PathVariable Integer id) {
        return service.deleteCarpentryItem(id);
    }

    // ===== Beauty Salon =====
    @PostMapping("/beauty")
    public String addBeautySalonItem(@RequestBody BeautySalon item) {
        return service.addBeautySalonItem(item);
    }

    @GetMapping("/beauty")
    public List<BeautySalon> getAllBeautySalonItems() {
        return service.getAllBeautySalonItems();
    }

    @GetMapping("/beauty/{id}")
    public BeautySalon getBeautySalonItemById(@PathVariable Integer id) {
        return service.getBeautySalonItemById(id);
    }

    @PutMapping("/beauty/{id}")
    public String updateBeautySalonItem(@PathVariable Integer id, @RequestBody BeautySalon item) {
        return service.updateBeautySalonItem(id, item);
    }

    @DeleteMapping("/beauty/{id}")
    public String deleteBeautySalonItem(@PathVariable Integer id) {
        return service.deleteBeautySalonItem(id);
    }

    // ===== Packers and Movers =====
    @PostMapping("/packers")
    public String addPackersMoversItem(@RequestBody PackersAndMovers item) {
        return service.addPackersAndMoversItem(item);
    }

    @GetMapping("/packers")
    public List<PackersAndMovers> getAllPackersAndMoversItems() {
        return service.getAllPackersAndMoversItems();
    }

    @GetMapping("/packers/{id}")
    public PackersAndMovers getPackersMoversItemById(@PathVariable Integer id) {
        return service.getPackersAndMoversItemById(id);
    }

    @PutMapping("/packers/{id}")
    public String updatePackersAndMoversItem(@PathVariable Integer id, @RequestBody PackersAndMovers item) {
        return service.updatePackersAndMoversItem(id, item);
    }

    @DeleteMapping("/packers/{id}")
    public String deletePackersMoversItem(@PathVariable Integer id) {
        return service.deletePackersAndMoversItem(id);
    }

    // ===== Appliances Repair =====
    @PostMapping("/appliances")
    public String addAppliancesRepairItem(@RequestBody AppliancesRepair item) {
        return service.addAppliancesRepairItem(item);
    }

    @GetMapping("/appliances")
    public List<AppliancesRepair> getAllAppliancesRepairItems() {
        return service.getAllAppliancesRepairItems();
    }

    @GetMapping("/appliances/{id}")
    public AppliancesRepair getAppliancesRepairItemById(@PathVariable Integer id) {
        return service.getAppliancesRepairItemById(id);
    }

    @PutMapping("/appliances/{id}")
    public String updateAppliancesRepairItem(@PathVariable Integer id, @RequestBody AppliancesRepair item) {
        return service.updateAppliancesRepairItem(id, item);
    }

    @DeleteMapping("/appliances/{id}")
    public String deleteAppliancesRepairItem(@PathVariable Integer id) {
        return service.deleteAppliancesRepairItem(id);
    }

    // ===== Electrical =====
    @PostMapping("/electrical")
    public String addElectricalItem(@RequestBody Electrical item) {
        return service.addElectricalItem(item);
    }

    @GetMapping("/electrical")
    public List<Electrical> getAllElectricalItems() {
        return service.getAllElectricalItems();
    }

    @GetMapping("/electrical/{id}")
    public Electrical getElectricalItemById(@PathVariable Integer id) {
        return service.getElectricalItemById(id);
    }

    @PutMapping("/electrical/{id}")
    public String updateElectricalItem(@PathVariable Integer id, @RequestBody Electrical item) {
        return service.updateElectricalItem(id, item);
    }

    @DeleteMapping("/electrical/{id}")
    public String deleteElectricalItem(@PathVariable Integer id) {
        return service.deleteElectricalItem(id);
    }

    // ===== Home Sanitization =====
    @PostMapping("/sanitization")
    public String addHomeSanitizationItem(@RequestBody HomeSanitization item) {
        return service.addHomeSanitizationItem(item);
    }

    @GetMapping("/sanitization")
    public List<HomeSanitization> getAllHomeSanitizationItems() {
        return service.getAllHomeSanitizationItems();
    }

    @GetMapping("/sanitization/{id}")
    public HomeSanitization getHomeSanitizationItemById(@PathVariable Integer id) {
        return service.getHomeSanitizationItemById(id);
    }

    @PutMapping("/sanitization/{id}")
    public String updateHomeSanitizationItem(@PathVariable Integer id, @RequestBody HomeSanitization item) {
        return service.updateHomeSanitizationItem(id, item);
    }

    @DeleteMapping("/sanitization/{id}")
    public String deleteHomeSanitizationItem(@PathVariable Integer id) {
        return service.deleteHomeSanitizationItem(id);
    }

    // ===== Gardening =====
    @PostMapping("/gardening")
    public String addGardeningItem(@RequestBody Gardening item) {
        return service.addGardeningItem(item);
    }

    @GetMapping("/gardening")
    public List<Gardening> getAllGardeningItems() {
        return service.getAllGardeningItems();
    }

    @GetMapping("/gardening/{id}")
    public Gardening getGardeningItemById(@PathVariable Integer id) {
        return service.getGardeningItemById(id);
    }

    @PutMapping("/gardening/{id}")
    public String updateGardeningItem(@PathVariable Integer id, @RequestBody Gardening item) {
        return service.updateGardeningItem(id, item);
    }

    @DeleteMapping("/gardening/{id}")
    public String deleteGardeningItem(@PathVariable Integer id) {
        return service.deleteGardeningItem(id);
    }
}
