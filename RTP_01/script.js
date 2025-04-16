const slider = document.getElementById("slider");
const price = document.querySelector(".price");
const requests = document.getElementById("requests");

const pricing = [
  { price: "$19.99", requests: "60 Requests per month" },
  { price: "$49.99", requests: "180 Requests per month" },
  { price: "$99.99", requests: "450 Requests per month" },
];

slider.addEventListener("mouseclick", function () {
  const value = slider.value;
  price.textContent = pricing[value].price + "/month";
  requests.textContent = pricing[value].requests;
});
