//your code here
let name_input = document.getElementById('item-name-input');
let price_input = document.getElementById('item-price-input');
let name_list = document.getElementById('item');
let price_list = document.getElementById('price');
let disp_total = document.getElementById('total');

disp_total.innerHTML = `grand Total = 0`;
function addItems() {
	disp_total.innerHTML = "";
	if(price_input.value){
		// let createdPriceList = document.createElement('li');
		price_list.append(price_list.value);
		price_list.innerHTML = price_input.value;
		// disp_total.innerHTML = priceTotal()
		// createdPriceList.innerHTML = price_input.value;
		price_input.value="";
	}
	if(name_input.value){
		// let createdNameList = document.createElement('li');
		// name_list.appendChild(createdNameList);
		// createdNameList.innerHTML = name_input.value
		name_list.innerHTML = name_input.value
		name_input.value="";
	}
}

// function priceTotal() {
// 	let sum = 0;
// 	sum += price_list.value;
// 	return sum;
// 	// console.log(sum);
// }
