const fs = require('fs');

function getBrandWithMostModels() {
  const carsData = JSON.parse(fs.readFileSync('car_list.json', 'utf8'));
  let brandModelCount = {};
  let maxCount = 0;
  let maxBrands = [];

  carsData.forEach((brand) => {
    const brandName = brand.brand;
    const modelCount = brand.models.length;
    brandModelCount[brandName] = modelCount;

    if (modelCount > maxCount) {
      maxCount = modelCount;
      maxBrands = [brandName];
    } else if (modelCount === maxCount) {
      maxBrands.push(brandName);
    }
  });

  return maxBrands.length === 1 ? maxBrands[0] : maxBrands;
}

console.log(getBrandWithMostModels());
