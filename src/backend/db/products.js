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
    imgUrl:
      "https://res.cloudinary.com/ddid3uux8/image/upload/v1658905078/Eleganz-Store-Assets/hmgoepprod_rf3rum.jpg",
    ratings: "4",
    originalPrice: "799",
    discountedPrice: "599",
    discount: "25",
    brand: "H&M",
    inStock: true,
    wornBy: "Women",
  },
  {
    _id: uuid(),
    title: "Rugby Tshirt",
    categoryName: "Tshirts",
    imgUrl:
      "https://res.cloudinary.com/ddid3uux8/image/upload/v1658905249/Eleganz-Store-Assets/hmgoepprod_aeakfi.jpg",
    ratings: "5",
    originalPrice: "1499",
    discountedPrice: "749",
    discount: "50",
    brand: "H&M",
    inStock: true,
    wornBy: "Men",
  },
  {
    _id: uuid(),
    title: "V-Neck Tshirt",
    categoryName: "Tshirts",
    imgUrl:
      "https://res.cloudinary.com/ddid3uux8/image/upload/v1658905365/Eleganz-Store-Assets/870x1110-px-V-T-Shirt_nmcyjr.jpg",
    ratings: "4",
    originalPrice: "385",
    discountedPrice: "315",
    discount: "18",
    brand: "Lyra",
    inStock: true,
    wornBy: "Women",
  },
  {
    _id: uuid(),
    title: "Yellow Tshirt",
    categoryName: "Tshirts",
    imgUrl:
      "https://res.cloudinary.com/ddid3uux8/image/upload/v1658905575/Eleganz-Store-Assets/566509-4957843_wqqacc.jpg",
    ratings: "5",
    originalPrice: "1499",
    discountedPrice: "899",
    discount: "40",
    brand: "Louis Philippe",
    inStock: true,
    wornBy: "Men",
  },
  // Jackets and Coats
  {
    _id: uuid(),
    title: "Green Full Sleeve Jacket",
    categoryName: "Jackets and Coats",
    imgUrl:
      "https://res.cloudinary.com/ddid3uux8/image/upload/v1658905904/Eleganz-Store-Assets/breakbounce-men-regular-fit-jacket-445634-1636453790-1_nruqom.jpg",
    ratings: "4.1",
    originalPrice: "2999",
    discountedPrice: "1467",
    discount: "51",
    brand: "Louis Philippe",
    inStock: true,
    wornBy: "Men",
  },
  {
    _id: uuid(),
    title: "Double Layered Blazers by Express",
    categoryName: "Jackets and Coats",
    imgUrl:
      "https://res.cloudinary.com/ddid3uux8/image/upload/v1658906135/Eleganz-Store-Assets/0078_06746757_0058_f100_x73fab.jpg",
    ratings: "4",
    originalPrice: "3500",
    discountedPrice: "3000",
    discount: "14",
    brand: "Bewakoof",
    inStock: false,
    wornBy: "Women",
  },
  {
    _id: uuid(),
    title: "Orange Sleeveless Jacket",
    categoryName: "Jackets and Coats",
    imgUrl:
      "https://res.cloudinary.com/ddid3uux8/image/upload/v1658906233/Eleganz-Store-Assets/orange-sleeveless-color-block-puffer-jacket-aw-21-men-s-mpjaw50-sleeveless-color-block-puffer-jacket-aw-21-plain-364945-1633095315_ptwh0j.jpg",
    ratings: "3.6",
    originalPrice: "2949",
    discountedPrice: "1049",
    discount: "64",
    brand: "Bewakoof",
    inStock: true,
    wornBy: "Men",
  },
  {
    _id: uuid(),
    title: "Dark Brown Baseball Jacket",
    categoryName: "Jackets and Coats",
    imgUrl:
      "https://res.cloudinary.com/ddid3uux8/image/upload/v1658906273/Eleganz-Store-Assets/hmgoepprod_pq4ern.jpg",
    ratings: "5",
    originalPrice: "3000",
    discountedPrice: "2700",
    discount: "10",
    brand: "H&M",
    inStock: true,
    wornBy: "Women",
  },
  // Shirts
  {
    _id: uuid(),
    title: "Dark Green Checkered Shirt",
    categoryName: "Shirts",
    imgUrl:
      "https://res.cloudinary.com/ddid3uux8/image/upload/v1658906396/Eleganz-Store-Assets/5xl-zub131-zublee-original-imagam6v7bdgkhhn_kbu2zt.jpg",
    ratings: "4.2",
    originalPrice: "999",
    discountedPrice: "348",
    discount: "65",
    brand: "H&M",
    inStock: true,
    wornBy: "Women",
  },
  {
    _id: uuid(),
    title: "Blue Full Sleeves Shirt",
    categoryName: "Shirts",
    imgUrl:
      "https://res.cloudinary.com/ddid3uux8/image/upload/v1658907179/Eleganz-Store-Assets/699844-7931621_rjuzja.jpg",
    ratings: "4.5",
    originalPrice: "1999",
    discountedPrice: "1799",
    discount: "10",
    brand: "Peter England",
    inStock: true,
    wornBy: "Men",
  },
  {
    _id: uuid(),
    title: "Regular Fit Casual",
    categoryName: "Shirts",
    imgUrl:
      "https://res.cloudinary.com/ddid3uux8/image/upload/v1658907485/Eleganz-Store-Assets/xl-4127-darzi-original-imag26ubd9xh2sak_tjvsug.jpg",
    ratings: "4",
    originalPrice: "1000",
    discountedPrice: "400",
    discount: "60",
    brand: "Lyra",
    inStock: true,
    wornBy: "Women",
  },
  {
    _id: uuid(),
    title: "White Half Sleeve Shirt",
    categoryName: "Shirts",
    imgUrl:
      "https://res.cloudinary.com/ddid3uux8/image/upload/v1658907543/Eleganz-Store-Assets/white-text-aop-half-sleeve-shirt-352182-1634190378-2_ivt1qj.jpg",
    ratings: "3.5",
    originalPrice: "1399",
    discountedPrice: "699",
    discount: "50",
    brand: "Bewakoof",
    inStock: true,
    wornBy: "Men",
  },
  // Dresses
  {
    _id: uuid(),
    title: "Floral Dress",
    categoryName: "Dresses",
    imgUrl:
      "https://res.cloudinary.com/ddid3uux8/image/upload/v1658907610/Eleganz-Store-Assets/39567034-7117050_fr8hqe.jpg",
    ratings: "3.8",
    originalPrice: "2000",
    discountedPrice: "1700",
    discount: "15",
    brand: "Lyra",
    inStock: true,
    wornBy: "Women",
  },
  {
    _id: uuid(),
    title: "Women Fit and Flare Dress",
    categoryName: "Dresses",
    imgUrl:
      "https://res.cloudinary.com/ddid3uux8/image/upload/v1658907915/Eleganz-Store-Assets/xs-1097-sheetal-associates-original-imag8fudhhckymnf_g3rwvk.jpg",
    ratings: "4.4",
    originalPrice: "1999",
    discountedPrice: "459",
    discount: "77",
    brand: "H&M",
    inStock: true,
    wornBy: "Women",
  },
  {
    _id: uuid(),
    title: "A-Line Multicolor Dress",
    categoryName: "Dresses",
    imgUrl:
      "https://res.cloudinary.com/ddid3uux8/image/upload/v1658908106/Eleganz-Store-Assets/xxl-lucy-051-purvaja-original-imagy5zsuqya7jyh_q2ni3o.jpg",
    ratings: "3.7",
    originalPrice: "2400",
    discountedPrice: "1200",
    discount: "50",
    brand: "Bewakoof",
    inStock: true,
    wornBy: "Women",
  },
  {
    _id: uuid(),
    title: "Ruffled Pink Dress",
    categoryName: "Dresses",
    imgUrl:
      "https://res.cloudinary.com/ddid3uux8/image/upload/v1658908171/Eleganz-Store-Assets/m-md146-oomph-original-imafyhyhct6jbfks_m4kbia.jpg",
    ratings: "4",
    originalPrice: "2000",
    discountedPrice: "399",
    discount: "80",
    brand: "H&M",
    inStock: true,
    wornBy: "Women",
  },
  // Casual Pants
  {
    _id: uuid(),
    title: "Cotton Blend Trousers",
    categoryName: "Casual Pants",
    imgUrl:
      "https://res.cloudinary.com/ddid3uux8/image/upload/v1658908257/Eleganz-Store-Assets/32-ttp0000481-tokyo-talkies-original-imafutds2nyegaww_pcngop.jpg",
    ratings: "4.5",
    originalPrice: "1400",
    discountedPrice: "700",
    discount: "50",
    brand: "Lyra",
    inStock: true,
    wornBy: "Women",
  },
  {
    _id: uuid(),
    title: "Olive Drawstring Hem Cargo Pants",
    categoryName: "Casual Pants",
    imgUrl:
      "https://res.cloudinary.com/ddid3uux8/image/upload/v1658908315/Eleganz-Store-Assets/olive-drawstring-hem-cargo-pants-433775-1644332735-4_m0sbwp.jpg",
    ratings: "4.4",
    originalPrice: "1499",
    discountedPrice: "1299",
    discount: "13",
    brand: "H&M",
    inStock: true,
    wornBy: "Men",
  },
  {
    _id: uuid(),
    title: "Loose Comfort Fit Brown Pants",
    categoryName: "Casual Pants",
    imgUrl:
      "https://res.cloudinary.com/ddid3uux8/image/upload/v1658908363/Eleganz-Store-Assets/freakins-women-brown-solid-loose-comfort-fit-casual-pants-451759-1637594684-1_ccbj1j.jpg",
    ratings: "4",
    originalPrice: "1590",
    discountedPrice: "999",
    discount: "37",
    brand: "Bewakoof",
    inStock: false,
    wornBy: "Women",
  },
  {
    _id: uuid(),
    title: "Beige Slim Fit Trousers",
    categoryName: "Casual Pants",
    imgUrl:
      "https://res.cloudinary.com/ddid3uux8/image/upload/v1658908395/Eleganz-Store-Assets/men-s-beige-slim-fit-trousers-479443-1645780940-5_xiyqyz.jpg",
    ratings: "5",
    originalPrice: "2499",
    discountedPrice: "1499",
    discount: "40",
    brand: "H&M",
    inStock: true,
    wornBy: "Men",
  },
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
