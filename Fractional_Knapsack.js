
class Item {
	constructor(profit, weight) {
		this.profit = profit;
		this.weight = weight;
	}
}



function cmp(a, b) {
	let r1 = a.profit / a.weight;
	let r2 = b.profit / b.weight;
	return r1 > r2;
}


function fractionalKnapsack(W, arr) {
	// Sorting Item on basis of ratio
	arr.sort(cmp);

	let finalvalue = 0.0;

	for (let i = 0; i < arr.length; i++) {
		
	
		if (arr[i].weight <= W) {
			W -= arr[i].weight;
			finalvalue += arr[i].profit;
		}

	
		else {
			finalvalue += arr[i].profit * (W / arr[i].weight);
			break;
		}
	}

	return finalvalue;
}

let W = 50;
let arr = [new Item(60, 10), new Item(100, 20), new Item(120, 30)];

console.log(fractionalKnapsack(W, arr));


