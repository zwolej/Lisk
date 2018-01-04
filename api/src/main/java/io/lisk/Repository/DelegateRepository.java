package io.lisk.Repository;

import io.lisk.Entity.DelegateEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DelegateRepository extends JpaRepository<DelegateEntity, Long> {

}
