package com.mjinvestments.controllers;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpSession;

import com.mjinvestments.POJOClasses.CreditCardRegister;
import com.mjinvestments.POJOClasses.User;
import com.mjinvestments.repositories.CreditCardRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CreditcardInfoController {
    
    @Autowired
    private CreditCardRepository creditRepo;

    @GetMapping("/creditcard/findAll")
    public List<CreditCardRegister> getAllCreditcards(){
        return creditRepo.findAll();
    }

    @GetMapping("/creditcard/findCreditcard/{id}")
    public Optional<CreditCardRegister> findCreditcardName(@PathVariable int id){
        return creditRepo.findById(id);
    }

    //Create creditcard 
    @PostMapping("/creditcard")
    public int create(@RequestBody CreditCardRegister registerCreditCard, HttpSession session) {
        registerCreditCard.setUser(((User)session.getAttribute("user")));
        creditRepo.saveAndFlush(registerCreditCard);
        return registerCreditCard.getId();
    }

    @GetMapping("/creditcard/findCreditcard")
    public Optional<CreditCardRegister> findCreditcardName(HttpSession session){
        Integer id = (Integer) session.getAttribute("id");
        return creditRepo.findByUserId(id);
    }

}
