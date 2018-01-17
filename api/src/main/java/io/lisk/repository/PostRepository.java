package io.lisk.repository;

import io.lisk.entity.PostEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface PostRepository extends JpaRepository<PostEntity, Long> {

    Set<PostEntity> findAllByOrderByCreatedAtDesc();

}
