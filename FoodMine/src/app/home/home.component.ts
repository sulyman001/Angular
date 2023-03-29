import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { UntypedFormControl } from '@angular/forms';
import { Tag } from '../shared/models/tag';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy, AfterViewInit, OnChanges {

  tags: Tag[] = []
  searchInputControl: UntypedFormControl = new UntypedFormControl();
  foods: Food[] = [];
  constructor(private foodService:FoodService, private route:ActivatedRoute) { }

  get searchTerm(): string{
    return this.searchInputControl.value;
  }

  ngOnInit(): void{
    // this.route.params.subscribe(params => {
    //   if (params['searchTerm'])
    //     // this.foods = this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
    //     this.foodService.getAll().filter(food =>
    //       food.name.toLocaleLowerCase().includes(params['searchTerm'].toLocaleLowerCase()));
    //   else if(params['tag'])
    //       this.foods = this.foodService.getAllFoodsByTag(params['tag']);
    //   else
    //     this.foods = this.foodService.getAll();
    // })

    // this.foods = this.foodService.getAll();

    this.getAllFood();

    localStorage.setItem("cars", "BMW");
  }

  ngOnDestroy(): void {
    // this.foods = [];

    localStorage.setItem("cars", "Geely");
  }

  ngAfterViewInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  getAllFood(): void{
    console.log('Fetching');
    this.foods = this.foodService.getAll()
    console.log(this.foods);
  }

  getAllTags(){
    this.tags = this.foodService.getAllTags();
  }
}
