package klu;



import org.springframework.data.jpa.repository.JpaRepository;

public interface PackersAndMoversRepo extends JpaRepository<PackersAndMovers, Integer> {
    // Custom query methods if needed
}
