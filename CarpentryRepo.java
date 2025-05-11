package klu;


import org.springframework.data.jpa.repository.JpaRepository;

public interface CarpentryRepo extends JpaRepository<Carpentry, Integer> {
    // Add custom queries if required
}
