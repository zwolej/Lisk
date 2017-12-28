package io.lisk.Controller;

import io.lisk.Entity.Delegate;
import io.lisk.Repository.DelegateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collection;

@RestController
@RequestMapping("api")
public class DelegateController {

	@Autowired
	private DelegateRepository delegateRepository;

    @PostMapping("delegate")
    public Delegate createDelegate(@Valid @RequestBody Delegate delegate) {
        return delegateRepository.save(delegate);
    }

    @GetMapping("delegate/{id}")
    public ResponseEntity<Delegate> getDelegateById(@PathVariable(value = "id") Long delegateId) {
        Delegate delegate = delegateRepository.findOne(delegateId);
        if(delegate == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok().body(delegate);
    }

    @DeleteMapping("/delegate/{id}")
    public ResponseEntity<Delegate> deleteDelegate(@PathVariable(value = "id") Long delegateId) {
        Delegate delegate = delegateRepository.findOne(delegateId);
        if(delegate == null) {
            return ResponseEntity.notFound().build();
        }

        delegateRepository.delete(delegate);
        return ResponseEntity.ok().build();
    }

    @GetMapping("delegates")
    public Collection<Delegate> getAlldelegates() {
        return delegateRepository.findAll();
    }

}
