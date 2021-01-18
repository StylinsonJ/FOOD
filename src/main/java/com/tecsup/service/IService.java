package com.tecsup.service;

import java.util.Optional;


public interface IService<T> {

	Optional<T> findById(Long id);
	
	T save(T t);
	
	T update(T t);
	
	String deleteById(Long id);
}
