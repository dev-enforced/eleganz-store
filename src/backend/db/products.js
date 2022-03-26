import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */
// List of Categories=["Tshirts","Shirts","Jackets and Coats","Dresses","Casual Pants"]
// For Tshirts["H&M(2)","Lyra(1)","Louis Philippe(1)"]
// List of brands for Jackets=["H&M(1)",'Bewakoof (2)',"Louis Philippe(1)"]
// For Shirts ["H&M","Peter England","Lyra","Bewakoof"]
// For Dresses["H&m(2)","Bewakoof(1)","Lyra(1)"]
// For Casual Pants["H&m(2)","Bewakoof(1)","Lyra(1)"]
export const products = [
  // Tshirts
  {
    _id: uuid(),
    title: "Cotton Tshirt",
    categoryName: "Tshirts",
    imgUrl: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F78%2F12%2F7812bbdd4b5f96063077a28c93f4201b67fe7c3e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    ratings: "4",
    originalPrice: "799",
    discountedPrice: "599",
    discount: "25",
    brand: "H&M",
    inStock: true,
    wornBy: "Women"
  },
  {
    _id: uuid(),
    title: "Rugby Tshirt",
    categoryName: "Tshirts",
    imgUrl: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F5e%2F30%2F5e30f492a8ac9132a8baa65578174bf98af5e5eb.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
    ratings: "5",
    originalPrice: "1499",
    discountedPrice: "749",
    discount: "50",
    brand: "H&M",
    inStock: true,
    wornBy: "Men"
  },
  {
    _id: uuid(),
    title: "V-Neck Tshirt",
    categoryName: "Tshirts",
    imgUrl: "https://mylyra.com/wp-content/uploads/2019/06/870x1110-px-V-T-Shirt.jpg",
    ratings: "4",
    originalPrice: "385",
    discountedPrice: "315",
    discount: "18",
    brand: "Lyra",
    inStock: true,
    wornBy: "Women"
  },
  {
    _id: uuid(),
    title: "Yellow Tshirt",
    categoryName: "Tshirts",
    imgUrl: "https://louisphilippe.imgix.net/img/app/product/5/566509-4957843.jpg?auto=format",
    ratings: "5",
    originalPrice: "1499",
    discountedPrice: "899",
    discount: "40",
    brand: "Louis Philippe",
    inStock: true,
    wornBy: "Men"
  },
  // Jackets and Coats
  {
    _id: uuid(),
    title: "Green Full Sleeve Jacket",
    categoryName: "Jackets and Coats",
    imgUrl: "https://images.bewakoof.com/t540/breakbounce-men-regular-fit-jacket-445634-1636453790-1.jpg",
    ratings: "4.1",
    originalPrice: "2999",
    discountedPrice: "1467",
    discount: "51",
    brand: "Louis Philippe",
    inStock: true,
    wornBy: "Men"
  },
  {
    _id: uuid(),
    title: "Double Layered Blazers by Express",
    categoryName: "Jackets and Coats",
    imgUrl: "https://images.express.com/is/image/expressfashion/0078_06746757_0058_f100?cache=on&wid=960&fmt=jpeg&qlt=85,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon",
    ratings: "4",
    originalPrice: "3500",
    discountedPrice: "3000",
    discount: "14",
    brand: "Bewakoof",
    inStock: false,
    wornBy: "Women"
  },
  {
    _id: uuid(),
    title: "Orange Sleeveless Jacket",
    categoryName: "Jackets and Coats",
    imgUrl: "https://images.bewakoof.com/t540/orange-sleeveless-color-block-puffer-jacket-aw-21-men-s-mpjaw50-sleeveless-color-block-puffer-jacket-aw-21-plain-364945-1633095315.jpg",
    ratings: "3.6",
    originalPrice: "2949",
    discountedPrice: "1049",
    discount: "64",
    brand: "Bewakoof",
    inStock: true,
    wornBy: "Men"
  },
  {
    _id: uuid(),
    title: "Dark Brown Baseball Jacket",
    categoryName: "Jackets and Coats",
    imgUrl: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F2a%2F10%2F2a10d826b2836e0ee40b34f5044b890fdf94a7bd.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
    ratings: "5",
    originalPrice: "3000",
    discountedPrice: "2700",
    discount: "10",
    brand: "H&M",
    inStock: true,
    wornBy: "Women"
  },
  // Shirts
  {
    _id: uuid(),
    title: "Dark Green Checkered Shirt",
    categoryName: "Shirts",
    imgUrl: "https://rukminim2.flixcart.com/image/746/895/kydb3ww0/shirt/3/o/o/5xl-zub131-zublee-original-imagam6v7bdgkhhn.jpeg?q=50",
    ratings: "4.2",
    originalPrice: "999",
    discountedPrice: "348",
    discount: "65",
    brand: "H&M",
    inStock: true,
    wornBy: "Women"
  },
  {
    _id: uuid(),
    title: "Blue Full Sleeves Shirt",
    categoryName: "Shirts",
    imgUrl: "https://peterengland.imgix.net/img/app/product/6/666355-6849067.jpg?auto=format&w=600",
    ratings: "4.5",
    originalPrice: "1999",
    discountedPrice: "1799",
    discount: "10",
    brand: "Peter England",
    inStock: true,
    wornBy: "Men"
  },
  {
    _id: uuid(),
    title: "Regular Fit Casual",
    categoryName: "Shirts",
    imgUrl: "https://rukminim2.flixcart.com/image/746/895/knj7wcw0/shirt/n/6/1/xl-4127-darzi-original-imag26ubd9xh2sak.jpeg?q=50",
    ratings: "4",
    originalPrice: "1000",
    discountedPrice: "400",
    discount: "60",
    brand: "Lyra",
    inStock: true,
    wornBy: "Women"
  },
  {
    _id: uuid(),
    title: "White Half Sleeve Shirt",
    categoryName: "Shirts",
    imgUrl: "https://images.bewakoof.com/t540/white-text-aop-half-sleeve-shirt-352182-1634190378-2.jpg",
    ratings: "3.5",
    originalPrice: "1399",
    discountedPrice: "699",
    discount: "50",
    brand: "Bewakoof",
    inStock: true,
    wornBy: "Men"
  },
  // Dresses
  {
    _id: uuid(),
    title: "Floral Dress",
    categoryName: "Dresses",
    imgUrl: "https://forever21.imgix.net/img/app/product/3/39567034-7117050.jpg?w=573&auto=format",
    ratings: "3.8",
    originalPrice: "2000",
    discountedPrice: "1700",
    discount: "15",
    brand: "Lyra",
    inStock: true,
    wornBy: "Women"
  },
  {
    _id: uuid(),
    title: "Women Fit and Flare Dress",
    categoryName: "Dresses",
    imgUrl: "https://rukminim2.flixcart.com/image/746/895/kv2pk7k0/dress/k/h/i/xs-1097-sheetal-associates-original-imag8fudhhckymnf.jpeg?q=50",
    ratings: "4.4",
    originalPrice: "1999",
    discountedPrice: "459",
    discount: "77",
    brand: "H&M",
    inStock: true,
    wornBy: "Women"
  },
  {
    _id: uuid(),
    title: "A-Line Multicolor Dress",
    categoryName: "Dresses",
    imgUrl: "https://rukminim2.flixcart.com/image/746/895/kkwwu4w0/dress/r/x/n/xxl-lucy-051-purvaja-original-imagy5zsuqya7jyh.jpeg?q=50",
    ratings: "3.7",
    originalPrice: "2400",
    discountedPrice: "1200",
    discount: "50",
    brand: "Bewakoof",
    inStock: true,
    wornBy: "Women"
  },
  {
    _id: uuid(),
    title: "Ruffled Pink Dress",
    categoryName: "Dresses",
    imgUrl: "https://rukminim2.flixcart.com/image/746/895/kirr24w0-0/dress/i/h/a/m-md146-oomph-original-imafyhyhct6jbfks.jpeg?q=50",
    ratings: "4",
    originalPrice: "2000",
    discountedPrice: "399",
    discount: "80",
    brand: "H&M",
    inStock: true,
    wornBy: "Women"
  },
  // Casual Pants
  {
    _id: uuid(),
    title: "Cotton Blend Trousers",
    categoryName: "Casual Pants",
    imgUrl: "https://rukminim2.flixcart.com/image/746/895/ke1pnrk0-0/trouser/j/0/q/32-ttp0000481-tokyo-talkies-original-imafutds2nyegaww.jpeg?q=50",
    ratings: "4.5",
    originalPrice: "700",
    discountedPrice: "1400",
    discount: "50",
    brand: "Lyra",
    inStock: true,
    wornBy: "Women"
  },
  {
    _id: uuid(),
    title: "Olive Drawstring Hem Cargo Pants",
    categoryName: "Casual Pants",
    imgUrl: "https://images.bewakoof.com/t540/olive-drawstring-hem-cargo-pants-433775-1644332735-4.jpg",
    ratings: "4.4",
    originalPrice: "1499",
    discountedPrice: "1299",
    discount: "13",
    brand: "H&M",
    inStock: true,
    wornBy: "Men"
  },
  {
    _id: uuid(),
    title: "Loose Comfort Fit Brown Pants",
    categoryName: "Casual Pants",
    imgUrl: "https://images.bewakoof.com/t540/freakins-women-brown-solid-loose-comfort-fit-casual-pants-451759-1637594684-1.jpg",
    ratings: "4",
    originalPrice: "1590",
    discountedPrice: "999",
    discount: "37",
    brand: "Bewakoof",
    inStock: false,
    wornBy: "Women"
  },
  {
    _id: uuid(),
    title: "Beige Slim Fit Trousers",
    categoryName: "Casual Pants",
    imgUrl: "https://images.bewakoof.com/t540/men-s-beige-slim-fit-trousers-479443-1645780940-5.jpg",
    ratings: "5",
    originalPrice: "2499",
    discountedPrice: "1499",
    discount: "40",
    brand: "H&M",
    inStock: true,
    wornBy: "Men"
  }
];

// Default Obj
// {
//     _id:uuid(),
//     title:"",
//     categoryName:"Shirts",
//     imgUrl:"",
//     ratings:"",
//     originalPrice:"",
//     discountedPrice:"",
//     discount:"",
//     brand:"",
//     inStock:"",
//     wornBy:""
// }
