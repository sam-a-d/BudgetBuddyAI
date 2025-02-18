package com.budgetBuddy.BackEnd.model;

import com.budgetBuddy.BackEnd.Enumerators.TransactionType;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Component
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "transactions")
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private double amount;
    private LocalDateTime transactionTime;
    private String description;

    @ElementCollection
    @CollectionTable(name = "transaction_categories", joinColumns = @JoinColumn(name = "transaction_id"))
    @Column(name = "category")
    private Set<String> category = new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Enumerated(EnumType.STRING)
    private TransactionType transactionType;
}
