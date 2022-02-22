package com.capg.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capg.exception.QuestionNotFoundException;
import com.capg.model.Question;
import com.capg.service.CourseService;
import com.capg.service.QuestionService;

@RestController
@RequestMapping("/question")
public class QuestionRestController {

	@Autowired
	private QuestionService service;

	@Autowired
	private CourseService courseService;
	
	@PostMapping("/createQuestion")
	public ResponseEntity<Question> createQuestion(@Validated @RequestBody Question ques) {
		Question a = service.addQuesion(ques);
		System.out.println(a);
		return new ResponseEntity<Question>(a, HttpStatus.OK);
	}
	@GetMapping("/question/{id}")
	public ResponseEntity<Question> getQuestionById(@PathVariable(value = "id") int q_id) throws QuestionNotFoundException
	{
		return service.getQuestionById(q_id);
	}

	
	@GetMapping("/fetchQuestion")
	public ResponseEntity<List<Question>> fetchQuestion() {
		List<Question> ques = service.findAllQuestion();
		return ResponseEntity.ok().body(ques);
	}
	
	@DeleteMapping("/question/{id}")
	public ResponseEntity<Question> deleteQuestionById(@PathVariable(value = "id") int q_id) throws QuestionNotFoundException
	{
		return service.deleteQuestionById(q_id);
	}
	@PutMapping("/question/{id}")
	public ResponseEntity<Question> updateQuestionById(@PathVariable(value = "id") int q_id, @RequestBody Question question) throws QuestionNotFoundException
	{
		return service.updateQuestionById(q_id, question);
	}


}
