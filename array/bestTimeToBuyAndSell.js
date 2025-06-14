function maxProfit(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];

    const profit = price - minPrice;

    maxProfit = Math.max(maxProfit, profit);

    minPrice = Math.min(minPrice, price);
  }

  return maxProfit;
}
