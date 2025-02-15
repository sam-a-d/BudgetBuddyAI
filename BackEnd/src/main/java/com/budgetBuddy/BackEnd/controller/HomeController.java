package com.budgetBuddy.BackEnd.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/")
    public String homePage(){
        return "Budget Buddy - A Personal Budget Tracker V.0.0.1";
    }
}
