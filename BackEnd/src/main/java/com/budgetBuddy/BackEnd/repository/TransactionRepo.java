package com.budgetBuddy.BackEnd.repository;

import com.budgetBuddy.BackEnd.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionRepo extends JpaRepository<Transaction, Long> {

}
