const { revenue } = require('./daily-revenue.js');

describe('testing daily-revenue.js', () => {

  it('takes in an array of transactions and returns the revenue for each day', () => {
    const testArray = [
      {
        price: 1,
        timestamp: 1563459038296
      },
      {
        price: 4,
        timestamp: 1562217298048
      },
      {
        price: 2,
        timestamp: 1562715645569
      },
      {
        price: 8,
        timestamp: 1563792873690
      },
      {
        price: 8,
        timestamp: 1563792873690
      },
      {
        price: 2,
        timestamp: 1562715645569
      },
    ];

    const expectedOutput =
    {
      'Thu Jul 18 2019': 1,
      'Tue Jul 09 2019': 4,
      'Mon Jul 22 2019': 16,
      'Wed Jul 03 2019': 4
    };

    expect(revenue(testArray)).toEqual(expectedOutput);
  });

});
