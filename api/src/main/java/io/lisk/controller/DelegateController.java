package io.lisk.controller;

import io.lisk.entity.DelegateEntity;
import io.lisk.repository.DelegateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collection;

@RestController
@RequestMapping("api/public")
public class DelegateController {

    @Autowired
    private DelegateRepository delegateRepository;

    @PostMapping("delegate")
    public DelegateEntity createDelegate(@Valid @RequestBody DelegateEntity delegateEntity) {
        return delegateRepository.save(delegateEntity);
    }

    @GetMapping("delegate/{id}")
    public ResponseEntity<DelegateEntity> getDelegateById(@PathVariable(value = "id") String delegateId) {
        DelegateEntity delegateEntity = delegateRepository.findOne(delegateId);
        if (delegateEntity == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok().body(delegateEntity);
    }

    @DeleteMapping("/delegate/{id}")
    public ResponseEntity<DelegateEntity> deleteDelegate(@PathVariable(value = "id") String delegateId) {
        DelegateEntity delegateEntity = delegateRepository.findOne(delegateId);
        if (delegateEntity == null) {
            return ResponseEntity.notFound().build();
        }

        delegateRepository.delete(delegateEntity);
        return ResponseEntity.ok().build();
    }

    @GetMapping("delegates")
    public Collection<DelegateEntity> getAlldelegates() {
//        DelegateEntity delegateEntity = new DelegateEntity();
//        delegateEntity.setUsername("test");
//        List<DelegateEntity> list = new ArrayList<>();
//        list.add(delegateEntity);
//        return list;
        return delegateRepository.findAll();
    }

}
