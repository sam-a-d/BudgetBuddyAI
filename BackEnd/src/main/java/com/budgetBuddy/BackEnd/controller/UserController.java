package com.budgetBuddy.BackEnd.controller;

import com.budgetBuddy.BackEnd.dto.UserDTO;
import com.budgetBuddy.BackEnd.model.User;
import com.budgetBuddy.BackEnd.repository.RoleRepo;
import com.budgetBuddy.BackEnd.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.config.annotation.web.SecurityMarker;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/users")
    public List<User> getAllusers(){
        return userService.getAllUsers();
    }

    @PostMapping("/user/add")
    public String addNewUser(@RequestBody UserDTO userDTO){
        return userService.addNewUser(userDTO);
    }

}
