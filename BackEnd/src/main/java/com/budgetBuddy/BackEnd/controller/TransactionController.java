package com.budgetBuddy.BackEnd.controller;
import com.budgetBuddy.BackEnd.dto.TransactionDTO;
import com.budgetBuddy.BackEnd.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TransactionController {

    @Autowired
    TransactionService transactionService;

    @PostMapping("transaction/add")
    public ResponseEntity<?> addNewTransaction(@RequestBody TransactionDTO transactionDTO){
        return transactionService.addTransaction(transactionDTO);
    }

}
