package com.safar.LogApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.safar.LogApp.model.User;
import com.safar.LogApp.repository.UserRepo;


	@RestController
	@CrossOrigin("http://localhost:3003")
	public class UserController {

	    @Autowired
	    private UserRepo userRepo;

	    @PostMapping("/user")
	    User newUser(@RequestBody User newUser) {
	        
	         return userRepo.save(newUser); 
	    }
	    

	    @GetMapping("/users")
	    List<User> getAllUsers() {
	        return userRepo.findAll();
	    }
	}

