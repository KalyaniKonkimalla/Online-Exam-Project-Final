package com.capg.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.capg.exception.QuestionNotFoundException;
import com.capg.model.Course;
import com.capg.model.Question;
import com.capg.repository.QuestionRepository;

@Service
public class QuestionService implements QuestionServiceImpl {
	@Autowired
	QuestionRepository dao;
	
	
	@Override
	public Optional<Question> findByQuestionId(int q_id) {
		return dao.findById(q_id);
	}
	
	@Override
	public List<Question> findAllQuestion() {
		List<Question> ques=dao.findAll();
		return ques;
	}

	public Question addQuesion(Question ques) {
		// TODO Auto-generated method stub
		Question q=dao.save(ques);
		return ques;
		
	}

	public Course findById() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public ResponseEntity<Question> getQuestionById(int q_id) throws QuestionNotFoundException {
		Question question = dao.findById(q_id).orElseThrow(() -> new QuestionNotFoundException("Q_ID :: " + q_id + " Not Found"));
		return ResponseEntity.ok().body(question);
	}

	@Override
	public ResponseEntity<Question> updateQuestionById(int q_id, Question question) throws QuestionNotFoundException {
		Question newQuestion = dao.findById(q_id).orElseThrow(() -> new QuestionNotFoundException("Q_ID:: " + q_id + " Not Found"));
		newQuestion.setQ_name(question.getQ_name());
		newQuestion.setOption_a(question.getOption_a());
		newQuestion.setOption_b(question.getOption_b());
		newQuestion.setOption_c(question.getOption_c());
		newQuestion.setOption_d(question.getOption_d());
		final Question updatedQuestion = dao.save(newQuestion);
		return ResponseEntity.ok().body(updatedQuestion);
	}

	@Override
	public ResponseEntity<Question> deleteQuestionById(int q_id) throws QuestionNotFoundException {
		Question question = dao.findById(q_id).orElseThrow(() -> new QuestionNotFoundException("Q_ID :: " + q_id + " Not Found"));
		dao.deleteById(q_id);
		return ResponseEntity.ok().body(question);
	}

	@Override
	public Question addQuestion(Question ques) {
		// TODO Auto-generated method stub
		return null;
	}



}
