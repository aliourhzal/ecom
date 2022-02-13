var thumbnail = document.getElementsByClassName("thumbnail");
var images = document.getElementsByClassName("thum-img")
var main = document.getElementsByClassName("main-img");
var minus = document.getElementById("minus");
var lightbox_content = document.getElementById("lightbox-content");
var main_img = document.getElementsByClassName("big-image")
var quantity = 0;
var index = 0;


thumbnail[0].addEventListener("click", function(){
	changePhoto(0);
});
thumbnail[1].addEventListener("click", function(){
	changePhoto(1);
});
thumbnail[2].addEventListener("click", function(){
	changePhoto(2);
});
thumbnail[3].addEventListener("click", function(){
	changePhoto(3);
});

/* lightbox triger */

main[0].onclick = function() {lightbox_gen()};

/* lightbox triger */

/* selected image */

changePhoto(0);

/* selected image */

/* for changing the photo according to the thumbnail */

function changePhoto(id) 
{
	var i = 0;

	switch (id) {
		case 0 :
			main[0].innerHTML = '<img src="./images/image-product-1.jpg" alt="product" class="big-image">';
			break ;
		case 1 :
			main[0].innerHTML = '<img src="./images/image-product-2.jpg" alt="product" class="big-image">';
			break ;
		case 2 :
			main[0].innerHTML = '<img src="./images/image-product-3.jpg" alt="product" class="big-image">';
			break ;
		case 3 :
			main[0].innerHTML = '<img src="./images/image-product-4.jpg" alt="product" class="big-image">';
			break ;
		case 4 :
			main_img[1].setAttribute('src', './images/image-product-1.jpg');
			break ;
		case 5 :
			main_img[1].setAttribute('src', './images/image-product-2.jpg');
			break ;
		case 6 :
			main_img[1].setAttribute('src', './images/image-product-3.jpg');
			break ;
		case 7 :
			main_img[1].setAttribute('src', './images/image-product-4.jpg');
			break ;
	};
	if (id < 4)
	{
		while (i < 4)
		{
			thumbnail[i].style.border = "";
			images[i].style.opacity = "";
			i++;
		}
	}
	else
	{
		i = 4;
		while (i < 8)
		{
			thumbnail[i].style.border = "";
			images[i].style.opacity = "";
			i++;
		}
	}
	thumbnail[id].style.border = "3px solid hsl(26, 100%, 55%)";
	images[id].style.opacity = "0.5";
	if(id >= 0 && id <= 3)
		index = id + 4;
}

/* for changing the photo according to the thumbnail */

function lightbox_gen()
{
	var close_div = document.createElement("div");
	var arrow_div = document.createElement("div");
	var next_div = document.createElement("div");
	var previous_div = document.createElement("div");
	

	lightbox.style.position = "absolute";
	lightbox.style.top = "0";
	lightbox.style.left = "0";
	lightbox.style.height = "100vh";
	lightbox.style.width = "100vw";
	lightbox.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
	lightbox.innerHTML = lightbox_content.innerHTML;

	/* for the close button */
	close_div.setAttribute('id', 'close_img');
	main[1].appendChild(close_div);
	document.getElementById("close_img").innerHTML = '<svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill-rule="evenodd"/></svg>';
	document.getElementById("close_img").onclick = function() {
		lightbox.innerHTML = "";
		lightbox.style.position = "";
		lightbox.style.top = "";
		lightbox.style.left = "";
		lightbox.style.height = "";
		lightbox.style.width = "";
		lightbox.style.backgroundColor = "";
	};
	/* for the close button */

	/* for the next and previous arrows */

	arrow_div.setAttribute('id', 'arrow');
	main[1].appendChild(arrow_div);
	next_div.setAttribute('id', 'next');
	previous_div.setAttribute('id', 'previous');
	document.getElementById("arrow").appendChild(previous_div);
	document.getElementById("arrow").appendChild(next_div);

	var next = document.getElementById('next');
	var previous = document.getElementById('previous');

	next.innerHTML = '<svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>';
	previous.innerHTML = '<svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>';
	
	if (index == 4)
		previous.style.visibility = "hidden";
	if (index == 7)
		next.style.visibility = "hidden";
	next.onclick = function () {
		if (index < 7)
			index++;
		console.log(index);
		changePhoto(index);
		previous.style.visibility= "visible";
		if (index == 7)
		next.style.visibility = "hidden";
	};
	previous.onclick = function () {
		if (index > 4)
			index--;
		changePhoto(index);
		next.style.visibility = "visible";
		if (index == 4)
		previous.style.visibility = "hidden";
	};
	
	/* for the next and previous arrows */

	/* for changing the photo according to the thumbnail in the lightbox */

	thumbnail[4].addEventListener("click", function(){
		changePhoto(4);
	});
	thumbnail[5].addEventListener("click", function(){
		changePhoto(5);
	});
	thumbnail[6].addEventListener("click", function(){
		changePhoto(6);
	});
	thumbnail[7].addEventListener("click", function(){
		changePhoto(7);
	});

	/* for changing the photo according to the thumbnail in the lightbox */

}