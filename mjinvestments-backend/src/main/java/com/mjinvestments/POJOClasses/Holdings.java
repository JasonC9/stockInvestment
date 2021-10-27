package com.mjinvestments.POJOClasses;

import javax.annotation.Generated;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "MJ_Holdings")
public class Holdings {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "stock_id")
    Stock stock;

    @ManyToOne
    @JoinColumn(name = "user_id")
    User user;

    public Holdings(int id, Stock stock, User user, Float amount_held) {
        this.id = id;
        this.stock = stock;
        this.user = user;
        this.amount_held = amount_held;
    }

    Float amount_held;

    public Holdings() {
        this.amount_held = 0f;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Stock getStock() {
        return this.stock;
    }

    public void setStock(Stock stock) {
        this.stock = stock;
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Float getAmount_held() {
        return this.amount_held;
    }

    public void setAmount_held(Float amount_held) {
        this.amount_held = amount_held;
    }

}