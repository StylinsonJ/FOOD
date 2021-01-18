package com.tecsup.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.tecsup.model.Food;

@Repository
public interface FoodRepository extends PagingAndSortingRepository<Food, Long> {

	@Query("FROM Food f WHERE f.type=:searchText OR f.title LIKE %:searchText% ORDER BY f.price ASC")
	Page<Food> findAllFoods(Pageable pageable, @Param("searchText") String searchText);
}
