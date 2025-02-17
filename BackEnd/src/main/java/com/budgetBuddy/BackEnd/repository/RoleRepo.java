package com.budgetBuddy.BackEnd.repository;

import com.budgetBuddy.BackEnd.model.ERole;
import com.budgetBuddy.BackEnd.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepo extends JpaRepository<Role, Integer> {
    Optional<Role> findByName(ERole name);
}
