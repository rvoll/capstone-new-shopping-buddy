export const shoppingItems = [
  {
    id: "1",
    name: "milk",
    imageUrl: "milk.png",
    quantity: 2,
    category: "Dairy",
    comment: "low-fat, 1 litre each, prefer brand A",
    // entity: "carton of ";
    // pluralForm: "cartons of";
  },
  {
    id: "2",
    name: "bread",
    imageUrl: "bread.png",
    quantity: 1,
    category: "Bakery",
    // entity: "loaf of ";
    // pluralForm: "loaves of";
    comment: "whole grain, large loaf, no seeds",
  },
  {
    id: "3",
    name: "apples",
    // name: "Apple",
    // pluralForm: "Apples";
    imageUrl: "apples.png",
    quantity: 6,
    category: "Fruits",
    comment: "organic, medium size, prefer Gala variety",
  },
  {
    id: "4",
    name: "carrots",
    // name: "Carrot",
    // pluralForm: "Carrots";
    imageUrl: "carrots.png",
    quantity: 5,
    category: "Vegetables",
    comment: "fresh, large size, from local farm if possible",
  },
  {
    id: "5",
    name: "chicken breast",
    imageUrl: "chicken-breast.png",
    // name: "Chicken Breast",
    // pluralForm: "Chicken Breasts";
    quantity: 3,
    category: "Meat",
    comment: "boneless, skinless, around 200g each",
  },
  {
    id: "6",
    name: "orange juice",
    imageUrl: "orange-juice.png",
    quantity: 2,
    category: "Beverages",
    // entity: "carton of ";
    // pluralForm: "cartons of";
    comment: "no pulp, 1.5 litres each, prefer brand B",
  },
  {
    id: "7",
    name: "crisps",
    imageUrl: "crisps.png",
    quantity: 1,
    category: "Snacks",
    // entity: "package of ";
    // pluralForm: "packages of";
    comment: "salted, large bag, prefer brand C",
  },
  {
    id: "8",
    name: "dish soap",
    imageUrl: "dish-soap.png",
    quantity: 1,
    category: "Household",
    comment: "lemon scented, 500ml, eco-friendly",
  },
  {
    id: "9",
    name: "shampoo",
    imageUrl: "shampoo.png",
    quantity: 1,
    category: "Personal Care",
    // entity: "bottle of ";
    // pluralForm: "bottles of";
    comment: "for dry hair, 250ml, prefer brand D",
  },
  {
    id: "10",
    name: "paper towels",
    imageUrl: "paper-towels.png",
    quantity: 2,
    category: "Household",
    // entity: "package of ";
    // pluralForm: "packages of";
    comment: "extra absorbent, 6 rolls each pack, prefer brand E",
  },
];

// comments:
//
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
