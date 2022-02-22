package com.capg.service;
import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;

import com.capg.exception.QuestionNotFoundException;
import com.capg.model.Question;
public interface QuestionServiceImpl {
	public Question addQuestion(Question ques);

	public Optional<Question> findByQuestionId(int q_id);

	public List<Question> findAllQuestion();
	public ResponseEntity<Question> getQuestionById(int q_id) throws QuestionNotFoundException;
	public ResponseEntity<Question> updateQuestionById(int q_id, Question question) throws QuestionNotFoundException;
	public ResponseEntity<Question> deleteQuestionById(int q_id) throws QuestionNotFoundException;



}
