const juiceApple = 15.678;
const juiceMango = 123.965;
const juiceOrange = 90.2345;

   console.log('Найбільше число:' + Math.max(juiceApple,juiceMango,juiceOrange));
   console.log('Найменше число:' + Math.min(juiceApple,juiceMango,juiceOrange));

const sumProduct = juiceApple+juiceMango+juiceOrange;
   console.log('Cума продуктів:' + sumProduct);

const sumInteger = Math.floor(juiceApple) + Math.floor(juiceMango) + Math.floor(juiceOrange);
   console.log('Сума товарів без копійок:' + sumInteger);

const sumRounding = Math.round(sumInteger / 100) * 100;
   console.log('Cума товарів округлена до сотень:' + sumRounding);

const isEvenValue = (sumInteger % 2 ===0) ? true: false;
   console.log('Cума товарів парне чи непарне число?:' + isEvenValue);

const moneyCustomer = 500;
   const restCustomer = moneyCustomer - sumProduct;
      console.log('Решта клієнта:' + restCustomer);

const averageValue = sumProduct/3;
   console.log('Середнє значення товарів:' + averageValue.toFixed(2));

const discount = Math.floor(Math.random()*50+1);
   console.log('Випадкова знижка:' + discount);

const discountValue = sumProduct * discount / 100;
   console.log('Сума знижки:' + discountValue.toFixed(2));

const payment = sumProduct - discountValue;
   console.log('Решта клієнта зі знижкою:'+ payment.toFixed(2));

const cost = Math.floor(sumProduct)/2;
   console.log('Собівартість продуктів:'+ cost);

const profit = cost-discount;
   console.log('Чистий прибуток:' + profit);
