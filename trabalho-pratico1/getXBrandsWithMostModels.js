const fs = require('fs');

function getXBrandsWithMostModels(x) {
  const rawData = fs.readFileSync('car_list.json');
  const data = JSON.parse(rawData);

  const brandsWithModels = data.reduce((acc, brand) => {
    acc[brand.brand] = brand.models.length;
    return acc;
  }, {});

  const sortedBrands = Object.entries(brandsWithModels).sort((a, b) => {
    if (b[1] !== a[1]) {
      return b[1] - a[1];
    } else {
      return a[0].localeCompare(b[0]);
    }
  });

  return sortedBrands.slice(0, x).map(([brand, models]) => `${brand} - ${models}`);
}

console.log(getXBrandsWithMostModels(parseInt(process.argv[2])));
