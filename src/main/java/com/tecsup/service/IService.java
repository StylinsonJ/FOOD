package com.tecsup.service;

import java.util.Collection;
import java.util.Optional;

public interface IService<T> {
	Collection<T> findAll();
	
	Optional<T> findById(Long id);
	
	T save(T t);
	
	T update(T t);
	
	String deleteById(Long id);
}
