var btn=document.querySelector('#btn');
var price=document.querySelector('.price');
var quntity=document.querySelector('.quntity');
var currentprice=document.querySelector('.current-price');
btn.addEventListener('click',outPut);

function outPut(){
    var priceValue=parseInt(price.value);
    var quntityValue=parseInt(quntity.value);
    var currentValue=parseInt(currentprice.value);
    var output=document.querySelector('#output');

    var totalCostPrice=(priceValue*quntityValue);
    var totalSellPrice=(currentValue*quntityValue);

    var profit,profitPrcnt,loss,lossPrcnt;
    if(totalSellPrice>totalCostPrice){
        profit=(totalSellPrice-totalCostPrice);
        profitPrcnt=(profit/totalCostPrice)*100;
        output.innerText=`You gained ${profitPrcnt.toFixed(2)}% Your total profit is ₹ ${profit}`;

    }else if(totalSellPrice<totalCostPrice){
        loss=(totalCostPrice-totalSellPrice);
        lossPrcnt=(loss/totalCostPrice)*100;
        output.innerText=`You lost ${lossPrcnt.toFixed(2)}%. Your total loss is ₹ ${loss}`;
    }else{
        output.innerText=`You gained 0.00%. Your total profit is ₹ 0.00`;

    }

}