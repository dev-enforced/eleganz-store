import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Tshirts",
    tagLine: "WEAR YOUR BEST MOMENTS",
    imgUrl: "https://i.postimg.cc/NM3jBk6m/staple-6pack-1024x1024.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Casual Pants",
    tagLine: "Simple Yet Elegant",
    imgUrl: "https://i.postimg.cc/QMMtbtN9/2020-New-Men-s-Cotton-Linen-Pants-Male-Summer-Breathable-Solid-Color-Linen-Trousers-Fitness-Streetwe.webp"
  },{
    _id: uuid(),
    categoryName: "Shirts",
    tagLine:"LET YOUR OUTFIT SHOW YOUR SUCCESS",
    imgUrl:"https://i.postimg.cc/QM7F78QZ/PWSU01983-R6-2.jpg"
  },
  {
    _id:uuid(),
    categoryName:"Dresses",
    tagLine:"Discover the inner Diva",
    imgUrl:"https://i.postimg.cc/QM7F78QZ/PWSU01983-R6-2.jpg"
  },
  {
    _id:uuid(),
    categoryName:"Jackets and Coats",
    tagLine:"Where Fashion Meets Class",
    imgUrl:"https://i.postimg.cc/QM7F78QZ/PWSU01983-R6-2.jpg"
  }
];
