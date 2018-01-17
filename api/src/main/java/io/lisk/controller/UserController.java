package io.lisk.controller;

import io.lisk.dto.UserDto;
import io.lisk.entity.UserEntity;
import io.lisk.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("api")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("public/register")
    public UserEntity register(@Valid @RequestBody UserDto userDto) {
        return userService.register(userDto);
    }

    @RequestMapping("private/users")
    public String getUsers(){
        return "{\"users\":[{\"firstname\":\"Richard\", \"lastname\":\"Feynman\"}," +
                "{\"firstname\":\"Marie\",\"lastname\":\"Curie\"}]}";
    }

}
