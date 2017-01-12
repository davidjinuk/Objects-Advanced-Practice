var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  var answer = {};

  for (var i = 0; i < companySalesData.length; i++) {
    // var companySalesDatum = companySalesData[i];

    var saleValues = companySalesData[i].sales;
    var totalSales = sumSales(saleValues);
    var province = companySalesData[i].province;
    var taxRate = salesTaxRates[province];
    var totalTaxes = totalSales * taxRate;

    // var companyName = answer[companySalesData[i].name];

    if (answer[companySalesData[i].name] === undefined) {
      answer[companySalesData[i].name] = {
        totalSales: totalSales,
        totalTaxes: totalTaxes
      };
    } else {
      answer[companySalesData[i].name] = {
        totalSales: answer[companySalesData[i].name].totalSales + totalSales,
        totalTaxes: answer[companySalesData[i].name].totalTaxes + totalTaxes
      };
    }

    // } else {
    //   answer[companySalesData[i].name].totalSales += totalSales;
    //   answer[companySalesData[i].name].totalTaxes += totalTaxes;
    // }

  }

  return answer;
}

//call it sum since it can sum any array
function sumSales(saleValues) {
  var sum = 0;
  for (var j = 0; j < saleValues.length; j++){
    sum += saleValues[j];
  }
  return sum;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/