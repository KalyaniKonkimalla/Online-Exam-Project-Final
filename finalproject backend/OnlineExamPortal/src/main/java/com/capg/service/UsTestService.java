package com.capg.service;

import java.util.List;

import com.capg.exception.CourseNotFoundException;
import com.capg.model.Enrollment;

public interface UsTestService  {
	
	public Enrollment saveEnrollment(Enrollment Testenroll);
	
//	public Enrollment fetchTestByCourseName(Integer tid);
	
	public Enrollment updateTestEnrollment(Integer tid, Enrollment testenrollment);
	
	public List<Enrollment> fetchTestEnrollment();

	public Enrollment fetchTestByCourseName(Integer tid);

}
