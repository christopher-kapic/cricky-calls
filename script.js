

//var cost=document.getElementById("cost").value;


var jsworst=document.getElementById("jsworst");
var jsprofit=document.getElementById("jsprofit");
var currentprice=document.getElementById("stockpricee");

//temp.onmousemove = update();
//i.addEventListener('input', update(), false);
function update(){
    var strikeprice=document.getElementById("strikeprice").value;
    var cost=document.getElementById("cost").value;
    var slider=document.getElementById("stockprice");
    var percent=slider.value;
    var orders=document.getElementById("orders").value;
    var profit = "temp";
    var worst = parseFloat(cost) * parseFloat(orders) * 100;
    var getcurrentprice = parseFloat(strikeprice) + (parseFloat(strikeprice) * parseFloat(percent) * .01);
    var getprofit = (100 * parseFloat(orders) * (parseFloat(getcurrentprice) - parseFloat(strikeprice))) - parseFloat(worst);
    var percgain = (getprofit / worst);
jsprofit.innerHTML="$" + getprofit  + "    " + percgain + "%";
jsworst.innerHTML="$-" + worst;
currentprice.innerHTML="price: $" + getcurrentprice;
//alert(cost);
//alert(worst);
//
}