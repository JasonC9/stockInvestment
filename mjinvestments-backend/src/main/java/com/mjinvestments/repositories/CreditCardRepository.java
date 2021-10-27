package com.mjinvestments.repositories;

import java.util.Optional;

import com.mjinvestments.POJOClasses.CreditCardRegister;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CreditCardRepository extends JpaRepository<CreditCardRegister, Integer> {
    public CreditCardRegister findByCreditCardNumber(int number);
    public Optional<CreditCardRegister> findByUserId(int id);
}
