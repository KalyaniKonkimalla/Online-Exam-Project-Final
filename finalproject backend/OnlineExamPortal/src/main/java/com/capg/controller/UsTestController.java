package com.capg.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capg.exception.CourseNotFoundException;
import com.capg.model.Enrollment;
import com.capg.service.UsTestService;

@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/testEnroll")
@RestController
public class UsTestController {
	

	@Autowired
	private UsTestService TestService;
	
	@PostMapping("/saveEnrollment")
	public Enrollment saveEnrollement(@Valid @RequestBody Enrollment Testenroll)
	{
		
		return TestService.saveEnrollment(Testenroll);
	}
	@GetMapping("/getEnrollment")
	public List<Enrollment> fetchTestEnrollment() 
	{
		return TestService.fetchTestEnrollment();
	}

	
	@GetMapping("/saveEnrollment/{tid}")
	public Enrollment fetchTestByCourseName(@PathVariable("tid") Integer tid) 
	{
		return TestService.fetchTestByCourseName(tid);
	}
	
	@PutMapping("/{tid}")
	public Enrollment updateTestEnrollment(@PathVariable("tid") Integer tid,
												@RequestBody Enrollment testenrollment)
	{
		return TestService.updateTestEnrollment(tid,testenrollment);
	}

}
