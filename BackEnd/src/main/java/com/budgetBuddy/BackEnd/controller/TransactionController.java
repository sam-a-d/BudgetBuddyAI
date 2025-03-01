package com.budgetBuddy.BackEnd.controller;
import com.budgetBuddy.BackEnd.dto.TransactionDTO;
import com.budgetBuddy.BackEnd.model.Transaction;
import com.budgetBuddy.BackEnd.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class TransactionController {

    @Autowired
    TransactionService transactionService;

    @PostMapping("transaction/add")
    public ResponseEntity<?> addNewTransaction(@RequestBody TransactionDTO transactionDTO){
        return transactionService.addTransaction(transactionDTO);
    }

    @GetMapping("/alltransactions")
    public List<Transaction> getTransactions(){
        return transactionService.getAllTransaction();
    }

    @GetMapping("/transactions")
    public ResponseEntity<?> getFilteredTransactions(
            @RequestParam(required = false) Long userId,
            @RequestParam(required = false) String type,
            @RequestParam(required = false) String startDate,
            @RequestParam(required = false) String endDate,
            @RequestParam(required = false) Double minAmount,
            @RequestParam(required = false) Double maxAmount


    ){
        ResponseEntity<?> transactions = transactionService
                                            .getTransactionWithFilter(
                                                    startDate,
                                                    endDate,
                                                    type,
                                                    userId,
                                                    minAmount,
                                                    maxAmount
                                            );
        return transactions;
    }
}
