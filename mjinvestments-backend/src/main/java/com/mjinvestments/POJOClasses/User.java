package com.mjinvestments.POJOClasses;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.Set;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

@EnableAutoConfiguration
@Entity
@Table(name = "MJ_USERS")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String first_name;
    private String username;
    private String pass_word;
    private int is_admin;

    @OneToMany(mappedBy = "user")
    Set<Holdings> holdings;

    @OneToMany(mappedBy = "user")
    Set<CreditCardRegister> credit_cards;

    public User(int id, String first_name, String username, String pass_word, int is_admin) {
        this.id = id;
        this.first_name = first_name;
        this.username = username;
        this.pass_word = pass_word;
        this.is_admin = is_admin;
    }

    public User() {
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirst_name() {
        return this.first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPass_word() {
        return this.pass_word;
    }

    public void setPass_word(String pass_word) {
        this.pass_word = pass_word;
    }

    public int getIs_admin() {
        return this.is_admin;
    }

    public void setIs_admin(int is_admin) {
        this.is_admin = is_admin;
    }

}
