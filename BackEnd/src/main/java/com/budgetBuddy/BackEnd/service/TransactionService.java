package com.budgetBuddy.BackEnd.service;
import com.budgetBuddy.BackEnd.Enumerators.TransactionType;
import com.budgetBuddy.BackEnd.dto.TransactionDTO;
import com.budgetBuddy.BackEnd.model.Category;
import com.budgetBuddy.BackEnd.model.Transaction;
import com.budgetBuddy.BackEnd.model.User;
import com.budgetBuddy.BackEnd.repository.CategoryRepo;
import com.budgetBuddy.BackEnd.repository.TransactionRepo;
import com.budgetBuddy.BackEnd.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Service
public class TransactionService {

    @Autowired
    UserRepo userRepo;

    @Autowired
    TransactionRepo transactionRepo;

    @Autowired
    CategoryRepo categoryRepo;

    public ResponseEntity<?> addTransaction(TransactionDTO transactionDTO){

        User transactionUser;
        TransactionType theTransactionType;

        if(transactionDTO.getCreationTime() == null){
            transactionDTO.setCreationTime(LocalDateTime.now());
        }

        try{
            transactionUser = userRepo.findById(transactionDTO.getUser())
                    .orElseThrow(() -> new RuntimeException("Role is not valid"));

            theTransactionType = TransactionType.valueOf(transactionDTO.getTransType());

        }catch (IllegalArgumentException e){
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error in User/Transaction Type");
        }

        Set<Category> categorySet = new HashSet<>();

        String[] categoriesToAdd = transactionDTO.getCategories();

        for (String cat : categoriesToAdd) {
            Category c = categoryRepo.findByName(cat.toLowerCase())
                    .orElseGet(() -> categoryRepo.save(new Category(cat.toLowerCase())));

            categorySet.add(c);
        }


        Transaction theTransaction = new Transaction();
        theTransaction.setDescription(transactionDTO.getDescription());
        theTransaction.setTransactionType(theTransactionType);
        theTransaction.setAmount(transactionDTO.getAmount());
        theTransaction.setCategories(categorySet);
        theTransaction.setUser(transactionUser);
        theTransaction.setTransactionTime(transactionDTO.getCreationTime());

        try{
            transactionRepo.save(theTransaction);
            return ResponseEntity.status(HttpStatus.CREATED).body("Transaction successfully created");
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    public List<Transaction> getAllTransaction() {
        return transactionRepo.findAll();
    }
}
