import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Food[]{
    return [
      {
        id: 1,
        name: 'Pizza',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/image/foods/image1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],     
      },
      {
        id: 2,
        name: 'Pizza',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/image/foods/image2.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],     
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
        tags: ['FastFood', 'Pizza', 'Lunch'],     
      },
      {
        id: 4,
        name: 'Pizza',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/image/foods/image4.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],     
      },
      {
        id: 5,
        name: 'Pizza',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/image/foods/image5.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],     
      },
      {
        id: 6,
        name: 'Pizza',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/image/foods/image6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],     
      },
      {
        id: 6,
        name: 'Pizza',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/image/foods/image7.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],     
      },
      {
        id: 6,
        name: 'Pizza',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/image/foods/image8.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],     
      },
    ]
  }
}
