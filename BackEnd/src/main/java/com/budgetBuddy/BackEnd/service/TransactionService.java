package com.budgetBuddy.BackEnd.service;
import com.budgetBuddy.BackEnd.Enumerators.TransactionType;
import com.budgetBuddy.BackEnd.dto.TransactionDTO;
import com.budgetBuddy.BackEnd.model.Category;
import com.budgetBuddy.BackEnd.model.Transaction;
import com.budgetBuddy.BackEnd.model.User;
import com.budgetBuddy.BackEnd.repository.CategoryRepo;
import com.budgetBuddy.BackEnd.repository.TransactionRepo;
import com.budgetBuddy.BackEnd.repository.UserRepo;
import jakarta.persistence.EntityManager;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import java.util.ArrayList;



@Service
public class TransactionService {

    @Autowired
    UserRepo userRepo;

    @Autowired
    TransactionRepo transactionRepo;

    @Autowired
    CategoryRepo categoryRepo;

    private final EntityManager entityManager;

    @Autowired
    public TransactionService(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

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

    public ResponseEntity<?> getTransactionWithFilter(String startDate, String endDate,
                                                      String type, Long user_id,
                                                      Double minAmount, Double maxAmount)
    {

        User transactionUser;
        TransactionType theTransactionType;

        CriteriaBuilder  criteriaBuilder = entityManager.getCriteriaBuilder();

        CriteriaQuery<Transaction> criteriaQuery = criteriaBuilder.createQuery(Transaction.class);

        Root<Transaction> root = criteriaQuery.from(Transaction.class);

        List<Predicate> predicates = new ArrayList<>();

        if( user_id != null){
            try{
                transactionUser = userRepo.findById(user_id)
                        .orElseThrow(() -> new RuntimeException("Role is not valid"));

            }catch (IllegalArgumentException e){
                System.out.println(e.getMessage());
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error in User/Transaction Type");
            }
            predicates.add(criteriaBuilder.equal(root.get("user"), transactionUser));
        }

        if (type != null && !type.equalsIgnoreCase("all")){
            try {
                theTransactionType = TransactionType.valueOf(type);
                predicates.add(criteriaBuilder.equal(root.get("transactionType"), theTransactionType));
            }catch (Exception e){
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
                        "Error with transaction type"
                );
            }
        }

        if(startDate != null && !startDate.isEmpty()){
            predicates.add(criteriaBuilder.greaterThanOrEqualTo(root.get("transactionTime"), LocalDate.parse(startDate)));
        }

        if(endDate != null && !endDate.isEmpty()){
            LocalDate endLocalDate = LocalDate.parse(endDate);
            LocalDateTime endOfDay = endLocalDate.atTime(23, 59, 59); // Include the whole day
            predicates.add(criteriaBuilder.lessThanOrEqualTo(root.get("transactionTime"), endOfDay));
        }

        if(minAmount != null){
            predicates.add(criteriaBuilder.greaterThanOrEqualTo(root.get("amount"), minAmount));
        }

        if(maxAmount != null){
            predicates.add(criteriaBuilder.lessThanOrEqualTo(root.get("amount"), maxAmount));
        }

        criteriaQuery.where(predicates.toArray(new Predicate[0]));

        return ResponseEntity.ok(entityManager.createQuery(criteriaQuery).getResultList());
    }
}
