package com.budgetBuddy.BackEnd.model;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.stereotype.Component;

import java.util.List;

@Entity
@Component
@Table(name = "user_roles")
@NoArgsConstructor
@AllArgsConstructor
@ToString(exclude = "any_bidirectional_field")
@Getter
@Setter
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, unique = true)
    private ERole name;

}


