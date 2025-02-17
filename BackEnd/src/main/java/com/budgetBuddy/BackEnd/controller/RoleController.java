package com.budgetBuddy.BackEnd.controller;

import com.budgetBuddy.BackEnd.model.Role;
import com.budgetBuddy.BackEnd.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class RoleController {

    @Autowired
    RoleService roleService;

    @PostMapping("role/add")
    public String addRole(@RequestBody Role role_data){
        return roleService.addRole(role_data);
    }

    @GetMapping("/roles")
    public List<Role> getAllRoles(){
        return roleService.getAllRoles();
    }
}
