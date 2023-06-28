
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

	   
});

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
		name:'Chuối sứ' ,
		tag: 'chuoisu',
		price: 42000 ,
		inCart: 0
	},
	{
		name:'Cà rốt' ,
		tag: 'carrot',
		price: 32000 ,
		inCart: 0
	},
	{
		name:'Lê ngọt' ,
		tag: 'le',
		price: 47500 ,
		inCart: 0
	},
	{
		name:'Chanh giấy' ,
		tag: 'lemon',
		price: 30000 ,
		inCart: 0
	},
	{
		name:'Ổi ruby' ,
		tag: 'oiruby',
		price: 62000 ,
		inCart: 0
	},
	{
		name:'Cam' ,
		tag: 'orange',
		price: 70000 ,
		inCart: 0
	},
	{
		name:'Khoai tây' ,
		tag: 'potato',
		price: 34000 ,
		inCart: 0
	},
	{
		name:'Me chua' ,
		tag:'me',
		price: 25000,
		inCart:0
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
		name:'Chà là tươi' ,
		tag:'chala',
		price: 500000,
		inCart:0
	},
	{
		name:'Chà là khô' ,
		tag:'chalakho',
		price: 550000,
		inCart:0
	},
	{
		name:'Táo Amborsia' ,
		tag:'taoambrosia',
		price: 425000,
		inCart:0
	},
	{
		name:'Việt quốc xanh' ,
		tag:'vietquocxanh',
		price: 65000,
		inCart:0
	},
	{
		name:'Nho đen dài' ,
		tag:'nhodai',
		price: 200000,
		inCart:0
	},
	{
		name:'Táo hoa hồng' ,
		tag:'taohoahong',
		price: 400000,
		inCart:0
	},
	{
		name:'Dâu tây organic' ,
		tag:'dautayorganic',
		price: 120000,
		inCart:0
	},
	{
		name:'Nho khô' ,
		tag:'nhokho',
		price: 60000,
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
		name:'Lê nhật bản' ,
		tag: 'lenhat',
		price: 260000 ,
		inCart: 0
	},
	{
		name:'Mận kiyou' ,
		tag: 'man',
		price: 250000 ,
		inCart: 0
	},
	{
		name:'Dưa Gang Yubari' ,
		tag: 'melong',
		price: 65000 ,
		inCart: 0
	},
	{
		name:'nho ruby nhật' ,
		tag: 'rubygrapes',
		price: 120000 ,
		inCart: 0
	},
	{
		name:'Sung nhật bản' ,
		tag: 'sung',
		price: 50000 ,
		inCart: 0
	},
	{
		name:'xoài đỏ' ,
		tag: 'xoaido',
		price: 80000 ,
		inCart: 0
	},
	{
		name:'Quýt mikan' ,
		tag: 'quyt',
		price: 40000 ,
		inCart: 0
	},
    {
		name:'Quất kikan' ,
		tag: 'quat',
		price: 55000 ,
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
	{
		name:'Nho rượu' ,
		tag:'nhoruouKyoho',
		price: 900000,
		inCart:0
	},
	{
		name:'Đào hồng Kyoto' ,
		tag:'peach',
		price: 150000,
		inCart:0
	},
	{
		name:'Quýt Jeju' ,
		tag:'quytjeju',
		price:175000,
		inCart:0
	},
	{
		name:'Lê Hàn Quốc' ,
		tag:'pear',
		price:100000,
		inCart:0
	},
	{
		name:'Táo mini' ,
		tag:'taomini',
		price: 100000,
		inCart:0
	},
	{
		name:'Việt quốc' ,
		tag:'vietquoc',
		price: 65000,
		inCart:0
	},
	{
		name:'Thanh long vàng' ,
		tag:'thanhlongvang',
		price: 60000,
		inCart:0
	},
	{
		name:'Lựu đỏ' ,
		tag:'luu',
		price: 90000,
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
				<img class="img_js" src="./Data/${item.tag}.jpg">
				<span>${item.name}</span>
			<div class="price">${item.price}đ</div>
			<div class="quantity">
				<span>${item.inCart}</span>
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
	}else{
		productContainer.innerHTML = "Không có sản phẩm nào!"
	}
}
//tim kiem
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

	// Luu du lieu
	localStorage.setItem("userName", firstName);
	localStorage.setItem("lN", lastName)
	localStorage.setItem("mail", mailAddress);
	localStorage.setItem("phone", phoneNumber);

	showUser();
}

onloadCartNumbers();
displayCart();