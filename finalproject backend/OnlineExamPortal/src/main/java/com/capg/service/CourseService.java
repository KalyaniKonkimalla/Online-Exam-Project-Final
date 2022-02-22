package com.capg.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capg.model.Course;
import com.capg.repository.CourseRepository;



@Service
public class CourseService implements CourseServiceImpl{
	@Autowired
	CourseRepository dao;
	
	
	public Course addCourse(Course course)
	{	
		Course c=dao.save(course);
		return c;
	}

	@Override
	public Optional<Course> findByCourseId(int course_id) {
		return dao.findById(course_id);
	}
	
	public Course findById(int course_id)
	{
	Optional<Course> course=dao.findById(course_id);
	return course.get();
	}
	
	@Override
	public List<Course> findAllCourse() {
		List<Course> course=dao.findAll();
		return course;
	
	}

}
