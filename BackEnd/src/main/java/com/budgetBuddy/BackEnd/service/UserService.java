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

        Set<Role> roleSet = new HashSet<>();

        for (String theRole : userDTO.getRole()) {
            try{
                Role userRole = roleRepo.findByName(ERole.valueOf(theRole.toUpperCase()))
                                .orElseThrow(() -> new RuntimeException("Role not found: " + theRole));

                roleSet.add(userRole);
            } catch (Exception e) {
                throw new RuntimeException(e);
            }

        }

        if (roleSet.isEmpty()){
            return "The rule(s) are not found";
        }else{
            User userToRegister = new User();
            userToRegister.setUsername(userDTO.getUsername());
            userToRegister.setPassword(userDTO.getPassword());
            userToRegister.setRoles(roleSet);
            userRepo.save(userToRegister);

            return "Added User: " + userToRegister;
        }

    }

}
