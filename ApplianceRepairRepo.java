package klu;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplianceRepairRepo extends JpaRepository<ApplianceRepair, Integer> {

	List<ApplianceRepair> findAll();
    // Additional custom query methods if required
}
