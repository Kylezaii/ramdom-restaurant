import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../random-restaurant.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-random-restaurant',
  templateUrl: './random-restaurant.component.html',
  styleUrls: ['./random-restaurant.component.css']
})
export class RandomRestaurantComponent implements OnInit {

  restaurantName: string; 
  randomRestaurantDisplay: string;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.employeeService.createNewRestaurant(this.restaurantName).subscribe(
      data => {
        alert('Submission successful');
      },
      error => console.log(error)
    );
  }

  onRandom() {
    this.employeeService.getRandomRestaurant().subscribe(
      data => {
        this.randomRestaurantDisplay = data;
      },
      error => console.log(error)
    );
  }
}
