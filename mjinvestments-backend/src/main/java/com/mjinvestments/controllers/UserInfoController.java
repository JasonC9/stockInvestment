package com.mjinvestments.controllers;

import java.lang.reflect.Array;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpSession;
import javax.websocket.server.PathParam;

import com.mjinvestments.POJOClasses.User;
import com.mjinvestments.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserInfoController {

    @Autowired
    private UserRepository userRepo;

    @GetMapping("/users/findAll")
    public List<User> getAllUsers(){
        return userRepo.findAll();
    }

    @GetMapping("/users/findUser/{id}")
    public Optional<User> findUsername(@PathVariable int id){
        return userRepo.findById(id);
    }

    @GetMapping("/users/findPassword/{username}")
    public String findPassword(@PathVariable String username){
        User u =  userRepo.findByUsername(username);

        return u.getPass_word();
    }

    //Create user 
    @PostMapping("/user")
    public int createUser(@RequestBody User user, HttpSession session) {
        userRepo.saveAndFlush(user);
        session.setAttribute("user", user);
        return user.getId();
    }


}
