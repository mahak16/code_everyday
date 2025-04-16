
let base_url = "https://2024-03-06.currency-api.pages.dev/v1/currencies";
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
let msg = document.querySelector(".msg");
for(select of dropdowns){
    for(Currcode in countryList){
        let newoption = document.createElement("option");
        newoption.innerHTML = Currcode;
        newoption.value = Currcode;
        select.append(newoption);
        if(select.name === "from" && Currcode === "USD"){
            newoption.selected = "selected";
        }else if(select.name === "to" && Currcode === "INR"){
            newoption.selected = "selected";
        }
        select.append(newoption);   
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
}

const updateFlag=(element)=>{
    let Currcode= element.value;
    let countryCode = countryList[Currcode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}
btn.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if(amtVal==="" || amtVal<1){
        amtVal=1;
        amount.value = "1";
    }
    const URL = `${base_url}/${fromCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data);
    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    console.log(rate);
    let finalAmt =(amount.value*Number(rate));
    let rounded = finalAmt.toFixed(2);

    console.log(rounded);
    msg.innerHTML = `${amtVal} ${fromCurr.value} = ${rounded} ${toCurr.value}`;
})