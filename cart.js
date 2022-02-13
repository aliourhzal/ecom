var plus = document.getElementById("plus");
var cart_icon = document.getElementById("cart");
var cart_div = document.getElementById("cart_div");
var add_cart = document.getElementById("btn");

/* quantity counter */

plus.onclick = function() {quantity_counter(1)};
minus.onclick = function() {quantity_counter(0)};

/* quantity counter */

/* quantity counter function */

function quantity_counter(sign) {
	if(sign == 1 && quantity >= 0)
	{
		quantity++;
		document.getElementById("quantity").innerText = quantity;
	}
	else if (quantity > 0)
	{
		quantity--;
		document.getElementById("quantity").innerText = quantity;
	}
	return quantity;
}
/* quantity counter function */

/* cart icon event */

var on_off = 0;

cart_icon.onclick = function() {cart_div_gen()};

function cart_div_gen()
{
	if (on_off == 0)
	{
    	cart_div.style.visibility = "visible";
		on_off = 1;
	}
	else
	{
    	cart_div.style.visibility = "hidden";
		on_off = 0;
	}
}

/* cart icon event */

/* add to cart bnt event */

var item_div = document.getElementById("item_div");
var little_indicator = document.getElementById("quantity_sym");

add_cart.onclick = function () {
	quantity_indicator();
	cart_content();
};

function quantity_indicator()
{
	if (quantity != 0)
	{
		little_indicator.innerText = quantity;
		little_indicator.style.visibility = "visible";
	}
}

function cart_content()
{
	if (quantity != 0)
	{
		document.getElementById("quantity_for_total").innerText = quantity;
		document.getElementById("total").innerText = '$' + 125 * quantity;
		document.getElementsByClassName("empty")[0].style.display = "none";
		item_div.style.display = "flex";
	}
}

/* add to cart bnt event */

/* trash event */

document.getElementById("trash").onclick = function () {
	item_div.style.display = "none";
	little_indicator.style.visibility = "hidden";
	document.getElementsByClassName("empty")[0].style.display = "initial";
};

/* trash event */

