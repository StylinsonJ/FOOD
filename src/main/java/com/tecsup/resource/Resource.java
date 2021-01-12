package com.tecsup.resource;

import org.springframework.data.domain.Pageable;

import java.util.Collection;

import org.springframework.data.domain.Page;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

public interface Resource<T> {
	
	@GetMapping
	//@PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
	ResponseEntity<Collection<T>> findAll();
	
	@GetMapping("{id}")
	ResponseEntity<T> findById(@PathVariable Long id);
	
	@PostMapping(consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	 ResponseEntity<T> save(@RequestBody T t);
	
	@PutMapping(consumes=MediaType.APPLICATION_JSON_UTF8_VALUE)
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	 ResponseEntity<T> update(@RequestBody T t) ;
	
	@DeleteMapping("{id}")
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	 ResponseEntity<String> deleteById(@PathVariable Long id);
	
	/*
	@GetMapping("/search/{searchText}")
	//@PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
	ResponseEntity<Page<T>> findAll(Pageable pageable, @PathVariable String searchText);
	
	@GetMapping
	//@PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
	ResponseEntity<Page<T>> findAll(int pageNumber, int pageSize, String sortBy, String sortDir);
	
*/
	
}
