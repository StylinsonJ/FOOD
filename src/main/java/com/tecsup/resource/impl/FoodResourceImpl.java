package com.tecsup.resource.impl;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.util.Arrays;
import java.util.Collection;
import java.util.Optional;
import java.util.Set;
import java.util.TreeSet;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tecsup.domain.Food;
import com.tecsup.resource.Resource;
import com.tecsup.service.IPageService;
import com.tecsup.service.IService;

@RestController
@RequestMapping("/foods")
@CrossOrigin(origins="http://localhost:3000")
public class FoodResourceImpl  implements Resource<Food>{
	
	private static Logger log = LoggerFactory.getLogger(FoodResourceImpl.class);

	@Autowired
	private IService<Food> foodService;
	
	/*@Autowired
	private IPageService<Food> foodPageService;

	@Override
	public ResponseEntity<Page<Food>> findAll(Pageable pageable, String searchText) {
		return new ResponseEntity<>(foodPageService.findAll(pageable, searchText), HttpStatus.OK);
	}
	
	@Override
	public ResponseEntity<Page<Food>> findAll(int pageNumber, int pageSize, String sortBy, String sortDir) {
		return new ResponseEntity<>(foodPageService.findAll(
				PageRequest.of(
						pageNumber, pageSize,
						sortDir.equalsIgnoreCase("asc") ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending()
						)
				), HttpStatus.OK);
	}*/

	@Override
	public ResponseEntity<Collection<Food>> findAll() {
		log.info("BookResourceImpl - findAll");
		return new ResponseEntity<>(foodService.findAll(), HttpStatus.OK);
	}
	

	@Override
	public ResponseEntity<Food> findById(Long id) {
		Optional<Food> food = foodService.findById(id);
		return new ResponseEntity<>(food.get() , HttpStatus.OK);	
	}

	@Override
	public ResponseEntity<Food> save(Food food) {
		return new ResponseEntity<>(foodService.save(food), HttpStatus.CREATED);
	}

	@Override
	public ResponseEntity<Food> update(Food food) {
		return new ResponseEntity<>(foodService.update(food), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<String> deleteById(Long id) {
		Optional<Food> food = foodService.findById(id);
		return new ResponseEntity<>(foodService.deleteById(id), HttpStatus.OK);
	}
	
	@GetMapping("/types")
	public ResponseEntity<Set<String>> findAllTypes(){
		return new ResponseEntity<>(new TreeSet<>(Arrays.asList("Desayuno","Almuerzo","Postre")), HttpStatus.OK);
	}

	
}

