package com.capg.service;

import org.springframework.http.ResponseEntity;

import com.capg.exception.UserNotFoundException;
import com.capg.model.User;

public interface UserService {
public String registerUser( User user);
	
	
	public ResponseEntity<User> getUserById(Long userId) throws UserNotFoundException;
	
	public ResponseEntity<User> updateUserById(Long userId, User user) throws UserNotFoundException;
	
	public ResponseEntity<User> deleteUserById(Long userId) throws UserNotFoundException;

	public String loginUser(User user);

}
