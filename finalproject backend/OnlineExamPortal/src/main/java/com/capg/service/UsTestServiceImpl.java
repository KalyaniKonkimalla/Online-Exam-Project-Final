package com.capg.service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capg.exception.CourseNotFoundException;
import com.capg.model.Enrollment;
import com.capg.repository.UsTestRepository;

@Service
public class UsTestServiceImpl implements UsTestService {

	@Autowired
	private UsTestRepository testrepository;

	@Override
	public Enrollment saveEnrollment(Enrollment Testenroll) {
		return testrepository.save(Testenroll);
	}

//	@Override
//	public Enrollment fetchTestByCourseName(Integer tid){
//		 return testrepository.findBy(null, null);
//		 
//	}

	@Override
	public Enrollment updateTestEnrollment(Integer tid, Enrollment testenrollment) {
		Enrollment teen=testrepository.findById(tid).get();
		if(Objects.nonNull(testenrollment.getCourseType()) &&
				!"".equalsIgnoreCase(testenrollment.getCourseType()))
		{
			teen.setCourseType(testenrollment.getCourseType());
		}
		
		if(Objects.nonNull(testenrollment.getStatusCheck()) &&
				!"".equalsIgnoreCase(testenrollment.getStatusCheck()))
		{
			teen.setStatusCheck(testenrollment.getStatusCheck());
		}
		
		return testrepository.save(teen);
	}
	
	@Override
	public List<Enrollment> fetchTestEnrollment() {
		Iterable<Enrollment> iterable= testrepository.findAll();
		List<Enrollment> enrolls= StreamSupport.stream(iterable.spliterator(), false).map(enroll->{
		Enrollment enrol= new Enrollment();
		BeanUtils.copyProperties(enroll, enrol);
		return enrol;
		}).collect(Collectors.toList());
		return enrolls;
		
	}

	@Override
	public Enrollment fetchTestByCourseName(Integer tid) {
		// TODO Auto-generated method stub
		return testrepository.getById(tid);
	}

	}
