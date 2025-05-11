package klu;


import org.springframework.data.jpa.repository.JpaRepository;

public interface BeautySalonRepo extends JpaRepository<BeautySalon, Integer> {
    // Define any custom query methods if needed
}
