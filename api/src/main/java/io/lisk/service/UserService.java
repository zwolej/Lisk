package io.lisk.service;

import io.lisk.dto.UserDto;
import io.lisk.entity.UserEntity;
import io.lisk.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public UserEntity register(UserDto accountDto) {
        UserEntity user = new UserEntity();
        user.setUsername(accountDto.getUsername());
        user.setPassword(passwordEncoder.encode(accountDto.getPassword()));
        user.setEmail(accountDto.getEmail());

        return repository.save(user);
    }

}
