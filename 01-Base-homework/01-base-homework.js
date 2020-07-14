const juiceApple = 15.678;
const juiceMango = 123.965;
const juiceOrange = 90.2345;

   console.log(Math.max(juiceApple,juiceMango,juiceOrange));
   console.log(Math.min(juiceApple,juiceMango,juiceOrange));

let sumProduct = juiceApple+juiceMango+juiceOrange; // Suma productiv.
   console.log(sumProduct);


   console.log(Math.floor(juiceApple)); //okruglennya v min 
   console.log(Math.floor(juiceMango)); 
   console.log(Math.floor(juiceOrange)); 


let sumInteger = Math.floor(juiceApple) + Math.floor(juiceMango) + Math.floor(juiceOrange);
   console.log(sumInteger);
let sumRounding = Math.round(sumInteger / 100) * 100;
   console.log(sumRounding);

sumInteger = new Boolean(sumInteger);
 if (sumInteger % 2 === 0) {
         console.log(sumInteger)
    } else {
         console.log(sumInteger)
    } 


let restCustomer = 500 - sumProduct; //reshta kliyenta 
   console.log(restCustomer);


let averageValue = sumProduct/3; // serednye arfmetuchne
      averageValue = averageValue.toFixed(2);
         console.log(averageValue);

let discount = Math.floor(Math.random()*50+1) // random discount
   console.log(discount);


let discountValue = sumProduct*discount/100;  // suma znujky
   console.log(discountValue);

let payment = sumProduct - discountValue; // reshta iz znujkoy 
      payment = payment.toFixed(2); 
         console.log(payment);


let cost = Math.floor(sumProduct)/2;
   console.log(cost); // sobivartist`

let profit = cost-discount;
   console.log(profit); // prubytok
