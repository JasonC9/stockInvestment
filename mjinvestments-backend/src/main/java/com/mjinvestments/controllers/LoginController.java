package com.mjinvestments.controllers;
import javax.servlet.http.HttpSession;

import com.mjinvestments.POJOClasses.LoginCredentials;
import com.mjinvestments.POJOClasses.User;
import com.mjinvestments.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @Autowired
    private UserRepository userRepo;
    
    @PostMapping("/auth/loginUser")
    public String findUsername(@RequestBody LoginCredentials loginInfo, HttpSession session){
        User u = userRepo.findByUsername(loginInfo.getUsername());
        
        if (loginInfo.getPassword().equals(u.getPass_word())){

            session.setAttribute("id", u.getId());
            session.setAttribute("username", u.getUsername());

            return "success";
        }

        return "fail";
    }

    @GetMapping("/auth/isAuthenticated")
    public String checkAuthentication(HttpSession session){

        if (session.getAttribute("id") == null){
            return "false";
        }

        return "true";
    }

    @GetMapping("/auth/logout")
    public String logoutUser(HttpSession session) {

        session.invalidate();
        return "true";
    }
    @GetMapping("/auth/getUser")
    public String getUsername(HttpSession session)
    {
        return (String)session.getAttribute("username");
        
    }
}
