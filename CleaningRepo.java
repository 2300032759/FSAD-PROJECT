package klu;



import org.springframework.data.jpa.repository.JpaRepository;

public interface CleaningRepo extends JpaRepository<Cleaning, Integer> {
    // Add custom queries if needed
}
