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
    imgUrl: "https://cdn.shopify.com/s/files/1/0220/4008/4552/products/staple_6pack_1024x1024.jpg?v=1640718788"
  },
  {
    _id: uuid(),
    categoryName: "Casual Pants",
    tagLine: "Simple Yet Elegant",
    imgUrl: "https://ae01.alicdn.com/kf/H0218744e90d1406288714f11429ea24ex/2020-New-Men-s-Cotton-Linen-Pants-Male-Summer-Breathable-Solid-Color-Linen-Trousers-Fitness-Streetwear.jpg_Q90.jpg_.webp"
  },{
    _id: uuid(),
    categoryName: "Shirts",
    tagLine:"LET YOUR OUTFIT SHOW YOUR SUCCESS",
    imgUrl:"https://www.myraymond.com/media/product/PWSU01983-R6/PWSU01983-R6%20(2).jpg"
  },
  {
    _id:uuid(),
    categoryName:"Dresses",
    tagLine:"Discover the inner Diva",
    imgUrl:"https://www.myraymond.com/media/product/PWEX00881-K8/PWEX00881-K8%20(1).jpg"
  },
  {
    _id:uuid(),
    categoryName:"Jackets and Coats",
    tagLine:"Where Fashion Meets Class",
    imgUrl:"https://www.myraymond.com/media/product/PMJS02006-O7/PMJS02006-O7%20(1).jpg"
  }
];
