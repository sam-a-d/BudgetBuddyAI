package com.budgetBuddy.BackEnd.service;


import com.budgetBuddy.BackEnd.dto.UserDTO;
import com.budgetBuddy.BackEnd.Enumerators.ERole;
import com.budgetBuddy.BackEnd.model.Role;
import com.budgetBuddy.BackEnd.model.User;
import com.budgetBuddy.BackEnd.repository.RoleRepo;
import com.budgetBuddy.BackEnd.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
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

    public ResponseEntity<?> addNewUser(UserDTO userDTO){

        Set<Role> roleSet = new HashSet<>();

        for (String theRole : userDTO.getRole()) {
            try{
                Role userRole = roleRepo.findByName(ERole.valueOf(theRole.toUpperCase()))
                                .orElseThrow(() -> new RuntimeException("Role is a valid enum but not initiated in DB: " + theRole));

                roleSet.add(userRole);

            } catch (IllegalArgumentException e) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error adding the role: " + theRole + "Probably the role doesn't exists ");
            } catch (Exception e) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("The role is a valid one but does not have a database entry");
            }
        }

        if (roleSet.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Role(s) not found");
        }else{
            User userToRegister = new User();
            userToRegister.setUsername(userDTO.getUsername());
            userToRegister.setPassword(userDTO.getPassword());
            userToRegister.setRoles(roleSet);

            try{
                userRepo.save(userToRegister);
                return ResponseEntity.status(HttpStatus.CREATED).body("New user Created");

            }catch (Exception e){
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error. Message --> "+ e.getMessage());
            }

        }

    }

}
