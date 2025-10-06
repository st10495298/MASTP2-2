import { MenuItem } from "../types";
import uuid from "react-native-uuid";

export const initialMenu: MenuItem[] = [
  {
    id: uuid.v4().toString(),
    name: "Garlic Bread",
    description: "Toasted bread with garlic butter and herbs.",
    course: "Starters",
    price: 45,
  },
  {
    id: uuid.v4().toString(),
    name: "Chicken Caesar Salad",
    description: "Crisp lettuce with grilled chicken and Caesar dressing.",
    course: "Starters",
    price: 65,
  },
  {
    id: uuid.v4().toString(),
    name: "Grilled Ribeye Steak",
    description: "Tender ribeye steak with peppercorn sauce.",
    course: "Mains",
    price: 180,
  },
  {
    id: uuid.v4().toString(),
    name: "Seafood Pasta",
    description: "Penne pasta tossed with prawns and creamy sauce.",
    course: "Mains",
    price: 150,
  },
  {
    id: uuid.v4().toString(),
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with molten center and ice cream.",
    course: "Desserts",
    price: 70,
  },
  {
    id: uuid.v4().toString(),
    name: "Cheesecake",
    description: "Classic baked cheesecake with berry coulis.",
    course: "Desserts",
    price: 65,
  },
  {
    id: uuid.v4().toString(),
    name: "Cappuccino",
    description: "Rich espresso with frothy milk.",
    course: "Beverages",
    price: 35,
  },
  {
    id: uuid.v4().toString(),
    name: "Fresh Orange Juice",
    description: "Cold-pressed orange juice with no sugar added.",
    course: "Beverages",
    price: 30,
  },
];
