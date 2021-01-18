package com.tecsup;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.tecsup.model.Food;
import com.tecsup.service.IService;
@SpringBootApplication
public class Application implements CommandLineRunner{
	
	
	@Autowired
	private IService<Food> foodService;

	
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
/*				
		if(roleService.findAll().isEmpty()) {
			roleService.save(new Role(1L, "admin"));
			roleService.save(new Role(2L, "user"));
		}
		
		if(userService.findAll().isEmpty()) {
			User user1 = new User();
			user1.setEmail("aaa@food.com");
			user1.setName("Jassyra User");
			user1.setPhone("912348768");
			user1.setRole(roleService.findById(2L).get());
			user1.setPassword(new BCryptPasswordEncoder().encode("aaa"));
			userService.save(user1);
			
			User user2 = new User();
			user2.setEmail("food@food.com");
			user2.setName("Admin");
			user2.setPhone("965431789");
			user2.setRole(roleService.findById(1L).get());
			user2.setPassword(new BCryptPasswordEncoder().encode("food"));
			userService.save(user2);
		}
		*/
		for (int i = 1; i <= 5; i++) {
				Food food = new Food();
				food.setTitle("Ceviche"+i);
				food.setDescription("De concha negra"+i);
				food.setCoverPhotoURL("https://t1.rg.ltmcdn.com/es/images/7/4/1/ceviche_peruano_18147_600_square.jpg");
				food.setPrice(10.50+i);
				food.setType("Almuerzo");
				foodService.save(food);
			
		}
	}
}