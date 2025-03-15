const resList = [
  {
    id: 0,
    name: "Pizza Hut",
    rating: 4.2,
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZTUAGueuuSDoK87Dc9f10xrJ8AV-QdWCStBoQXYf9MX46qY8fNNgEcSFHbw9",
    deliveryTime: "30-45 mins",
    foodVariety: "Pizzas, Pasta, Garlic Bread",
    veg: [
      { id: "ph1", item: "Veg Supreme Pizza", price: 349 },
      { id: "ph2", item: "Margherita Pizza", price: 299 },
      { id: "ph3", item: "Cheese Stuffed Crust", price: 399 },
      { id: "ph4", item: "Veggie Pesto Pasta", price: 249 },
      { id: "ph5", item: "Garlic Breadsticks", price: 159 }
    ],
  
    nonVeg: [
      { id: "ph6", item: "Chicken Supreme Pizza", price: 399 },
      { id: "ph7", item: "Tandoori Chicken Pizza", price: 429 },
      { id: "ph8", item: "BBQ Chicken Wings", price: 199 },
      { id: "ph9", item: "Chicken Alfredo Pasta", price: 269 },
      { id: "ph10", item: "Pepperoni Pizza", price: 359 }
    ],
  
    recommendedItems: [
      { id: "ph11", item: "Veg Supreme Pizza", price: 349 },
      { id: "ph12", item: "Chicken Supreme Pizza", price: 399 },
      { id: "ph13", item: "Tandoori Chicken Pizza", price: 429 },
      { id: "ph14", item: "Cheese Stuffed Crust", price: 399 },
      { id: "ph15", item: "BBQ Chicken Wings", price: 199 }
    ]
  },
  {
    id: 1,
    name: "McDonald's",
    rating: 4.1,
    picture: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRgR7qp1r5J9ep1RzxcGPaTAMUByiCl9WovqdAVRceqtbVV1-umdx3BNTOYO9ra",
    deliveryTime: "25-35 mins",
    foodVariety: "Burgers, Fries, Desserts",
    promoted: true,
    veg: [
      { id: "mcd1", item: "McVeggie Burger", price: 199 },
      { id: "mcd2", item: "Paneer McMelt", price: 229 },
      { id: "mcd3", item: "Veg Pizza McPuff", price: 129 },
      { id: "mcd4", item: "Spicy Veg Wrap", price: 159 },
      { id: "mcd5", item: "McAloo Tikki", price: 149 }
    ],
  
    nonVeg: [
      { id: "mcd6", item: "McChicken Burger", price: 239 },
      { id: "mcd7", item: "McSpicy Chicken", price: 279 },
      { id: "mcd8", item: "Chicken McMelt", price: 249 },
      { id: "mcd9", item: "McChicken Wrap", price: 169 },
      { id: "mcd10", item: "Chicken Nugget Box", price: 199 }
    ],
  
    recommendedItems: [
      { id: "mcd11", item: "McVeggie Burger", price: 199 },
      { id: "mcd12", item: "McChicken Burger", price: 239 },
      { id: "mcd13", item: "McSpicy Chicken", price: 279 },
      { id: "mcd14", item: "Paneer McMelt", price: 229 },
      { id: "mcd15", item: "Chicken Nugget Box", price: 199 }
    ]
  },

  {
    id: 2,
    name: "Starbucks",
    rating: 4.5,
    picture: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRvCP_eSqPeChzzxgp6zy0cck1CggvY1GD7aPe-gH2PDpjpv71Qo5me_4cUnuTj",
    deliveryTime: "15-25 mins",
    foodVariety: "Coffee, Snacks, Pastries, Shakes",
    veg: [
      { id: "sb2", item: "Tomato Mozzarella Panini", price: 179 },
      { id: "sb1", item: "Veggie Wrap", price: 149 },
      { id: "sb3", item: "Spinach & Feta Croissant", price: 129 },
      { id: "sb4", item: "Cinnamon Swirl", price: 89 },
      { id: "sb5", item: "Greek Yogurt with Honey", price: 99 }
    ],
  
    nonVeg: [
      { id: "sb6", item: "Chicken & Bacon Panini", price: 199 },
      { id: "sb7", item: "Chicken Caesar Wrap", price: 179 },
      { id: "sb8", item: "Egg & Cheese Croissant", price: 149 },
      { id: "sb9", item: "BBQ Chicken Sandwich", price: 229 },
      { id: "sb10", item: "Ham & Cheese Croissant", price: 159 }
    ],
  
    recommendedItems: [
      { id: "sb11", item: "Veggie Wrap", price: 149 },
      { id: "sb12", item: "Chicken & Bacon Panini", price: 199 },
      { id: "sb13", item: "Spinach & Feta Croissant", price: 129 },
      { id: "sb14", item: "Cinnamon Swirl", price: 89 },
      { id: "sb15", item: "BBQ Chicken Sandwich", price: 229 }
    ]
    },
  {
    id: 3,
    name: "Subway",
    rating: 4.3,
    picture: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSDfULsBesNqO2rsI8A1JDQsg6sylFX5GfBemddRyoS7_CO-ydc-jg3F-oW0O5U",
    deliveryTime: "20-30 mins",
    foodVariety: "Sandwiches, Salads, Wraps",
    veg: [
      { id: "sw1", item: "Veggie Delight Sub", price: 199 },
      { id: "sw2", item: "Paneer Tikka Sub", price: 219 },
      { id: "sw3", item: "Veggie Patty Sub", price: 189 },
      { id: "sw4", item: "Falafel Sub", price: 169 },
      { id: "sw5", item: "Caprese Sub", price: 229 }
    ],
  
    nonVeg: [
      { id: "sw6", item: "Chicken Tikka Sub", price: 249 },
      { id: "sw7", item: "Chicken Teriyaki Sub", price: 259 },
      { id: "sw8", item: "Italian B.M.T. Sub", price: 279 },
      { id: "sw9", item: "Tandoori Chicken Sub", price: 269 },
      { id: "sw10", item: "Meatball Marinara Sub", price: 239 }
    ],
  
    recommendedItems: [
      { id: "sw11", item: "Veggie Delight Sub", price: 199 },
      { id: "sw12", item: "Chicken Tikka Sub", price: 249 },
      { id: "sw13", item: "Chicken Teriyaki Sub", price: 259 },
      { id: "sw14", item: "Italian B.M.T. Sub", price: 279 },
      { id: "sw15", item: "Falafel Sub", price: 169 }
    ]
  },
  {
    id: 4,
    name: "Burger King",
    rating: 3.9,
    picture: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQtObcHU53VZNXaNQVMa3h_TGvRB9Fl8AIflGvufhNJ_1kU0MCIdXktBvwOQARY",
    deliveryTime: "25-35 mins",
    foodVariety: "Burgers, Fries, Beverages, Desserts",
      veg: [
        { id: "bk01", item: "Veggie Whopper", price: 219 },
        { id: "bk02", item: "Veggie Royale", price: 249 },
        { id: "bk03", item: "Veggie Burger", price: 189 },
        { id: "bk04", item: "Spicy Veggie Wrap", price: 159 },
        { id: "bk05", item: "Veggie Nugget", price: 149 }
      ],
    
      nonVeg: [
        { id: "bk06", item: "Chicken Whopper", price: 299 },
        { id: "bk07", item: "Chicken Royale", price: 329 },
        { id: "bk08", item: "BBQ Chicken Burger", price: 259 },
        { id: "bk09", item: "Tendercrisp Chicken", price: 279 },
        { id: "bk10", item: "Chicken Nuggets", price: 159 }
      ],
    
      recommendedItems: [
        { id: "bk11", item: "Chicken Whopper", price: 299 },
        { id: "bk12", item: "Veggie Whopper", price: 219 },
        { id: "bk13", item: "Chicken Royale", price: 329 },
        { id: "bk14", item: "BBQ Chicken Burger", price: 259 },
        { id: "bk15", item: "Veggie Nugget", price: 149 }
      ]
  },

  {
    id: 5,
    name: "Domino's Pizza",
    rating: 4.2,
    picture: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQpOh34RfzTcLbteByVO1MZMqG-zkPNpsig3oL1832N75mh7KJC-0CIxbq04xWg",
    deliveryTime: "30-40 mins",
    foodVariety: "Pizzas, Pasta, Sides, Desserts",

      veg: [
        { id: "dp01", item: "Margherita", price: 249 },
        { id: "dp02", item: "Farmhouse", price: 299 },
        { id: "dp03", item: "Paneer Makhani", price: 319 },
        { id: "dp04", item: "Veg Extravaganza", price: 329 },
        { id: "dp05", item: "Peppy Paneer", price: 279 }
      ],
    
      nonVeg: [
        { id: "dp06", item: "Chicken Dominator", price: 399 },
        { id: "dp07", item: "Chicken Tikka", price: 359 },
        { id: "dp08", item: "BBQ Chicken", price: 379 },
        { id: "dp09", item: "Non-Veg Supreme", price: 349 },
        { id: "dp10", item: "Chicken Sausage", price: 319 }
      ],
    
      recommendedItems: [
        { id: "dp11", item: "Margherita", price: 249 },
        { id: "dp12", item: "Farmhouse", price: 299 },
        { id: "dp13", item: "Paneer Makhani", price: 319 },
        { id: "dp14", item: "Chicken Dominator", price: 399 },
        { id: "dp15", item: "BBQ Chicken", price: 379 }
      ]
    },
    
  {
    id: 6,
    name: "Baskin Robbins",
    rating: 4.4,
    picture: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcShI2K3jSXrEsSkeJzwjNfMRQfXU89NIEMYpeTZyrXGL8IWJaY8vX5_KP5YPrex",
    deliveryTime: "20-30 mins",
    foodVariety: "Ice Cream, Sundaes, Cakes",
    promoted: true,
      veg: [
        { id: "br01", item: "Vanilla", price: 199 },
        { id: "br02", item: "Chocolate", price: 219 },
        { id: "br03", item: "Strawberry", price: 209 },
        { id: "br04", item: "Butterscotch", price: 229 },
        { id: "br05", item: "Mint Chocolate Chip", price: 239 }
      ],
    
      nonVeg: [
        { id: "br06", item: "Chocolate Fudge Sundae", price: 279 },
        { id: "br07", item: "Caramel Sundae", price: 269 },
        { id: "br08", item: "Strawberry Sundae", price: 259 },
        { id: "br09", item: "Banana Royale Sundae", price: 289 },
        { id: "br10", item: "Brownie Sundae", price: 299 }
      ],
    
      recommendedItems: [
        { id: "br11", item: "Vanilla", price: 199 },
        { id: "br12", item: "Chocolate", price: 219 },
        { id: "br13", item: "Chocolate Fudge Sundae", price: 279 },
        { id: "br14", item: "Strawberry Sundae", price: 259 },
        { id: "br15", item: "Mint Chocolate Chip", price: 239 }
      ]
    
  },
  {
    id: 7,
    name: "Haldiram's",
    rating: 4.1,
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU9bNZGDfG3AdZ_Pi9Gy16jHSyTmgSVRlIVd87CFp2qBjJpdsyyeiwU--O9pQJ",
    deliveryTime: "30-45 mins",
    foodVariety: "Indian Snacks, Sweets, Samosas",
    
      veg: [
        { id: "hd01", item: "Aloo Tikki", price: 99 },
        { id: "hd02", item: "Samosa", price: 79 },
        { id: "hd03", item: "Kachori", price: 89 },
        { id: "hd04", item: "Bhujia", price: 129 },
        { id: "hd05", item: "Papri Chaat", price: 109 }
      ],
    
      nonVeg: [
        { id: "hd06", item: "Gulab Jamun", price: 149 },
        { id: "hd07", item: "Rasgulla", price: 129 },
        { id: "hd08", item: "Kaju Katli", price: 199 },
        { id: "hd09", item: "Gajar Halwa", price: 179 },
        { id: "hd10", item: "Ladoo", price: 159 }
      ],
    
      recommendedItems: [
        { id: "hd11", item: "Aloo Tikki", price: 99 },
        { id: "hd12", item: "Samosa", price: 79 },
        { id: "hd13", item: "Gulab Jamun", price: 149 },
        { id: "hd14", item: "Rasgulla", price: 129 },
        { id: "hd15", item: "Kaju Katli", price: 199 }
      ]
    
    
  },

  {
    id: 8,
    name: "Taco Bell",
    rating: 3.8,
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2hwvPDwpct2iPAgkfiSVwNqEnahiX7NoHzyoHaHeSFtLX0xw77srsB9-5ylP6iNe2q64&usqp=CAU",
    deliveryTime: "25-40 mins",
    foodVariety: "Tacos, Burritos, Nachos",
    promoted: true,
    
      veg: [
        { id: "tb01", item: "Veggie Supreme Taco", price: 129 },
        { id: "tb02", item: "Spicy Potato Soft Taco", price: 149 },
        { id: "tb03", item: "Cheese Quesadilla", price: 169 },
        { id: "tb04", item: "Crunchy Veggie Taco", price: 139 },
        { id: "tb05", item: "Bean Burrito", price: 159 }
      ],
    
      nonVeg: [
        { id: "tb06", item: "Chicken Taco", price: 179 },
        { id: "tb07", item: "Beef Taco", price: 189 },
        { id: "tb08", item: "Chicken Quesadilla", price: 219 },
        { id: "tb09", item: "Beef Burrito", price: 199 },
        { id: "tb10", item: "Grilled Chicken Soft Taco", price: 169 }
      ],
    
      recommendedItems: [
        { id: "tb11", item: "Chicken Taco", price: 179 },
        { id: "tb12", item: "Spicy Potato Soft Taco", price: 149 },
        { id: "tb13", item: "Cheese Quesadilla", price: 169 },
        { id: "tb14", item: "Crunchy Veggie Taco", price: 139 },
        { id: "tb15", item: "Beef Burrito", price: 199 }
      ]
    
    
  },
  {
    id: 9,
    name: "Malabar",
    rating: 4.2,
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVLs8oF9tkGwQrUk2dITvVIzQFBqfrN1-_ojcHkXyVjNayw1Gr80gtrMW7kRNGmUeyVyw&usqp=CAU",
    deliveryTime: "30-45 mins",
    foodVariety: "Peri Peri Chicken, Salads, Sides",
    
      veg: [
        { id: "mb01", item: "Vegetable Biryani", price: 179 },
        { id: "mb02", item: "Paneer Tikka", price: 199 },
        { id: "mb03", item: "Aloo Paratha", price: 129 },
        { id: "mb04", item: "Chana Masala", price: 139 },
        { id: "mb05", item: "Vegetable Kurma", price: 159 }
      ],
    
      nonVeg: [
        { id: "mb06", item: "Chicken Biryani", price: 249 },
        { id: "mb07", item: "Mutton Korma", price: 289 },
        { id: "mb08", item: "Fish Curry", price: 219 },
        { id: "mb09", item: "Chicken Tikka", price: 229 },
        { id: "mb10", item: "Grilled Chicken", price: 199 }
      ],
    
      recommendedItems: [
        { id: "mb11", item: "Chicken Biryani", price: 249 },
        { id: "mb12", item: "Vegetable Biryani", price: 179 },
        { id: "mb13", item: "Mutton Korma", price: 289 },
        { id: "mb14", item: "Fish Curry", price: 219 },
        { id: "mb15", item: "Paneer Tikka", price: 199 }
      ]
    
    
  },
  {
    id: 10,
    name: "Cafe Coffee Day",
    rating: 4.4,
    picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6VLX5adnCYE5WpQLEQ3ckxaJmGHB4XTfTeJ0kuKKeGx_sL4w_UMmMiUifGP0vycMHPSA&usqp=CAU",
    deliveryTime: "20-35 mins",
    foodVariety: "Burgers, Fries, Milkshakes",
    
      veg: [
        { id: "ccd01", item: "Cappuccino", price: 149 },
        { id: "ccd02", item: "Espresso", price: 119 },
        { id: "ccd03", item: "Americano", price: 129 },
        { id: "ccd04", item: "Hot Chocolate", price: 139 },
        { id: "ccd05", item: "Cafe Latte", price: 159 }
      ],
    
      nonVeg: [
        { id: "ccd06", item: "Iced Latte", price: 169 },
        { id: "ccd07", item: "Cold Coffee", price: 179 },
        { id: "ccd08", item: "Iced Mocha", price: 189 },
        { id: "ccd09", item: "Frappe", price: 199 },
        { id: "ccd10", item: "Iced Tea", price: 129 }
      ],
    
      recommendedItems: [
        { id: "ccd11", item: "Veg Sandwich", price: 129 },
        { id: "ccd12", item: "Cheese Croissant", price: 139 },
        { id: "ccd13", item: "Chocolate Muffin", price: 149 },
        { id: "ccd14", item: "French Fries", price: 119 },
        { id: "ccd15", item: "Veg Burger", price: 159 }
      ]
    
  },
  {
    id: 11,
    name: "KFC",
    rating: 4.0,
    picture: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSX_qarY9E2zWfgr2AzILoGuKoKSOVZcmZHXh0A-7DKZBItjBK9giEzjhrQ8rUm",
    deliveryTime: "30-40 mins",
    foodVariety: "Fried Chicken, Burgers, Fries, Beverages",
    
      veg: [
        { id: "kf01", item: "Veg Zinger", price: 199 },
        { id: "kf02", item: "Veg Bucket", price: 399 },
        { id: "kf03", item: "Paneer Popcorn", price: 179 },
        { id: "kf04", item: "Crispy Veggies", price: 159 },
        { id: "kf05", item: "Veg Burger", price: 169 }
      ],
    
      nonVeg: [
        { id: "kf06", item: "Chicken Zinger", price: 249 },
        { id: "kf07", item: "Classic Chicken Bucket", price: 499 },
        { id: "kf08", item: "Hot Wings", price: 229 },
        { id: "kf09", item: "Chicken Tenders", price: 269 },
        { id: "kf10", item: "Crispy Chicken Burger", price: 199 }
      ],
    
      recommendedItems: [
        { id: "kf11", item: "Chicken Zinger", price: 249 },
        { id: "kf12", item: "Veg Zinger", price: 199 },
        { id: "kf13", item: "Hot Wings", price: 229 },
        { id: "kf14", item: "Classic Chicken Bucket", price: 499 },
        { id: "kf15", item: "Paneer Popcorn", price: 179 }
      ]
    
  },
  {
    id: 12,
    name: "Barbeque Nation",
    rating: 4.6,
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbwzXsXvebMTzg9h80wI4p9kKAAbfxerxpka4CNeMaQifxn_KDRc9N7fRNF_tF",
    deliveryTime: "45-60 mins",
    foodVariety: "Barbecue, Grilled Items, Indian Cuisine",
    
      veg: [
        { id: "bqn01", item: "Veg BBQ Wrap", price: 179 },
        { id: "bqn02", item: "Veg Grilled Burger", price: 199 },
        { id: "bqn03", item: "Paneer Tikka", price: 219 },
        { id: "bqn04", item: "BBQ Veg Pizza", price: 259 },
        { id: "bqn05", item: "Veg Sizzler", price: 239 }
      ],
    
      nonVeg: [
        { id: "bqn06", item: "Chicken BBQ Wrap", price: 219 },
        { id: "bqn07", item: "Grilled Chicken Burger", price: 249 },
        { id: "bqn08", item: "BBQ Chicken Pizza", price: 279 },
        { id: "bqn09", item: "Chicken Sizzler", price: 269 },
        { id: "bqn10", item: "BBQ Chicken Wings", price: 229 }
      ],
    
      recommendedItems: [
        { id: "bqn11", item: "Chicken BBQ Wrap", price: 219 },
        { id: "bqn12", item: "Veg BBQ Wrap", price: 179 },
        { id: "bqn13", item: "BBQ Veg Pizza", price: 259 },
        { id: "bqn14", item: "Grilled Chicken Burger", price: 249 },
        { id: "bqn15", item: "Chicken Sizzler", price: 269 }
      ]
    
    
  },
];

export default resList;
