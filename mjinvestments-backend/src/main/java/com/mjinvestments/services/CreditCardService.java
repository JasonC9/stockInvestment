package com.mjinvestments.services;
import java.util.List;
import com.mjinvestments.repositories.CreditCardRepository;
import com.mjinvestments.POJOClasses.CreditCardRegister;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CreditCardService {
    @Autowired
    private CreditCardRepository creditCardRepo;

    public List<CreditCardRegister> listAllCreditCards() {
        return creditCardRepo.findAll();
    }
    
}
