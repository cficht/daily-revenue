function revenue (transactions) {
  const newTrans = transactions.reduce((acc, curr) => {
    const transDate = (new Date(curr.timestamp).toDateString());
    if(!acc[transDate]) {
      acc[transDate] = curr.price
      console.log(curr);
      console.log(transDate);
    } else if (acc[transDate])  {
      acc[transDate] = acc[transDate] + curr.price;
    }
    return acc;
  }, {})
  return newTrans;
};

module.exports = { revenue };
