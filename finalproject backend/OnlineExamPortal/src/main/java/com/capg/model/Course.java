package com.capg.model;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "course")
public class Course {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="course_id",length = 200)
	private int course_id;
	
	@Column(name="course_type",length=200,unique=true)
	private String courseType;
	
	@OneToOne(cascade=CascadeType.ALL,mappedBy="course")
	private test test;

	public Course() {

	}

	public Course(String course_type ) {
		this.courseType = course_type;
	}


	public int getCourse_id() {
		return course_id;
	}

	public void setCourse_id(int courseId) {
		this.course_id = courseId;
	}

	public String getCourseType() {
		return courseType;
	}

	public void setCourseType(String courseType) {
		this.courseType = courseType;
	}

	public test getTest() {
		return test;
	}

	public void setTest(test test) {
		this.test = test;
	}

	@Override
	public String toString() {
		return "Course [course_id=" + course_id + ", courseType=" + courseType + ", test=" + test + "]";
	}




}
