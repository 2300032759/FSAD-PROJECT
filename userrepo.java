
package klu;

import org.springframework.data.jpa.repository.JpaRepository;

public interface userrepo extends JpaRepository<user, String> {
    user findByEmail(String email);
}
