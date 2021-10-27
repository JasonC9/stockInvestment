package com.mjinvestments.controllers;

import javax.servlet.http.HttpSession;

import java.util.List;
import java.util.Optional;
import com.mjinvestments.POJOClasses.Stock;
import com.mjinvestments.repositories.StockRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StockController {

    @Autowired
    private StockRepository stockRepo;

    @GetMapping("/stock/findAll")
    public List<Stock> getAllCards() {
        return stockRepo.findAll();
    }

    @GetMapping("/stock/findById/{stockId}")
    public Stock findByStockname(@PathVariable int stockId) {
        return stockRepo.findById(stockId);
    }

    //Create stock
    @PostMapping("/stock")
    public Stock createStock(@RequestBody Stock stock) {
        return stockRepo.save(stock);
    }

}
