// ================= INPUT ELEMENTS =================
const annualOrdersInput = document.getElementById("annual-orders");
const averageOrderValueInput = document.getElementById("aov");
const returnRateInput = document.getElementById("return-rate");
const timePerReturnInput = document.getElementById("time-per-return");
const hourlyWageInput = document.getElementById("hourly-wage");

// ================= SLIDER ELEMENTS =================
const annualOrdersSlider = document.getElementById("annual-orders-slider");
const averageOrderValueSlider = document.getElementById("aov-slider");
const returnRateSlider = document.getElementById("return-rates-slider");
const timePerReturnSlider = document.getElementById("time-per-return-slider");
const hourlyWageSlider = document.getElementById("hourly-wages-slider");

// ================= OUTPUT ELEMENTS =================
const totalProfitOutput = document.getElementById("total-profit");
const revenueBackOutput = document.getElementById("revenue-back");
const upsellRevenueOutput = document.getElementById("upsell-revenue");
const manPowerSavingsOutput = document.getElementById("manpower-savings");

// ================= CONSTANTS =================
const EXCHANGE_RATE = 0.6;
const UPSELL_RATE = 0.15;
const PROCESSING_TIME_MINUTES = 8.5;
const PROCESSING_TIME_HOURS = PROCESSING_TIME_MINUTES / 60;

const LOW_RETURN_ORDER_THRESHOLD = 450;
const HIGH_COST_MULTIPLIER = 3;
const LOW_COST_MULTIPLIER = 2.5;

// ================= UTILITY FUNCTIONS =================
function safeParse(value) {
    const num = parseFloat(value);
    return isNaN(num) ? 0 : num;
}

function formatCurrency(value) {
    return `$${value.toFixed(2)}`;
}

// ================= CALCULATION FUNCTIONS =================
function calculateReturnOrders(annualOrders, returnRate) {
    return annualOrders * returnRate;
}

function calculateRetainedProfit(returnOrders, averageOrderValue) {
    return returnOrders * EXCHANGE_RATE * averageOrderValue;
}

function calculateUpsellRevenue(annualOrders, averageOrderValue) {
    return annualOrders * UPSELL_RATE * averageOrderValue;
}

function calculateManpowerSavings(returnOrders, hourlyWage, timePerReturn) {
    return returnOrders * PROCESSING_TIME_HOURS * hourlyWage * timePerReturn;
}

function calculateInvestmentCost(returnOrders) {
    if (returnOrders < LOW_RETURN_ORDER_THRESHOLD) {
        return returnOrders * HIGH_COST_MULTIPLIER;
    } else {
        return returnOrders * LOW_COST_MULTIPLIER;
    }
}

// ================= MAIN FUNCTION =================
function calculateProfit() {
    const annualOrders = safeParse(annualOrdersInput.value);
    const averageOrderValue = safeParse(averageOrderValueInput.value);
    const returnRate = safeParse(returnRateInput.value) / 100;
    const timePerReturn = safeParse(timePerReturnInput.value);
    const hourlyWage = safeParse(hourlyWageInput.value);

    const returnOrders = calculateReturnOrders(annualOrders, returnRate);

    const retainedProfit = calculateRetainedProfit(returnOrders, averageOrderValue);
    const upsellRevenue = calculateUpsellRevenue(annualOrders, averageOrderValue);
    const manpowerSavings = calculateManpowerSavings(returnOrders, hourlyWage, timePerReturn);

    const totalProfit = retainedProfit + upsellRevenue + manpowerSavings;
    const investmentCost = calculateInvestmentCost(returnOrders);

    const totalROI = investmentCost === 0 ? 0 : (totalProfit / investmentCost) * 100;

    // Update UI
    revenueBackOutput.textContent = formatCurrency(retainedProfit);
    upsellRevenueOutput.textContent = formatCurrency(upsellRevenue);
    manPowerSavingsOutput.textContent = formatCurrency(manpowerSavings);
    totalProfitOutput.textContent = `${totalROI.toFixed(2)}%`;
}

// ================= SYNC FUNCTION =================
function syncSlider(slider, input) {
    slider.addEventListener("input", () => {
        input.value = slider.value;
        calculateProfit();
    });

    input.addEventListener("input", () => {
        slider.value = input.value;
        calculateProfit();
    });
}

// ================= INITIALIZE =================
syncSlider(annualOrdersSlider, annualOrdersInput);
syncSlider(averageOrderValueSlider, averageOrderValueInput);
syncSlider(returnRateSlider, returnRateInput);
syncSlider(timePerReturnSlider, timePerReturnInput);
syncSlider(hourlyWageSlider, hourlyWageInput);

// Initial calculation
calculateProfit();