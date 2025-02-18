package com.budgetBuddy.BackEnd.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
public class TransactionDTO {
    private String description;
    private double amount;
    private LocalDateTime creationTime;
    private String transType;           // INCOME/EXPENSE
    private String[] categories;        // Arrays of cats
    private long user;

}
