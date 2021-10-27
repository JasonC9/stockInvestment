package com.mjinvestments.POJOClasses;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import java.util.Set;

import org.hibernate.annotations.Type;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

@EnableAutoConfiguration
@Entity
@Table(name = "MJ_STOCK")
public class Stock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int stockId;
    private String stockName;
    @Type(type = "text")
    private String img;
    @Type(type = "text")
    private String description;
    private double totalInvested;
    private double marketCap;
    private double price;

    @OneToMany(mappedBy = "stock")
    Set<Holdings> holdings;

    public Stock() {
    }

    public Stock(int stockId, String stockName, String img, String description, double totalInvested, double marketCap,
            double price) {
        this.stockId = stockId;
        this.stockName = stockName;
        this.img = img;
        this.description = description;
        this.totalInvested = totalInvested;
        this.marketCap = marketCap;
        this.price = price;
    }

    public double getPrice() {
        return this.price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getStockId() {
        return this.stockId;
    }

    public void setStockId(int stockId) {
        this.stockId = stockId;
    }

    public String getStockName() {
        return this.stockName;
    }

    public void setStockName(String stockName) {
        this.stockName = stockName;
    }

    public String getImg() {
        return this.img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getTotalInvested() {
        return this.totalInvested;
    }

    public void setTotalInvested(double totalInvested) {
        this.totalInvested = totalInvested;
    }

    public double getMarketCap() {
        return this.marketCap;
    }

    public void setMarketCap(double marketCap) {
        this.marketCap = marketCap;
    }

}