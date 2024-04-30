const productData = [
  {
    id: 1,
    name: 'Pizza',
    category: 'food',
    description:
      'Chicken with Cheese. A classic favorite, our pizza is made with the finest ingredients. The crust is hand-tossed and topped with a savory tomato sauce, tender chicken pieces, and melted cheese. Perfect for a family dinner or a casual get-together with friends.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
    price: '$50',
    rating: 4.5,
    reviews: 120,
  },
  {
    id: 2,
    name: 'Coke',
    category: 'drink',
    description:
      "Coke Zero - No Sugar. Enjoy the refreshing taste of Coca-Cola without the guilt. Our Coke Zero is a sugar-free alternative that doesn't compromise on flavor. With zero calories and the same great taste, it's the perfect beverage for any occasion.",
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
    price: '$10',
    rating: 4.8,
    reviews: 234,
  },
  {
    id: 3,
    name: 'Burger',
    category: 'food',
    description:
      "Double Chicken. Our double chicken burger is a hearty and satisfying meal. Made with two juicy chicken patties, fresh lettuce, tomato, and our special sauce, it's a burger lover's dream. Pair it with our crispy fries for the ultimate indulgence.",
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
    price: '$30',
    rating: 4.0,
    reviews: 85,
  },
  {
    id: 4,
    name: 'Sushi',
    category: 'food',
    description:
      "Fresh Salmon. Savor the flavors of the ocean with our fresh salmon sushi. Made with premium sushi-grade salmon, seasoned rice, and nori, it's a delicious and healthy choice. Perfect for sushi enthusiasts and seafood lovers alike.",
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
    price: '$40',
    rating: 4.7,
    reviews: 150,
  },
  {
    id: 5,
    name: 'Milkshake',
    category: 'drink',
    description:
      "Vanilla Flavor. Indulge your sweet tooth with our creamy vanilla milkshake. Made with real vanilla beans and topped with whipped cream, it's a decadent treat that will satisfy any craving. Enjoy it on its own or pair it with a burger for the ultimate meal.",
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
    price: '$15',
    rating: 4.3,
    reviews: 98,
  },
  {
    id: 6,
    name: 'Pasta',
    category: 'food',
    description:
      "Creamy Alfredo. Our creamy Alfredo pasta is a comfort food classic. Made with al dente pasta and a rich, creamy Alfredo sauce, it's the perfect dish for a cozy night in. Pair it with a glass of wine for the ultimate Italian dining experience.",
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
    price: '$35',
    rating: 4.2,
    reviews: 110,
  },
  {
    id: 7,
    name: 'Iced Tea',
    category: 'drink',
    description:
      "Peach Flavor. Our peach flavored iced tea is a refreshing and thirst-quenching beverage. Made with real peach juice and brewed tea, it's a delightful blend of sweet and tart flavors. Enjoy it on a hot summer day or as a refreshing pick-me-up any time of year.",
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
    price: '$20',
    rating: 4.6,
    reviews: 200,
  },
  {
    id: 8,
    name: 'Hot Dog',
    category: 'food',
    description:
      "Classic Beef. Our classic beef hot dog is a favorite among hot dog enthusiasts. Made with premium beef and served on a soft bun, it's a delicious and satisfying snack. Add your favorite toppings for a personalized touch.",
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
    price: '$25',
    rating: 4.1,
    reviews: 75,
  },
  {
    id: 9,
    name: 'Smoothie',
    category: 'drink',
    description:
      "Mixed Berries. Our mixed berry smoothie is a burst of fruity flavors in every sip. Made with a blend of strawberries, blueberries, raspberries, and blackberries, it's a delicious and nutritious treat. Enjoy it as a snack or a light meal replacement.",
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
    price: '$18',
    rating: 4.4,
    reviews: 130,
  },
  {
    id: 10,
    name: 'Nachos',
    category: 'food',
    description:
      "Cheesy Jalapeno. Our cheesy jalapeno nachos are a spicy and savory delight. Made with crispy tortilla chips, melted cheese, jalapenos, and topped with sour cream and guacamole, it's the perfect appetizer or snack for any occasion.",
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
    price: '$28',
    rating: 4.0,
    reviews: 90,
  },
  {
    id: 11,
    name: 'Lemonade',
    category: 'drink',
    description:
      "Freshly Squeezed. Our freshly squeezed lemonade is a tangy and refreshing drink. Made with real lemons and a hint of sweetness, it's the perfect thirst-quencher on a hot day. Enjoy it on its own or as a refreshing complement to any meal.",
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
    price: '$12',
    rating: 4.7,
    reviews: 180,
  },
  {
    id: 12,
    name: 'Salad',
    category: 'food',
    description:
      "Greek Salad. Our Greek salad is a light and refreshing dish that's perfect for a healthy meal. Made with crisp lettuce, juicy tomatoes, cucumbers, olives, feta cheese, and a tangy vinaigrette dressing, it's a flavorful and satisfying choice.",
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
    price: '$32',
    rating: 4.3,
    reviews: 100,
  },
  {
    id: 13,
    name: 'Beer',
    category: 'drink',
    description:
      "Craft Lager. Our craft lager beer is brewed with care and precision to deliver a smooth and flavorful experience. Made with the finest ingredients and brewed to perfection, it's a beer lover's dream. Enjoy it cold and savor the moment.",
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
    price: '$22',
    rating: 4.9,
    reviews: 250,
  },
  {
    id: 14,
    name: 'Tacos',
    category: 'food',
    description:
      "Spicy Chicken. Our spicy chicken tacos are a fiesta of flavors in every bite. Made with tender chicken, spicy seasonings, and served in a soft tortilla, they're a delicious and satisfying meal. Add your favorite toppings for a personalized touch.",
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
    price: '$27',
    rating: 4.6,
    reviews: 190,
  },
  {
    id: 15,
    name: 'Orange Juice',
    category: 'drink',
    description:
      "Freshly Squeezed. Our freshly squeezed orange juice is a burst of vitamin C in every glass. Made with ripe oranges and no added sugars, it's a healthy and delicious choice. Enjoy it as a refreshing breakfast drink or as a pick-me-up any time of day.",
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
    price: '$14',
    rating: 4.5,
    reviews: 140,
  },
  {
    id: 16,
    name: 'Wings',
    category: 'food',
    description:
      "BBQ Flavor. Our BBQ flavored wings are a finger-licking good treat. Made with tender chicken wings, smoky BBQ sauce, and a hint of spice, they're a crowd favorite. Perfect for game day or any day you're craving something delicious.",
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
    price: '$38',
    rating: 4.4,
    reviews: 160,
  },
  {
    id: 17,
    name: 'Cappuccino',
    category: 'drink',
    description:
      "Italian Style. Our Italian-style cappuccino is a rich and creamy coffee drink. Made with a double shot of espresso, steamed milk, and a frothy milk foam topping, it's a luxurious treat for any coffee lover. Enjoy it as a morning pick-me-up or an after-dinner indulgence.",
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
    price: '$16',
    rating: 4.2,
    reviews: 105,
  },
  {
    id: 18,
    name: 'Ramen',
    category: 'food',
    description:
      "Pork Belly. Our pork belly ramen is a savory and satisfying noodle soup. Made with tender pork belly slices, ramen noodles, and a flavorful broth, it's a comforting meal that will warm you up from the inside out. Perfect for a chilly day or whenever you're craving a taste of Japan.",
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
    price: '$42',
    rating: 4.8,
    reviews: 220,
  },
  {
    id: 19,
    name: 'Smoothie Bowl',
    category: 'food',
    description:
      "Acai Berry. Our acai berry smoothie bowl is a delicious and nutritious meal. Made with blended acai berries, bananas, and other fruits, it's a thick and creamy bowl of goodness. Top it with granola, nuts, and seeds for added crunch and nutrition.",
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
    price: '$20',
    rating: 4.3,
    reviews: 95,
  },
  {
    id: 20,
    name: 'Green Tea',
    category: 'drink',
    description:
      "Matcha Flavor. Our matcha flavored green tea is a soothing and energizing drink. Made with high-quality matcha powder and hot water, it's a traditional Japanese beverage that's rich in antioxidants and flavor. Enjoy it as a calming treat or a revitalizing pick-me-up.",
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
    price: '$18',
    rating: 4.1,
    reviews: 80,
  },
];

export {productData};
