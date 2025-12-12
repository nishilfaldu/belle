// Mock data for Belle Cake Crafts

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  theme?: string;
  tags: string[];
  image: string;
  description: string;
  dietary: string[];
  leadTime: number;
}


export const CAKE_THEMES = [
  "Anniversary cakes",
  "All about love",
  "1st birthday (boy)",
  "1st birthday (girl)",
  "2 tier cakes for baby boy",
  "2 tier cakes for baby girl",
  "Sports theme",
  "Bride to be",
  "Baby shower",
  "½ birthday cakes",
  "2 tier engagement cakes",
  "3 tier engagement cakes",
  "Cakes for men",
  "Cakes for women",
  "Pinterest inspired cakes",
  "Profession based cakes",
  "Cakes for kids and teens",
  "Tv show themed cakes"
];

// ... existing Product interface ...

export interface Course {
  id: number;
  title: string;
  price: number;
  type: 'free' | 'paid';
  duration: string;
  level: string;
  image: string;
  ingredients: string[];
  method: string[];
}

export interface Recipe {
  id: number;
  title: string;
  time: string;
  difficulty: string;
  image: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "The Velvet Noir",
    price: 65,
    category: "cakes",
    theme: "Anniversary cakes",
    tags: ["bestseller", "staple"],
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop",
    description: "70% Dark Belgian Chocolate ganache with a salted caramel core.",
    dietary: [],
    leadTime: 6 
  },
  {
    id: 2,
    name: "Sicilian Lemon Cloud",
    price: 55,
    category: "cakes",
    theme: "Cakes for women",
    tags: ["seasonal", "trending"],
    image: "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?q=80&w=1000&auto=format&fit=crop",
    description: "Zesty lemon sponge with elderflower buttercream and meringue kisses.",
    dietary: ["nut-free"],
    leadTime: 24
  },
  {
    id: 3,
    name: "Matcha & Raspberry Opera",
    price: 70,
    category: "cakes",
    theme: "Pinterest inspired cakes",
    tags: ["luxury"],
    image: "https://images.unsplash.com/photo-1562772379-08246fa4db7e?q=80&w=1000&auto=format&fit=crop",
    description: "Layers of almond sponge, matcha buttercream, and raspberry gelee.",
    dietary: [],
    leadTime: 48
  },
  {
    id: 4,
    name: "Keto Hazelnut Rocher",
    price: 12,
    category: "healthy",
    theme: "Cakes for men",
    tags: ["keto", "sugar-free"],
    image: "https://images.unsplash.com/photo-1599785209796-786432b228bc?q=80&w=1000&auto=format&fit=crop",
    description: "Sugar-free hazelnut mousse cups. 2g Net Carbs.",
    dietary: ["keto", "sugar-free", "gluten-free"],
    leadTime: 6
  },
  {
    id: 5,
    name: "Vegan Berry Tart",
    price: 45,
    category: "healthy",
    theme: "Cakes for women",
    tags: ["vegan"],
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1000&auto=format&fit=crop",
    description: "Almond flour crust filled with coconut cream and fresh seasonal berries.",
    dietary: ["vegan", "gluten-free"],
    leadTime: 24
  },
  {
    id: 6,
    name: "Signature Macaron Box",
    price: 35,
    category: "desserts",
    theme: "All about love",
    tags: ["gifting"],
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=1000&auto=format&fit=crop",
    description: "Assortment of 12 hand-painted macarons.",
    dietary: ["gluten-free"],
    leadTime: 24
  },
  {
    id: 7,
    name: "Blue Teddy Tier",
    price: 120,
    category: "cakes",
    theme: "1st birthday (boy)",
    tags: ["custom"],
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=1000&auto=format&fit=crop",
    description: "Two-tier vanilla bean cake with fondant teddy bear topper.",
    dietary: [],
    leadTime: 48
  },
  {
    id: 8,
    name: "Elegant Floral Ring",
    price: 150,
    category: "cakes",
    theme: "2 tier engagement cakes",
    tags: ["custom"],
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=1000&auto=format&fit=crop",
    description: "Semi-naked frosting with fresh organic edible flowers.",
    dietary: [],
    leadTime: 72
  }
];

export const CLASSES: Course[] = [
  {
    id: 1,
    title: "Mastering the Mirror Glaze",
    price: 120,
    type: "paid",
    duration: "3 Hours",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1000&auto=format&fit=crop",
    ingredients: [
      "200g Granulated Sugar",
      "150g Glucose Syrup",
      "100ml Water",
      "150g White Chocolate",
      "100g Sweetened Condensed Milk",
      "15g Gelatin Powder"
    ],
    method: [
      "Bloom the gelatin in cold water for 10 minutes.",
      "In a saucepan, bring sugar, glucose, and water to a boil at 103°C (217°F).",
      "Pour the hot syrup over the white chocolate and condensed milk.",
      "Add the bloomed gelatin and stir gently.",
      "Use an immersion blender to emulsify without adding air bubbles.",
      "Let cool to 32°C (90°F) before glazing."
    ]
  },
  {
    id: 2,
    title: "Sourdough Basics 101",
    price: 0,
    type: "free",
    duration: "45 Mins",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop",
    ingredients: [
      "500g Bread Flour",
      "350g Water (Warm)",
      "100g Active Starter",
      "10g Salt"
    ],
    method: [
      "Mix flour and water (autolyse) for 1 hour.",
      "Add starter and salt, mix until incorporated.",
      "Perform stretch and folds every 30 mins for 2 hours.",
      "Bulk ferment until doubled in size.",
      "Shape and cold proof overnight.",
      "Bake in Dutch oven at 230°C."
    ]
  },
  {
    id: 3,
    title: "The Perfect Macaron",
    price: 95,
    type: "paid",
    duration: "2.5 Hours",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1558326567-98ae2405596b?q=80&w=1000&auto=format&fit=crop",
    ingredients: [
      "100g Egg Whites (Aged)",
      "100g Granulated Sugar",
      "100g Almond Flour",
      "100g Powdered Sugar",
      "Food Coloring Gel"
    ],
    method: [
      "Sift almond flour and powdered sugar twice.",
      "Whip egg whites to soft peaks, slowly adding sugar.",
      "Whip to stiff peaks (French Meringue).",
      "Fold dry ingredients into meringue (Macaronage) until 'lava' consistency.",
      "Pipe onto silicone mat and rest for 30 mins.",
      "Bake at 150°C for 14 minutes."
    ]
  }
];

export const RECIPES: Recipe[] = [
  {
    id: 1,
    title: "Leftover Cake Truffles",
    time: "20 Mins",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1558326567-98ae2405596b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Summer Berry Compote",
    time: "15 Mins",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop"
  }
];
