package net.javaguides.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public class RandomRestaurantRepository extends JpaRepository<String, Long>{
    
}
