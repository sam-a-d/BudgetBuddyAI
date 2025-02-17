package com.budgetBuddy.BackEnd.service;


import com.budgetBuddy.BackEnd.dto.UserDTO;
import com.budgetBuddy.BackEnd.model.ERole;
import com.budgetBuddy.BackEnd.model.Role;
import com.budgetBuddy.BackEnd.model.User;
import com.budgetBuddy.BackEnd.repository.RoleRepo;
import com.budgetBuddy.BackEnd.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private RoleRepo roleRepo;

    public List<User> getAllUsers(){
        return userRepo.findAll();
    }

    public String addNewUser(UserDTO userDTO){

        try{
//            Role userRole = roleRepo.findByName(ERole.valueOf(userDTO.getRole().toUpperCase()));

            Role userRole = roleRepo.findByName(ERole.valueOf(userDTO.getRole().toUpperCase()))
                    .orElseThrow(() -> new RuntimeException("Role not found: " + userDTO.getRole()));
            Set<Role> roleSet = new HashSet<>();

            roleSet.add(userRole);
            User userToRegister = new User();
            userToRegister.setUsername(userDTO.getUsername());
            userToRegister.setPassword(userDTO.getPassword());
            userToRegister.setRoles(roleSet);

            userRepo.save(userToRegister);

            return "Added User: " + roleSet;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

}
