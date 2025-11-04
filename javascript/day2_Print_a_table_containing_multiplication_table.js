function displayMultiplicationTable(table) {
  let product = 1,
    multiplicand = 1,
    multiplier = 1;

  for (let i = 0; i <= table; i++) {
    for (let j = 1; j <= 10; j++) {
      product = multiplicand * multiplier;

      console.log(multiplicand + " x " + multiplier + " = " + product);

      multiplier++;

      if (multiplier > 10) {
        multiplier = 1;
        multiplicand++;
      }
    }
    console.log("-----------");
  }
}

displayMultiplicationTable(4);
