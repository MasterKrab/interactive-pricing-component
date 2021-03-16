const priceRange = document.getElementById("price-range");
const checkboxBillign = document.getElementById("billing");
const pageViewsElement = document.getElementById("page-views");
const priceElement = document.getElementById("price");
const periodElement = document.getElementById("period");

const rootStyles = document.documentElement.style;

/* 
- 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month
*/

const prices = [
   {
      pageviews: "10k",
      price: 8
   },
   {
      pageviews: "50k",
      price: 12
   },
   {
      pageviews: "100k",
      price: 16
   },
   {
      pageviews: "500k",
      price: 24
   },
   {
      pageviews: "1M",
      price: 36
   }
]; 