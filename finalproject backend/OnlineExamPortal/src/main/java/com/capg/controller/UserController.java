package com.capg.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capg.exception.UserNotFoundException;
import com.capg.model.User;
import com.capg.service.UserService;

@RequestMapping("/user")
@RestController
@CrossOrigin(origins="http://localhost:3000")
public class UserController {

	@Autowired
	private UserService userService;
	
	@PostMapping("/user/register")
	public String registerUser( @RequestBody User user) {
		return userService.registerUser(user);
	}
	
	@PostMapping("/user/login")
	public String loginUser( @RequestBody User user) {
        return userService.loginUser(user);
    }
	
	
	@GetMapping("/user/{id}")
	public ResponseEntity<User> getUserById(@PathVariable(value = "id") Long userId) throws UserNotFoundException{
		return userService.getUserById(userId);
	}
	
	@PutMapping("/user/{id}")
	public ResponseEntity<User> updateUserById(@PathVariable(value = "id") Long userId, @RequestBody User user) throws UserNotFoundException{
		return userService.updateUserById(userId, user);
	}
	
	@DeleteMapping("/user/{id}")
	public ResponseEntity<User> deleteUserById(@PathVariable(value = "id") Long userId) throws UserNotFoundException{
		return userService.deleteUserById(userId);
	}

}
