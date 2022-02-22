package com.capg.model;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "test_mgmt")
public class test {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "test_id", length = 200)
	private long test_id;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "course_id")
	private Course course;

	public long getTest_id() {
		return test_id;
	}

	public void setTest_id(long test_id) {
		this.test_id = test_id;
	}

	public Course getCourse() {
		return course;
	}
 public void setCourse(Course course) {
		this.course = course;
	}

	@Override
	public String toString() {
		return "test [test_id=" + test_id + ", course=" + course + "]";
	}


}
