package com.mjinvestments.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpSession;

import com.mjinvestments.POJOClasses.BuyPacket;
import com.mjinvestments.POJOClasses.Holdings;
import com.mjinvestments.POJOClasses.Stock;
import com.mjinvestments.POJOClasses.User;
import com.mjinvestments.repositories.HoldingsRepository;
import com.mjinvestments.repositories.StockRepository;
import com.mjinvestments.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HoldingsController {

    @Autowired
    HoldingsRepository holdingsRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    StockRepository stockRepository;

    @GetMapping("/holdings/getStocks")
    public List<Stock> getPortfolio(HttpSession session) {
        Integer id = (Integer) (session.getAttribute("id"));
        List<Holdings> holdings = holdingsRepository.findByUserId(id);
        List<Stock> stocks = new ArrayList<Stock>();
        holdings.forEach(holding -> stocks.add(holding.getStock()));
        return stocks;
    }

    @GetMapping("/holdings/getHoldings")
    public List<Holdings> getHoldiings(HttpSession session) {
        Integer id = (Integer) (session.getAttribute("id"));
        List<Holdings> holdings = holdingsRepository.findByUserId(id);
        return holdings;
    }

    @PostMapping("/holdings/buyStock")
    public String buyStock(@RequestBody BuyPacket buyPacket, HttpSession session) {

        Stock buyStock = stockRepository.findById(buyPacket.getStockId());
        User u = userRepository.getById((Integer) session.getAttribute("id"));

        Optional<Holdings> existing = holdingsRepository.findByUserAndStock(u, buyStock);

        if (existing == null) {

            Holdings newHolding = new Holdings();
            newHolding.setStock(buyStock);
            newHolding.setAmount_held(buyPacket.getAmount());
            newHolding.setUser(u);
            buyStock.setTotalInvested(buyStock.getTotalInvested() + buyPacket.getAmount());
            stockRepository.saveAndFlush(buyStock);
            holdingsRepository.saveAndFlush(newHolding);
        } else {
            Holdings updateHolding = existing.orElse(new Holdings());
            updateHolding.setAmount_held(updateHolding.getAmount_held() + buyPacket.getAmount());
            updateHolding.setStock(buyStock);
            updateHolding.setUser(u);
            buyStock.setTotalInvested(buyStock.getTotalInvested() + buyPacket.getAmount());
            stockRepository.saveAndFlush(buyStock);
            holdingsRepository.saveAndFlush(updateHolding);
        }

        return "success";
    }

}
