package io.lisk.repository;

import io.lisk.entity.DelegateEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DelegateRepository extends JpaRepository<DelegateEntity, String> {

}
