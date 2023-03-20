const fs = require('fs');

function getXBrandsWithLeastModels(x) {
  const rawData = fs.readFileSync('car_list.json');
  const data = JSON.parse(rawData);

  const brandsWithModels = data.reduce((acc, brand) => {
    acc[brand.brand] = brand.models.length;
    return acc;
  }, {});

  const sortedBrands = Object.entries(brandsWithModels).sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    } else {
      return a[0].localeCompare(b[0]);
    }
  });

  return sortedBrands.slice(0, x).map(([brand, models]) => `${brand} - ${models}`);
}

console.log(getXBrandsWithLeastModels(parseInt(process.argv[2])));
