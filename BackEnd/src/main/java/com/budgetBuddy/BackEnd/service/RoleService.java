package com.budgetBuddy.BackEnd.service;

import com.budgetBuddy.BackEnd.model.Role;
import com.budgetBuddy.BackEnd.repository.RoleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleService {


    @Autowired
    RoleRepo roleRepo;

    public String addRole(Role role){

        try{
            roleRepo.save(role);
            return "Added" + role;
        }catch (Exception e){
            return "Opps, exception: " + e.getMessage();
        }

    }

    public List<Role> getAllRoles() {
        return roleRepo.findAll();
    }
}
