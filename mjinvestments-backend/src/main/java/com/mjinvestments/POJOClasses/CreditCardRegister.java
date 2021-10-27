package com.mjinvestments.POJOClasses;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

@EnableAutoConfiguration
@Entity
@Table(name = "MJ_CreditCard")

public class CreditCardRegister {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int creditCardNumber;
    private int cvc;
    private int expireMonth;
    private int expireYear;
    private String streetAddress;
    private String city;
    private String state;
    private int zipcode;

    @ManyToOne
    @JoinColumn(name = "user_id")
    User user;

    public void setUser(User user){
        this.user = user;
    }

    public User getUser(){
        return this.user;
    }
    // Constructors
    public CreditCardRegister() {
    }

    public CreditCardRegister(int id, int creditCardNumber, int cvc, int expireMonth, int expireYear,
            String streetAddress, String city, String state, int zipcode) {
        this.id = id;
        this.creditCardNumber = creditCardNumber;
        this.cvc = cvc;
        this.expireMonth = expireMonth;
        this.expireYear = expireYear;
        this.streetAddress = streetAddress;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
    }

    // Getters and setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getCreditCardNumber() {
        return creditCardNumber;
    }

    public void setCreditCardNumber(int creditCardNumber) {
        this.creditCardNumber = creditCardNumber;
    }

    public int getCvc() {
        return cvc;
    }

    public void setCvc(int cvc) {
        this.cvc = cvc;
    }

    public int getExpireMonth() {
        return expireMonth;
    }

    public void setExpireMonth(int expireMonth) {
        this.expireMonth = expireMonth;
    }

    public int getExpireYear() {
        return expireYear;
    }

    public void setExpireYear(int expireYear) {
        this.expireYear = expireYear;
    }

    public String getStreetAddress() {
        return streetAddress;
    }

    public void setStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public int getZipcode() {
        return zipcode;
    }

    public void setZipcode(int zipcode) {
        this.zipcode = zipcode;
    }

}
