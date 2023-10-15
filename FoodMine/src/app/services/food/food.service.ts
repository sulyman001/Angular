import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  getFoodById(id:number): Food{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodsBySearchTerm(searchTerm:string) :Food[]{
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()));
  }

  getAllTags():Tag[]{
    return [
      {name: 'All', count: 14},
      {name: 'Pizza', count: 4},
      {name: 'moimoi', count: 2},
      {name: 'Pizza', count: 3},
      {name: 'Pizza', count: 2},
      {name: 'Pizza', count: 1},
      {name: 'Pizza', count: 1},
      {name: 'Pizza', count: 1},
    ];
  }

  getAllFoodsByTag(tag: any): Food[] {
    return tag == "All" ? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  }

  constructor() { }

  getAll(): Food[]{
    return [
      {
        id: 1,
        name: 'Amala',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/image/foods/image1.jpg',
        tags: [ 'Amala', 'Lunch'],
      },
      {
        id: 2,
        name: 'Pounded Yam',
        cookTime: '10-20',
        price: 10,
        favorite: true,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/image/foods/image2.jpg',
        tags: ['FastFood', 'Pounded Yam', 'Lunch'],
      },
      {
        id: 3,
        name: 'MoiMoi',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/image/foods/image3.jpg',
        tags: ['FastFood', 'MoiMoi', 'Breakfast'],
      },
      {
        id: 4,
        name: 'Eba',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/image/foods/image4.jpg',
        tags: ['FastFood', 'Eba', 'Lunch'],
      },
      {
        id: 5,
        name: 'Ofada Rice',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/image/foods/image5.jpg',
        tags: [ 'Ofada Rice', 'Breakfast'],
      },
      {
        id: 6,
        name: 'Pasta',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/image/foods/image6.jpg',
        tags: ['FastFood', 'Pasta', 'Lunch'],
      },
      {
        id: 7,
        name: 'Jollof Rice',
        cookTime: '10-20',
        price: 10,
        favorite: true,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/image/foods/image7.jpg',
        tags: [ 'Jollof Rice', 'Breakfast'],
      },
      {
        id: 8,
        name: 'Yam',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/image/foods/image8.jpg',
        tags: [ 'Yam', 'Lunch'],
      },
    ]
  }
}
