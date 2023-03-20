const fs = require('fs');

function getBrandWithLeastModels() {
  const carsData = JSON.parse(fs.readFileSync('car_list.json'));
  let leastModelsCount = Infinity;
  let brandsWithLeastModels = [];

  for (const brandData of carsData) {
    const brandModelsCount = brandData.models.length;

    if (brandModelsCount < leastModelsCount) {
      leastModelsCount = brandModelsCount;
      brandsWithLeastModels = [brandData.brand];
    } else if (brandModelsCount === leastModelsCount) {
      brandsWithLeastModels.push(brandData.brand);
    }
  }

  return brandsWithLeastModels.length === 1 ? brandsWithLeastModels[0] : brandsWithLeastModels;
}

console.log(getBrandWithLeastModels());
