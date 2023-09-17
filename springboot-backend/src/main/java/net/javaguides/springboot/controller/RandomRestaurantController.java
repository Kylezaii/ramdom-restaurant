package net.javaguides.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.repository.EmployeeRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class RandomRestaurantController {

	@Autowired
	private RandomRestaurantRepository randomRestaurantRepository;

	@GetMapping("/getRandomRestaurant")
	public String getRandomRestaurant() {
		List<String> restaurantNames = Arrays.asList("Pizza Hut","McDonalds","KFC","MosBurger","TexasChiken","Kopitiam");
		Random random = new Random();
		int randomIndex = random.nextInt(restaurantNames.size()); 
		String randomRestaurant = restaurantNames.get(randomIndex); 
	
		return randomRestaurant;
	}		
	
	@PostMapping("/createNewRestaurant")
	public Striug createEmployee(@RequestBody String restaurant) {
		return randomRestaurantRepository.save(restaurant);
	}

	
}
