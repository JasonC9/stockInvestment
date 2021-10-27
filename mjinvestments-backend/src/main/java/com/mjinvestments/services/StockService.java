package com.mjinvestments.services;
import java.util.List;
import com.mjinvestments.repositories.StockRepository;
import com.mjinvestments.POJOClasses.Stock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StockService 
{
    @Autowired
    private StockRepository stockRepo;
    public List<Stock> listAllCards() {
        return stockRepo.findAll();
    }
}
