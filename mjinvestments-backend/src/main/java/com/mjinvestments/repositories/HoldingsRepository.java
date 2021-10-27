package com.mjinvestments.repositories;

import java.util.List;
import java.util.Optional;

import com.mjinvestments.POJOClasses.Holdings;
import com.mjinvestments.POJOClasses.Stock;
import com.mjinvestments.POJOClasses.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HoldingsRepository extends JpaRepository<Holdings, Integer> {
    public List<Holdings> findByUserId(Integer userId);

    public Optional<Holdings> findByUserAndStock(User user, Stock stock);
}
