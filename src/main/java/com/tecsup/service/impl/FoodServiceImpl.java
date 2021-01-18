package com.tecsup.service.impl;

import java.util.Optional;

import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.tecsup.model.Food;
import com.tecsup.repository.FoodRepository;
import com.tecsup.service.IPageService;
import com.tecsup.service.IService;

@Service
public class FoodServiceImpl implements IService<Food>, IPageService<Food>{

	@Autowired 
	private FoodRepository foodRepository;

	
	@Override
	public Page<Food> findAll(Pageable pageable, String searchText) {
		return foodRepository.findAllFoods(pageable, searchText);
	}
	
	@Override
	public Page<Food> findAll(Pageable pageable) {
		return foodRepository.findAll(pageable);
	}

	@Override
	public Optional<Food> findById(Long id) {
		return foodRepository.findById(id);
	}

	@Override
	public Food save(Food food) {
		return foodRepository.save(food);
	}

	@Override
	public Food update(Food food) {
		return foodRepository.save(food);
	}

	@Override
	public String deleteById(Long id) {
		JSONObject jsonObject = new JSONObject();
		try {
			foodRepository.deleteById(id);
			jsonObject.put("message", "Food deleted successfully");
		}catch (JSONException e) {
			e.printStackTrace();
		}
		return jsonObject.toString();
	}


}
