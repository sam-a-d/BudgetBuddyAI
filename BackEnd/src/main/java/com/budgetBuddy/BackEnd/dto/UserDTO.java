package com.budgetBuddy.BackEnd.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class UserDTO {
    private String username;
    private String password;
    private String[] role; // Expected: "ROLE_ADMIN" or "ROLE_USER"
}
