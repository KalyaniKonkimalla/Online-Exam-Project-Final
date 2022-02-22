package com.capg.exception;

public class CourseNotFoundException extends Exception{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	public CourseNotFoundException() {
		
		super();
	}
	public CourseNotFoundException(String message)
	{
		super(message);
	}
	public CourseNotFoundException(String message,Throwable cause) {
		
		super(message,cause);
	}
	public CourseNotFoundException(Throwable cause) {
		
		super(cause);
	}

}
