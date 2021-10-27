package com.mjinvestments.POJOClasses;

public class BuyPacket {

    private int stockId;
    private float amount;

    public int getStockId() {
        return this.stockId;
    }

    public void setStockId(int stockId) {
        this.stockId = stockId;
    }

    public float getAmount() {
        return this.amount;
    }

    public void setAmount(float amount) {
        this.amount = amount;
    }

    public BuyPacket() {
    }

    public BuyPacket(int stockId, float amount) {
        this.stockId = stockId;
        this.amount = amount;
    }

}
