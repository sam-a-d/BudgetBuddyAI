package com.budgetBuddy.BackEnd.repository;

import com.budgetBuddy.BackEnd.Enumerators.TransactionType;
import com.budgetBuddy.BackEnd.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CategoryRepo extends JpaRepository<Category, Long> {
    Optional<Category> findByName(String name);
}
