package com.mjinvestments.services;

import java.util.List;

import com.mjinvestments.POJOClasses.User;
import com.mjinvestments.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;

    public List<User> listUsers() {
        return userRepository.findAll();
    }
}
