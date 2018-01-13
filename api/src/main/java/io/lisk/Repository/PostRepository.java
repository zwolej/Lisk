package io.lisk.Repository;

import io.lisk.Entity.PostEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface PostRepository extends JpaRepository<PostEntity, Long> {

    Set<PostEntity> findAllByOrderByCreatedAtDesc();

}
