package klu;



import org.springframework.data.jpa.repository.JpaRepository;

public interface ElectricalRepo extends JpaRepository<Electrical, Integer> {
    // You can define custom query methods here if needed
}
