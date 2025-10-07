
class Item {
	constructor(profit, weight) {
		this.profit = profit;
		this.weight = weight;
	}

	getRatio() {
		return this.profit / this.weight;
	}
}

function compareItems(a, b) {
	// Compare based on profit-to-weight ratio in descending order
	return b.getRatio() - a.getRatio();
}

function fractionalKnapsack(capacity, items) {
	// Sort items based on the profit-to-weight ratio
	items.sort(compareItems);

	let totalProfit = 0.0;

	for (let i = 0; i < items.length; i++) {
		if (items[i].weight <= capacity) {
			// Take the whole item
			capacity -= items[i].weight;
			totalProfit += items[i].profit;
		} else {
			// Take the fraction of the item that fits
			totalProfit += items[i].profit * (capacity / items[i].weight);
			break;
		}
	}

	return totalProfit;
}

const capacity = 50;
const items = [new Item(60, 10), new Item(100, 20), new Item(120, 30)];

console.log(fractionalKnapsack(capacity, items));



