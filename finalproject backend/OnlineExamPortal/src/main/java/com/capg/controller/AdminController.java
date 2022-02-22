package com.capg.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capg.exception.RecordNotFoundException;
import com.capg.model.AdminLogin;
import com.capg.service.AdminService;

@RestController
@RequestMapping("/admin")
public class AdminController {
	
	@Autowired
	AdminService service;
	
	@PostMapping("/createAdmin")
	public ResponseEntity<AdminLogin> createAdmin(@Validated @RequestBody AdminLogin admin)
	{
		AdminLogin a = service.addAdmin(admin);
		System.out.println(a);
		return new ResponseEntity<AdminLogin>(a, HttpStatus.OK);
		
	}
	
	@GetMapping("/{admin_id}")
	public ResponseEntity<AdminLogin> findByAdminId(@PathVariable int admin_id) throws RecordNotFoundException
	{
		Optional<AdminLogin> adminlogin=service.findByAdminId(admin_id);
		
		if(adminlogin.isPresent())
		{
			return new ResponseEntity<>(adminlogin.get(), HttpStatus.OK);
		} 
		else
		{
			throw new RecordNotFoundException("username is not found");
			
		}
	}

}
