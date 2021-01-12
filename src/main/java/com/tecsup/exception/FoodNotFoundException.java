package com.tecsup.exception;

public class FoodNotFoundException extends RuntimeException {

	private static final long serialVersionUID = -2533194229906054487L;

	public FoodNotFoundException(String message) {
		super(message);
	}

}
