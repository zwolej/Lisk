package io.lisk.Controller;

import io.lisk.Dto.PostDto;
import io.lisk.Entity.PostEntity;
import io.lisk.Repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalDateTime;
import java.util.Collection;

@RestController
@RequestMapping("api")
public class PostController {

    private static final String ANONYMOUS = "Anonymous Users";

    @Autowired
    private PostRepository postRepository;

    @PostMapping("post")
    public PostEntity createPost(@Valid @RequestBody PostDto postDto) {
        PostEntity entity = new PostEntity(ANONYMOUS, postDto.getBody(), LocalDateTime.now());
        return postRepository.save(entity);
    }

    @GetMapping("post/{id}")
    public ResponseEntity<PostEntity> getPostById(@PathVariable(value = "id") Long postId) {
        PostEntity PostEntity = postRepository.findOne(postId);
        if (PostEntity == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok().body(PostEntity);
    }

    @DeleteMapping("/post/{id}")
    public ResponseEntity<PostEntity> deletePost(@PathVariable(value = "id") Long delegateId) {
        PostEntity PostEntity = postRepository.findOne(delegateId);
        if (PostEntity == null) {
            return ResponseEntity.notFound().build();
        }

        postRepository.delete(PostEntity);
        return ResponseEntity.ok().build();
    }

    @GetMapping("posts")
    public Collection<PostEntity> getAllPosts() {
        return postRepository.findAllByOrderByCreatedAtDesc();
    }

}
