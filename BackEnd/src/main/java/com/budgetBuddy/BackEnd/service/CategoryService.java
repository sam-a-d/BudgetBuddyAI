package com.budgetBuddy.BackEnd.service;

import com.budgetBuddy.BackEnd.model.Category;
import com.budgetBuddy.BackEnd.repository.CategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class CategoryService {

    @Autowired
    CategoryRepo categoryRepo;

    public List<Category> getAllCategories(){
        return categoryRepo.findAll();
    }
}
