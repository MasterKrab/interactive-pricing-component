const updateBarWidth = () => {
   rootStyles.setProperty("--width-bar", `${priceRange.value * 100 / priceRange.max}%`);
};

const updatePrices = () =>{
   const price = prices[priceRange.value].price;
   
   pageViewsElement.textContent = `${prices[priceRange.value].pageviews} Pageviews`;

   if(checkboxBillign.checked){
      periodElement.textContent = `/ year`;
      priceElement.textContent = `$${price - price / 4}.00`;
   }else{
      periodElement.textContent = `/ month`;
      priceElement.textContent = `$${price}.00`;
   };
};