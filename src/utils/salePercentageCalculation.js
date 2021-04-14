const salePercentageCalculation = (currentPrice, previousPrice) => {
  if (currentPrice && previousPrice)
    return ((100 * (previousPrice - currentPrice)) / previousPrice).toFixed(0);
};

export default salePercentageCalculation;
