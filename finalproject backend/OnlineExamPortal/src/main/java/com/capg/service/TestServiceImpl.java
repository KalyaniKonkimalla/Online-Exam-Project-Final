package com.capg.service;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.capg.model.test;
import com.capg.repository.TestRepository;

@Service
public class TestServiceImpl implements TestService {

	@Autowired
	TestRepository testRepo;
	public test addTest(test test) {
		test ts = testRepo.save(test);
		return ts;
	}
	@Override
	public Optional<test> findByTest_Id(long test_id) {
		return testRepo.findById(test_id);
	}
}
