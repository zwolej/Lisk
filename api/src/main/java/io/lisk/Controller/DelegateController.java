package io.lisk.Controller;

import io.lisk.Entity.DelegateEntity;
import io.lisk.Repository.DelegateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("api")
public class DelegateController {

    @Autowired
    private DelegateRepository delegateRepository;

    @PostMapping("delegate")
    public DelegateEntity createDelegate(@Valid @RequestBody DelegateEntity delegateEntity) {
        return delegateRepository.save(delegateEntity);
    }

    @GetMapping("delegate/{id}")
    public ResponseEntity<DelegateEntity> getDelegateById(@PathVariable(value = "id") Long delegateId) {
        DelegateEntity delegateEntity = delegateRepository.findOne(delegateId);
        if (delegateEntity == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok().body(delegateEntity);
    }

    @DeleteMapping("/delegate/{id}")
    public ResponseEntity<DelegateEntity> deleteDelegate(@PathVariable(value = "id") Long delegateId) {
        DelegateEntity delegateEntity = delegateRepository.findOne(delegateId);
        if (delegateEntity == null) {
            return ResponseEntity.notFound().build();
        }

        delegateRepository.delete(delegateEntity);
        return ResponseEntity.ok().build();
    }

    @GetMapping("delegates")
    public Collection<DelegateEntity> getAlldelegates() {
        DelegateEntity delegateEntity = new DelegateEntity();
        delegateEntity.setUsername("test");
        List<DelegateEntity> list = new ArrayList<>();
        list.add(delegateEntity);
        return list;
//        return delegateRepository.findAll();
    }

}
