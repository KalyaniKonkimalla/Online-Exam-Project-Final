package com.capg.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.capg.exception.UserNotFoundException;
import com.capg.model.User;
import com.capg.repository.UserRepository;



@Service

public class UserServiceImpl implements UserService {
	@Autowired
	 UserRepository userRepository;


@Override
	public String registerUser( User user) {
		List<User> users = userRepository.findAll();
		for (User other : users) {
			if (other.equals(user)) {
				return "USER_ALREADY_EXISTS";
			}
		}
		userRepository.save(user);
		return "SUCCESS";
	}
	
@Override
	public String loginUser(User user) {
		List<User> users = userRepository.findAll();
		for (User other : users) {
			if (other!=user) {
				return "FAILURE";
			}
		}
		return "SUCCESS";
	}
	
@Override
	public ResponseEntity<User> getUserById(Long userId) throws UserNotFoundException {
		User user = userRepository.findById(userId).orElseThrow(() -> new UserNotFoundException("User ID :: " + userId + " Not Found"));
		return ResponseEntity.ok().body(user);
	}

@Override
	public ResponseEntity<User> updateUserById(Long userId, User user) throws UserNotFoundException {
		User newUser = userRepository.findById(userId).orElseThrow(() -> new UserNotFoundException("User ID :: " + userId + " Not Found"));
		// update data here
		newUser.setUsername(user.getUsername());
		newUser.setUseremail(user.getUseremail());
		newUser.setUsermobileno(user.getUsermobileno());
		newUser.setPassword(user.getPassword());
		final User updatedUser = userRepository.save(newUser);
		return ResponseEntity.ok().body(updatedUser);
	}
	
	
@Override
	public ResponseEntity<User> deleteUserById(Long userId) throws UserNotFoundException {
		User user = userRepository.findById(userId).orElseThrow(() -> new UserNotFoundException("User ID :: " + userId + " Not Found"));
		userRepository.deleteById(userId);
		return ResponseEntity.ok().body(user);
	}

}
