package klu;



import org.springframework.data.jpa.repository.JpaRepository;

public interface GardeningRepo extends JpaRepository<Gardening, Integer> {
    // You can define custom query methods here if needed
}
