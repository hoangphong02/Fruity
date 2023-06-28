
$(document).ready(function()
{
	"use strict";

	var menuActive = false;
	var header = $('.header');
	setHeader();
	initCustomDropdown();
	initPageMenu();

	function setHeader()
	{
	
		if(window.innerWidth > 991 && menuActive)
		{
			closeMenu();
		}
	}

	function initCustomDropdown()
	{
		if($('.custom_dropdown_placeholder').length && $('.custom_list').length)
		{
			var placeholder = $('.custom_dropdown_placeholder');
			var list = $('.custom_list');
		}

		placeholder.on('click', function (ev)
		{
			if(list.hasClass('active'))
			{
				list.removeClass('active');
			}
			else
			{
				list.addClass('active');
			}

			$(document).one('click', function closeForm(e)
			{
				if($(e.target).hasClass('clc'))
				{
					$(document).one('click', closeForm);
				}
				else
				{
					list.removeClass('active');
				}
			});

		});

		$('.custom_list a').on('click', function (ev)
		{
			ev.preventDefault();
			var index = $(this).parent().index();

			placeholder.text( $(this).text() ).css('opacity', '1');

			if(list.hasClass('active'))
			{
				list.removeClass('active');
			}
			else
			{
				list.addClass('active');
			}
		});


		$('select').on('change', function (e)
		{
			placeholder.text(this.value);

			$(this).animate({width: placeholder.width() + 'px' });
		});
	}

	/* 

	4. Init Page Menu

	*/

	function initPageMenu()
	{
		if($('.page_menu').length && $('.page_menu_content').length)
		{
			var menu = $('.page_menu');
			var menuContent = $('.page_menu_content');
			var menuTrigger = $('.menu_trigger');

			//Open / close page menu
			menuTrigger.on('click', function()
			{
				if(!menuActive)
				{
					openMenu();
				}
				else
				{
					closeMenu();
				}
			});

			//Handle page menu
			if($('.page_menu_item').length)
			{
				var items = $('.page_menu_item');
				items.each(function()
				{
					var item = $(this);
					if(item.hasClass("has-children"))
					{
						item.on('click', function(evt)
						{
							evt.preventDefault();
							evt.stopPropagation();
							var subItem = item.find('> ul');
						    if(subItem.hasClass('active'))
						    {
						    	subItem.toggleClass('active');
								TweenMax.to(subItem, 0.3, {height:0});
						    }
						    else
						    {
						    	subItem.toggleClass('active');
						    	TweenMax.set(subItem, {height:"auto"});
								TweenMax.from(subItem, 0.3, {height:0});
						    }
						});
					}
				});
			}
		}
	}

	function openMenu()
	{
		var menu = $('.page_menu');
		var menuContent = $('.page_menu_content');
		TweenMax.set(menuContent, {height:"auto"});
		TweenMax.from(menuContent, 0.3, {height:0});
		menuActive = true;
	}

	function closeMenu()
	{
		var menu = $('.page_menu');
		var menuContent = $('.page_menu_content');
		TweenMax.to(menuContent, 0.3, {height:0});
		menuActive = false;
	}

	//tim kiem
});

const searchFunction = () =>{
	const searchBox = document.getElementById("searchIndex").value.toUpperCase();
	const productItem = document.getElementById("product-list");
	const product = document.querySelectorAll(".product");
	const productName = document.getElementsByTagName('h3');

	for(var i = 0; i < productName.length; i++){
		let match = product[i].getElementsByTagName("h3")[0];

		if(match){
			let textValue = match.textContent || match.innerHTML;
			if(textValue.toUpperCase().indexOf(searchBox) > -1){
				product[i].style.display = "";
			}else{
				product[i].style.display = "none";
			}
		}
	}
}   
function checkPassword(input_password){
	var password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
	if(input_password.value.match(password)){
		return false;
	}else{
		alert('Mật khẩu của bạn có rủi ro cao, vui lòng sử dụng mật khẩu mạnh hơn!');
		return false;
	}
}

function showPassword(){
	var text = document.getElementById('mainPassword');
	if(text.type === "password"){
		text.type = "text";
	}else{
		text.type = "password";
	}
}

function showRetypePassword(){
	var text = document.getElementById('retypePassword');
	if(text.type === "password"){
		text.type = "text";
	}else{
		text.type = "password";
	}
}

var check = function() {
	if (document.getElementById('mainPassword').value == document.getElementById('retypePassword').value) {
	  document.getElementById('message').style.color = 'green';
	  document.getElementById('message').innerHTML = '<i class="fa-solid fa-check"></i> Mật khẩu trùng khớp';
	} else {
	  document.getElementById('message').style.color = 'red';
	  document.getElementById('message').innerHTML = '<i class="fa-sharp fa-solid fa-xmark"></i> Mật khẩu không trùng khớp';
	}
}

function checkPass(){
	var text = document.getElementById('floatingPass');
	if(check != localStorage.getItem("pass")){
		document.getElementById('messageOldPassword').style.color = 'red';
		document.getElementById('messageOldPassword').innerHTML = "Mật khẩu không khớp mật khẩu cũ";
	}else{
		document.getElementById('messageOldPassword').style.color = 'green';
		document.getElementById('messageOldPassword').innerHTML = "Mật khẩu trùng khớp";
	}
}

function login(){
	var user= '{"khachhang": [{"email":"vhdang@gmail.com", "password":"vhdang123#"}]}';
	var obj =  JSON.parse(user);
	var frm = document.forms['login_form'];
	var email = frm.email;
	var pw = frm.pw;
	//alert(localStorage.getItem('mail'));
	if(localStorage.length==0){
		alert("Tài khoản không tồn tại, vui lòng tạo tài khoản");
		window.open("dangky.html");
	}
	else if(localStorage.getItem("mail") == email.value && localStorage.getItem("password") == pw.value){
		return true;
	} 
	else{
		alert("Email hoặc mật khẩu không chính xác");
		return false;
	}
}

//gio hang
let carts = document.querySelectorAll('.add-cart');

let products = [
	{
		name : 'Táo Ninh Thuận',
		tag: 'apple',
		price: 50000,
		inCart: 0
	},
	{
		name: 'Dâu tây Đà Lạt',	
		tag: 'strawberry',
		price: 280000,
		inCart: 0
	},
	{
		name: 'Sầu riêng',		
		tag: 'durian',
		price: 105000,
		inCart: 0
	},
	{
		name: 'Xoài cát Hòa Lộc',
		tag: 'mango',
		price: 90000,
		inCart: 0
	},
	{
		name: 'Măng cụt',
		tag: 'mangosteen',
		price: 60000,
		inCart:0
	},
	{
		name: 'Bưởi da xanh',
		tag: 'grapefruit',
		price: 50000,
		inCart: 0
	},
	{
		name:'Nho Ninh Thuận' ,
		tag: 'nho',
		price: 60000 ,
		inCart: 0
	},
	{
		name:'Dưa lưới' ,
		tag: 'dualuoi',
		price:43000 ,
		inCart: 0
	},
	{
		name:'Cam Navel' ,
		tag:'camruotvang',
		price: 130000,
		inCart:0
	},
	{
		name:'Cam cara' ,
		tag:'camruotdo',
		price: 190000,
		inCart:0
	},
	{
		name:'Nho xanh không hạt' ,
		tag:'nhoxanhkhonghat',
		price: 150000,
		inCart:0
	},
	{
		name:'Nho đen không hạt' ,
		tag:'nhodenkhonghat',
		price: 150000,
		inCart:0
	},
	{
		name:'Nho đỏ không hạt' ,
		tag:'nhodokhonghat',
		price: 150000,
		inCart:0
	},
	{
		name:'Mận October' ,
		tag:'manoctober',
		price: 120000,
		inCart:0
	},
	{
		name:'Cherry vàng' ,
		tag:'cherryvang',
		price: 470000,
		inCart:0
	},
	{
		name:'Táo envy' ,
		tag:'taoenvy',
		price: 220000,
		inCart:0
	},
	{
		name : 'Táo Fuji',
		tag: 'appleJP',
		price: 80000,
		inCart: 0
	},
	{
		name: 'cherry nhật loại 3',	
		tag: 'cherry',
		price: 300000,
		inCart: 0
	},
	{
		name: 'đào nhật bản',		
		tag: 'dao',
		price: 560000,
		inCart: 0
	},
	{
		name: 'dâu anh đào',
		tag: 'dauanhdao',
		price: 426000,
		inCart: 0
	},
	{
		name: 'dâu bạch tuyết',
		tag: 'daubachtuyet',
		price: 700000,
		inCart:0
	},
	{
		name: 'dưa densuke',
		tag: 'duahauden',
		price: 7000000,
		inCart: 0
	},
	{
		name:'Hồng Hoshigaki' ,
		tag: 'hong',
		price: 320000 ,
		inCart: 0
	},
	{
		name:'Kiwi ruột đỏ' ,
		tag: 'kiwiruotdo',
		price:250000 ,
		inCart: 0
	},
	{
		name:'Đào vàng' ,
		tag:'daovang',
		price: 120000,
		inCart:0
	},
	{
		name:'Dâu Guemsil' ,
		tag:'dautayGUEMSIL',
		price: 240000,
		inCart:0
	},
	{
		name:'Dâu Seolhyang' ,
		tag:'dautaySeolhyang',
		price: 230000,
		inCart:0
	},
	{
		name:'Hồng giòn' ,
		tag:'honggion',
		price:68000,
		inCart:0
	},
	{
		name:'Hồng khô lát' ,
		tag:'hongkholat',
		price: 80000,
		inCart:0
	},
	{
		name:'Lê Singo' ,
		tag:'lesingo',
		price: 110000,
		inCart:0
	},
	{
		name:'Nho mẫu đơn đỏ' ,
		tag:'nhomaudondo',
		price: 650000,
		inCart:0
	},
	{
		name:'Nho mẫu đơn xanh' ,
		tag:'nhomaudonxanh',
		price: 600000,
		inCart:0
	},
]

for(let i = 0; i < carts.length; i++){
	 carts[i].addEventListener('click', () => {
		
		cartNumbers(products[i]);
		totalCost(products[i]);
	 })
}

function onloadCartNumbers(){
	let productNumbers = localStorage.getItem('cartNumbers');

	if(productNumbers){
		document.querySelector('.cart span').textContent = productNumbers;
	}
}

function cartNumbers(product){
	
	let productNumbers = localStorage.getItem('cartNumbers');
	

	productNumbers = parseInt(productNumbers);
	
	
	if(productNumbers){
		localStorage.setItem('cartNumbers', productNumbers + 1); 
		document.querySelector('.cart span').textContent = productNumbers+ 1;
		
	}else{
		localStorage.setItem('cartNumbers',1); 
		document.querySelector('.cart span').textContent = 1;
	}	
	setItems(product);
}

function setItems(product){
	let cartItem = localStorage.getItem('productsInCart');
	cartItem = JSON.parse(cartItem);

	if(cartItem != null){
		if(cartItem[product.tag] == undefined){
			cartItem = {
				...cartItem,
				[product.tag]: product
			}
		}
		cartItem[product.tag].inCart += 1; 
	}else{
		product.inCart = 1;
		cartItem = {
			[product.tag]: product
		}
	}
	localStorage.setItem("productsInCart", JSON.stringify(cartItem));
}

function totalCost(product){
	let cartCost = localStorage.getItem('totalCost');
	console.log("Gia tong cong cua gio hang la: ", cartCost);
	console.log(typeof cartCost);

	if(cartCost != null){
		cartCost = parseInt(cartCost);
		localStorage.setItem("totalCost", cartCost + product.price);
	}else{
		localStorage.setItem("totalCost", product.price);
	}
}

function displayCart(){
	let cartItems = localStorage.getItem("productsInCart");
	cartItems = JSON.parse(cartItems);
	let productContainer = document.querySelector(".products");
	let cartCost = localStorage.getItem('totalCost');

	console.log(cartItems);
	if(cartItems && productContainer){
		productContainer.innerHTML = '';
		Object.values(cartItems).map(item => {
			productContainer.innerHTML += `
			<div class="product">
				<i class="fa-solid fa-circle-xmark"></i>
				<img class="img_js" src="./Data/${item.tag}.jpg">
				<span>${item.name}</span>
			<div class="price">${item.price}đ</div>
			<div class="quantity">
				<i class="decrease fa-sharp fa-solid fa-square-minus"></i>
				<span>${item.inCart}</span>
				<i class="increase fa-solid fa-square-plus"></i>
			<div class="total">
				${item.inCart * item.price}đ
			</div>
			</div>
			</div>
			`
		});
		productContainer.innerHTML += `
			<div class="total_Cost">
				<h4 class="totalTitle">Tổng đơn hàng</h4>
				<h4 class="costTotal">
					${cartCost}đ
				</h4>
			</div>
		`
		deleteButtons();
        manageQuantity();
	}else{
		productContainer.innerHTML = "Không có sản phẩm nào!"
	}
}

function manageQuantity() {
    let decreaseButtons = document.querySelectorAll('.decrease');
    let increaseButtons = document.querySelectorAll('.increase');
    let currentQuantity = 0;
    let currentProduct = '';
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    for(let i=0; i < increaseButtons.length; i++) {
        decreaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
            console.log(currentProduct);

            if( cartItems[currentProduct].inCart > 1 ) {
                cartItems[currentProduct].inCart -= 1;
                cartNumbers(cartItems[currentProduct], "decrease");
                totalCost(cartItems[currentProduct], "decrease");
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));
                displayCart();
            }
        });

        increaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
            console.log(currentProduct);

            cartItems[currentProduct].inCart += 1;
            cartNumbers(cartItems[currentProduct]);
            totalCost(cartItems[currentProduct]);
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            displayCart();
        });
    }
}

function deleteButtons() {
    let deleteButtons = document.querySelectorAll('.product i');
    let productNumbers = localStorage.getItem('cartNumbers');
    let cartCost = localStorage.getItem("totalCost");
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productName;
    console.log(cartItems);

    for(let i=0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            productName = deleteButtons[i].parentElement.textContent.toLocaleLowerCase().replace(/ /g,'').trim();
           
            localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart);
            localStorage.setItem('totalCost', cartCost - ( cartItems[productName].price * cartItems[productName].inCart));

            delete cartItems[productName];
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));

            displayCart();
            onloadCartNumbers();
        })
    }
}


// THONG TIN DANG NHAP
function getfirstName(){
	return localStorage.getItem("userName");
}

function getLastName(){
	return localStorage.getItem("lN");
}

function getNumber(){
	return localStorage.getItem("phone");
}

function getMail(){
	return localStorage.getItem("mail");
}

function getPass(){
	return localStorage.getItem("pass");
}

function showUser(){
	var firstname = getfirstName();
	var lastname = getLastName();
	var phoneNB = getNumber();
	var mail = getMail();
	
	document.getElementById("email_result").innerHTML = mail;
	document.getElementById("phone_result").innerHTML = phoneNB;
	document.getElementById("name_result").innerHTML = firstname + " " + lastname;
}
function readValue(){
	// Nhan gia tri dau vao
	var firstName = document.getElementById("floatingFirstName").value;
	var lastName = document.getElementById("floatingLastName").value;
	var phoneNumber = document.getElementById("floatingPhone").value;
	var mailAddress = document.getElementById("floatingInput").value;
	var password = document.getElementById("mainPassword").value;
	
	// Luu du lieu
	localStorage.setItem("userName", firstName);
	localStorage.setItem("lN", lastName)
	localStorage.setItem("mail", mailAddress);
	localStorage.setItem("phone", phoneNumber);
	localStorage.setItem("pass", password);
	
	showUser();
}
function showss(){
	alert("Thêm vào giỏ hàng thành công");
	return true;
}
onloadCartNumbers();
displayCart();