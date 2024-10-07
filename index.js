const productsArray = [
    { id: 1, sku: "abc", productName: "name1", category: 1 },
    { id: 2, sku: "def", productName: "name2", category: 2 },
    { id: 3, sku: "ghi", productName: "name1", category: 2 },
    { id: 4, sku: "klm", productName: "name1", category: 3 },
    { id: 5, sku: "xyz", productName: "name1", category: 1 },
  ];
  
  const pricingArray = [
    { sku: "abc", price: 10 },
    { sku: "def", price: 20 },
    { sku: "ghi", price: 30 },
    { sku: "klm", price: 40 },
    { sku: "xyz", price: 50 },
  ];
  
  const categoriesArray = [
    { id: 1, name: "category 1" },
    { id: 2, name: "category 2" },
    { id: 3, name: "category 3" },
    { id: 4, name: "category 4" },
    { id: 5, name: "category 5" },
  ];
  
const pricingMap = new Map();
pricingArray.forEach(pricing => pricingMap.set(pricing.sku, pricing.price));
const mergedProducts = productsArray.map(product => ({
  ...product,
  price: pricingMap.get(product.sku),
  category: categoriesArray.find(category => category.id === product.category).name 
}));

console.log(mergedProducts);

