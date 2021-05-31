	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Milk $2.00",
		LactoseFree: false,
		NutFree: false,
		Organic: false,
		
		price: 2.00,
		LactoseFreeAndNutFree: false
	},
	{
		name: "Almond Milk $3.00",
		LactoseFree: true,
		NutFree: false,
		price: 3.00,
		Organic: false,
		
		LactoseFreeAndNutFree: true
	},
	{
		name: "Banana $4.00",
		LactoseFree: true,
		NutFree: true,
		price: 4.00,
		Organic: true,
	
		LactoseFreeAndNutFree: true
	},
	{
		name: "Yogurt $4.35",
		LactoseFree: false,
		NutFree: true,
		price: 4.35,
		Organic: false,
		
		LactoseFreeAndNutFree: false
	},
	{
		name: "Ice Cream $2.35",
		LactoseFree: false,
		NutFree: true,
		price: 2.35,
		Organic: false,
		
		LactoseFreeAndNutFree: false
	},
	{
		name: "Peanuts $5.35",
		LactoseFree: true,
		NutFree: false,
		price: 5.35,
		Organic: false,
		
		LactoseFreeAndNutFree: false
	},
	{
		name: "Trail Mix $3.35",
		LactoseFree: true,
		NutFree: false,
		price: 3.35,
		Organic: false,
		
		LactoseFreeAndNutFree: false
	},
	{
		name: "Apple $1.35",
		LactoseFree: true,
		NutFree: true,
		price: 1.35,
		Organic: true,
	
		LactoseFreeAndNutFree: true
	},
	{
		name: "Celery $2.35",
		LactoseFree: true,
		NutFree: true,
		price: 2.35,
		Organic: true,
		
		LactoseFreeAndNutFree: true

	},
	{
		name: "Orange $2.00",
		LactoseFree: true,
		NutFree: true,
		price: 2.00,
		Organic: true,
		
		LactoseFreeAndNutFree: false
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction, Organic) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {

		if((Organic == "Organic") && (prods[i].Organic== true)){

		if ((restriction == "LactoseFree") && (prods[i].LactoseFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "NutFree") && (prods[i].NutFree == true)){
			product_names.push(prods[i].name);
		}
	
		else if ((restriction == "LactoseFreeAndNutFree") && (prods[i].LactoseFreeAndNutFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
		else if((Organic == " Non Organic") && (prods[i].Organic== false)){
			if ((restriction == "LactoseFree") && (prods[i].LactoseFree == true)){
				product_names.push(prods[i].name);
			}
			else if ((restriction == "NutFree") && (prods[i].NutFree == true)){
				product_names.push(prods[i].name);
			}
		
			else if ((restriction == "LactoseFreeAndNutFree") && (prods[i].LactoseFreeAndNutFree == true)){
				product_names.push(prods[i].name);
			}
			else if (restriction == "None"){
				product_names.push(prods[i].name);
			}
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
