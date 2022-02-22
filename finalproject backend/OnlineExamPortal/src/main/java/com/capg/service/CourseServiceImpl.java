package com.capg.service;
import java.util.List;
import java.util.Optional;

import com.capg.model.Course;

public interface CourseServiceImpl {

	public Course addCourse(Course course);

	public Optional<Course> findByCourseId(int course_id);

	public Course findById(int course_id);

	public List<Course> findAllCourse();


}
