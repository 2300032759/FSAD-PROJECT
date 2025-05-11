package klu;


import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PlumbingRepo extends JpaRepository<Plumbing, Long> {
    List<Plumbing> findByNameContainingIgnoreCase(String keyword);
}
