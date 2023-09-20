import { Category } from "../core/models/Category";
import { Restaurant } from "../core/models/Restaurant";

export const meals: Category[] = [
  {
    id: 1,
    name: "Candies",
    meals: [
      {
        id: 1,
        name: "Meal 1",
        description: "Description for Meal 1",
        price: 20,
        rating: 4,
        image: "/nou.jpg",
      },
      {
        id: 2,
        name: "Meal 2",
        description: "Description for Meal 2",
        price: 25,
        rating: 3,
        image: "/nou.jpg",
      },
      // Add more meals as needed
    ],
  },
  {
    id: 2,
    name: "Category",
    meals: [
      {
        id: 3,
        name: "Meal 3",
        description: "Description for Meal 3",
        price: 18,
        rating: 5,
        image: "/nou.jpg",
      },
      {
        id: 4,
        name: "Meal 4",
        description: "Description for Meal 4",
        price: 30,
        rating: 4,
        image: "/nou.jpg",
      },
      // Add more meals as needed
    ],
  },
  // Add more categories and meals to reach around 30 items
  {
    id: 3,
    name: "Category candies",
    meals: [
      {
        id: 5,
        name: "Meal 5",
        description: "Description for Meal 5",
        price: 15,
        rating: 3,
        image: "/nou.jpg",
      },
      {
        id: 6,
        name: "Meal 6",
        description: "Description for Meal 6",
        price: 22,
        rating: 4,
        image: "/nou.jpg",
      },
      // Add more meals as needed
    ],
  },
  {
    id: 4,
    name: "Cold",
    meals: [
      {
        id: 7,
        name: "Hummus plate",
        description: "test tes loc dskol ",
        price: 30,
        rating: 3,
        image: "/nou.jpg",
      },
      {
        id: 8,
        name: "Hummus plate",
        description: "test tes loc dskol ",
        price: 35,
        rating: 5,
        image: "/nou.jpg",
      },
    ],
  },
  {
    id: 5,
    name: "Hot dishes",
    meals: [
      {
        id: 9,
        name: "Hummus plate",
        description: "test tes loc dskol ",
        price: 30,
        rating: 3,
        image: "/nou.jpg",
      },
      {
        id: 10,
        name: "Hummus plate",
        description: "test tes loc dskol ",
        price: 35,
        rating: 5,
        image: "/nou.jpg",
      },
    ],
  },
  {
    id: 6,
    name: "Soup",
    meals: [
      {
        id: 11,
        name: "Hummus",
        description: "test tes loc dskol ",
        price: 30,
        rating: 3,
        image: "/nou.jpg",
      },
      {
        id: 12,
        name: "Soup",
        description: "test tes loc dskol ",
        price: 35,
        rating: 5,
        image: "/nou.jpg",
      },
    ],
  },
  {
    id: 7,
    name: "Hot Soup",
    meals: [
      {
        id: 13,
        name: "Hummus",
        description: "test tes loc dskol ",
        price: 30,
        rating: 3,
        image: "/nou.jpg",
      },
      {
        id: 14,
        name: "Soup",
        description: "test tes loc dskol ",
        price: 35,
        rating: 5,
        image: "/nou.jpg",
      },
      {
        id: 15,
        name: "sou s",
        description: "test tes loc dskol ",
        price: 36,
        rating: 2,
        image: "/nou.jpg",
      },
    ],
  },
];

export const restaurant: Restaurant = {
  id: 1,
  name: 'Jawharat Esham Restaurent',
  address: 'Wafi Mall, First Floor, Horus, Phase 5, Dubai',
  lang: 'Arabic',
  rating: 3,
  image: '/nou.jpg'
}