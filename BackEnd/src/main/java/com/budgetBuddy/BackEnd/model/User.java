package com.budgetBuddy.BackEnd.model;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.boot.context.properties.bind.DefaultValue;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;


import java.util.HashSet;
import java.util.Set;

@Entity
@Component
@Table(name="users")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(unique = true)
    private String username;

    @Column(nullable = false)
    private String password; //Hashed values

    @ManyToMany(fetch = FetchType.LAZY)
    private Set<Role> roles = new HashSet<Role>();

    // Auto-hash the password before saving
    @PrePersist  // Automatically hash password before inserting into DB
    private void hashPassword() {
        this.password = new BCryptPasswordEncoder().encode(this.password);
    }
}



