# Concept

The function 'analyzeInventory' performs the following operations on an inventory object:

1. Calculate the total stock count.
2. Find the most popular item (the one with the highest stock quantity).
3. Find the least popular item (the one with the lowest stock quantity).

# Data Structures

1. Inventory Data Structure:

As a parameter, the function takes an array of objects where each object represents an item in the inventory. Each item/inventory object will have the following properties:

- id (number): A unique identifier for the item.
- name (string): The name of the item.
- quantity(number): The number of units in stock.

Here is an exaple of an inventory object:

```
const inventory = [
  { id: 1, name: 'Apples', quantity: 50 },
  { id: 2, name: 'Bananas', quantity: 30 },
  { id: 3, name: 'Cherries', quantity: 10 },
  { id: 4, name: 'Dates', quantity: 5 },
];\

```
Operations to be Performed

1. Calculate Total Stock Count:
- Sum up the 'quantity' of all items.

2. Find the Most Popular Item:
- Identify the item with the highest 'quantity'.

3. Find the Least Popular Item:
- Identify the item with the lowest quantity.

# How to run the function 

Syntax: 

```
function analyzeInventory(inventory)

```
Parameter: 
- 'inventory' (Array): An array of item objects with properties 'id', 'name', and 'quantity'.

Returns:

An object with the following properties:

'totalStockCount' (number): The total number of units in stock across all items.
'mostPopularItem' (object): The item object with the highest quantity.
'leastPopularItem' (object): The item object with the lowest quantity.


# Exaple usage:

```
const inventory = [
  { id: 1, name: 'Apples', quantity: 50 },
  { id: 2, name: 'Bananas', quantity: 30 },
  { id: 3, name: 'Cherries', quantity: 10 },
  { id: 4, name: 'Dates', quantity: 5 },
];

const analysis = analyzeInventory(inventory);

console.log('Total Stock Count:', analysis.totalStockCount);
console.log('Most Popular Item:', analysis.mostPopularItem);
console.log('Least Popular Item:', analysis.leastPopularItem);

```
Output:

```
Total Stock Count: 95
Most Popular Item: { id: 1, name: 'Apples', quantity: 50 }
Least Popular Item: { id: 4, name: 'Dates', quantity: 5 }

```


# Function code followed by description of key elements:

``` 
function analyzeInventory(inventory) {
  // Initialize variables
  let totalStockCount = 0;
  let mostPopularItem = null;
  let leastPopularItem = null;

  // Loop through the inventory array
  inventory.forEach(item => {
    // Calculate total stock count
    totalStockCount += item.quantity;

    // Determine the most popular item
    if (!mostPopularItem || item.quantity > mostPopularItem.quantity) {
      mostPopularItem = item;
    }

    // Determine the least popular item
    if (!leastPopularItem || item.quantity < leastPopularItem.quantity) {
      leastPopularItem = item;
    }
  });

  return {
    totalStockCount,
    mostPopularItem,
    leastPopularItem
  };
}

// Example usage
const inventory = [
  { id: 1, name: 'Apples', quantity: 50 },
  { id: 2, name: 'Bananas', quantity: 30 },
  { id: 3, name: 'Cherries', quantity: 10 },
  { id: 4, name: 'Dates', quantity: 5 },
];

const analysis = analyzeInventory(inventory);
console.log('Total Stock Count:', analysis.totalStockCount);
console.log('Most Popular Item:', analysis.mostPopularItem);
console.log('Least Popular Item:', analysis.leastPopularItem);

```

## Explanation
- 'totalStockCount': We sum up all item quantities.
- 'mostPopularItem': We keep track of the item with the highest quantity by comparing each item's quantity.
- 'leastPopularItem': We track the item with the lowest quantity similarly.


# Additional notes:

- The function assumes that the inventory array is not empty. 

- The function does not perform data validation on the inventory items. Each item has valid id, name, and quantity properties before being passed as array to the function.
