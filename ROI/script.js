//inputs
const slider = document.getElementsByClassName("slider");
const annualOrdersI = document.getElementById("annual-orders");
const averageOrderValueI = document.getElementById("aov");
const returnRateI = document.getElementById("return-rate");
const timePerReturnI = document.getElementById("time-per-return");
const hourlyWageI = document.getElementById("hourly-wage");

//sliders
const annualOrdersS = document.getElementById("annual-orders-slider")
const averageOrderValueS = document.getElementById("aov-slider");
const returnRateS = document.getElementById("return-rates-slider");
const timePerReturnS = document.getElementById("time-per-return-slider");
const hourlyWageS = document.getElementById("hourly-wages-slider")


annualOrdersS.addEventListener("input",function(){
    
    const value = annualOrdersS.value;
    annualOrdersI.value = value;

    console.log(value);

 }) ;
annualOrdersS.oninput = function(){
    const value = annualOrdersS.value;
    annualOrdersI.value = value;
}
//output

const totalProfitO = document.getElementById("total-profit");
const revenueBackO = document.getElementById("revenue-back");
const upsellRevenueO = document.getElementById("upsell-revenue");
const manPowerSavingsO = document.getElementById("manpower-savings");

//making constants

const Exchange_Rate = 0.6;
const Upsell_Rate = 0.15;
const ADDITIONAL_CUSTOMERS_RATE = 0.3;
const Processing_Time_Per_Return = 8.5/60;
const Low_Return_Order_Threshold = 450;
const High_Cost_Multiplier = 3;
const Low_Cost_Multiplier = 2.5;

function CalculateProfit(){
    const annualOrders = parseFloat(annualOrdersI.value);
    const averageOrderValue = parseFloat(averageOrderValueI.value);
    const returnRate = parseFloat(returnRateI.value) / 100;
    const timePerReturn = parseFloat(timePerReturnI.value);
    const hourlyWage = parseFloat(hourlyWageI.value);

    const returnOrders = annualOrders * returnRate;

    const retainedProfit = returnOrders * Exchange_Rate * averageOrderValue;
    revenueBackO.textContent = `$${retainedProfit.toFixed(2)}`;
    
    const upsellRevenue = annualOrders * Upsell_Rate * averageOrderValue;
    upsellRevenueO.textContent = `$${upsellRevenue.toFixed(2)}`;

    const manpowerSavings = returnOrders * Processing_Time_Per_Return * hourlyWage*timePerReturn;
    manPowerSavingsO.textContent = `$${manpowerSavings.toFixed(2)}`;

    const totalProfit = retainedProfit + upsellRevenue + manpowerSavings; //numerator
    
    const investmentCost = returnOrders < Low_Return_Order_Threshold
    ? returnOrders * High_Cost_Multiplier : returnOrders * Low_Cost_Multiplier; // denominator

  
  const totalROI = (totalProfit / investmentCost) * 100;
  totalProfitO.textContent = `$${totalROI.toFixed(2)}`;
}




annualOrdersI.addEventListener("input", CalculateProfit);
averageOrderValueI.addEventListener("input", CalculateProfit);
returnRateI.addEventListener("input", CalculateProfit);
timePerReturnI.addEventListener("input", CalculateProfit);
hourlyWageI.addEventListener("input", CalculateProfit);

CalculateProfit();