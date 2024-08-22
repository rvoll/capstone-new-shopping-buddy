// add entity and pluralForm (incl. entity) in "shoppingItems array"
// later apply conditional rendering to select either the singular form,
// with entity if applicable,
// or the plural form (including entity/numeral modifier)
//
// quantity > 1 ? {pluralForm} : (entity === none ? {name} : {entity}+{name})
// entity ?
// possibly integrate the default plural: {pluralForm} ? {pluralForm} : {name} + "s"
//
// "entity" could be added in the add item form using a dropdown menu;
//
// in this case, the conditional rendering should take the existence of a singular entity into account,
// rather than the existence of an entity in general.

export const shoppingItems = [
  {
    id: "1",
    name: "Milk",
    imageUrl: "",
    quantity: 2,
    category: "Dairy",
    comment: "Low-fat, 1 litre each, prefer brand A",
    // entity: "carton of ";
    // pluralForm: "cartons of";
  },
  {
    id: "2",
    name: "Bread",
    imageUrl: "",
    quantity: 1,
    category: "Bakery",
    // entity: "loaf of ";
    // pluralForm: "loaves of";
    comment: "Whole grain, large loaf, no seeds",
  },
  {
    id: "3",
    name: "Apples",
    // name: "Apple",
    // pluralForm: "Apples";

    imageUrl: "",
    quantity: 6,
    category: "Fruits",
    comment: "Organic, medium size, prefer Gala variety",
  },
  {
    id: "4",
    name: "Carrots",
    // name: "Carrot",
    // pluralForm: "Carrots";
    imageUrl: "",
    quantity: 5,
    category: "Vegetables",
    comment: "Fresh, large size, from local farm if possible",
  },
  {
    id: "5",
    name: "Chicken Breast",
    // name: "Chicken Breast",
    // pluralForm: "Chicken Breasts";
    quantity: 3,
    category: "Meat",
    comment: "Boneless, skinless, around 200g each",
  },
  {
    id: "6",
    name: "Orange Juice",
    imageUrl: "",
    quantity: 2,
    category: "Beverages",
    // entity: "carton of ";
    // pluralForm: "cartons of";
    comment: "No pulp, 1.5 litres each, prefer brand B",
  },
  {
    id: "7",
    name: "Chips",
    imageUrl: "",
    quantity: 1,
    category: "Snacks",
    // entity: "package of ";
    // pluralForm: "packages of";
    comment: "Salted, large bag, prefer brand C",
  },
  {
    id: "8",
    name: "Dish Soap",
    imageUrl: "",
    quantity: 1,
    category: "Household",
    comment: "Lemon scented, 500ml, eco-friendly",
  },
  {
    id: "9",
    name: "Shampoo",
    imageUrl: "",
    quantity: 1,
    category: "Personal Care",
    // entity: "bottle of ";
    // pluralForm: "bottles of";
    comment: "For dry hair, 250ml, prefer brand D",
  },
  {
    id: "10",
    name: "Paper Towels",
    imageUrl: "",
    quantity: 2,
    category: "Household",
    // entity: "package of ";
    // pluralForm: "packages of";
    comment: "Extra absorbent, 6 rolls each pack, prefer brand E",
  },
];
