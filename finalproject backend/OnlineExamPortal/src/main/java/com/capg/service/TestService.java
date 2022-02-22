package com.capg.service;
import java.util.Optional;
import com.capg.model.test;
public interface TestService {
	public test addTest(test test);

	public Optional<test> findByTest_Id(long test_id);

}
