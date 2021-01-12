package com.tecsup.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.tecsup.util.MethodUtils;

@ControllerAdvice
public class FoodCustomExceptionHandler {

	@ExceptionHandler(value = ApplicationException.class)
	public ResponseEntity<String> applicationException(ApplicationException exception) {
		HttpStatus status = HttpStatus.BAD_REQUEST;
		return new ResponseEntity<>(MethodUtils.prepareErrorJSON(status, exception), status);
	}

	@ExceptionHandler(value = FoodNotFoundException.class)
	public ResponseEntity<String> bookNotFoundException(FoodNotFoundException exception) {
		HttpStatus status = HttpStatus.NOT_FOUND;
		return new ResponseEntity<>(MethodUtils.prepareErrorJSON(status, exception), status);
	}
}
