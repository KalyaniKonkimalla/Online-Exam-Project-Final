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
import org.springframework.web.bind.annotation.RestController;

import com.capg.exception.RecordNotFoundException;
import com.capg.model.test;
import com.capg.service.TestService;

@RestController
public class testController {
	@Autowired
	TestService service;

	@PostMapping("/test")
	public ResponseEntity<test> createTest(@Validated @RequestBody test test) {
		System.out.println("Rest");
		System.out.println(test);
		test mv = service.addTest(test);
		return new ResponseEntity<test>(mv, HttpStatus.OK);
	}
	@GetMapping("/test/{test_id}")
	public ResponseEntity<test> getByTest_Id(@PathVariable long test_id) throws RecordNotFoundException
	{
		Optional<test> test=service.findByTest_Id(test_id);
		
		if(test.isPresent()) {
			return new ResponseEntity<test>(test.get(), HttpStatus.OK);
		}
		else {
			throw new RecordNotFoundException("Record not found...");
		}
	}



}
