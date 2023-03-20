const fs = require('fs');

function getModelsByBrand(brandName) {
  const rawData = fs.readFileSync('car_list.json');
  const data = JSON.parse(rawData);

  const brand = data.find((brand) => brand.brand.toLowerCase() === brandName.toLowerCase());

  if (brand) {
    return brand.models;
  } else {
    return [];
  }
}

console.log(getModelsByBrand(process.argv[2]));
