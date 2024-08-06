const inventory = [
    { id: 1, name: 'Apples', quantity: 50 },
    { id: 2, name: 'Bananas', quantity: 30 },
    { id: 3, name: 'Cherries', quantity: 10 },
    { id: 4, name: 'Dates', quantity: 5 },
  ];

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
  