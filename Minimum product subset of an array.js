<script>

function minProductSubset(a, n)
{
	if (n == 1)
		return a[0];


	let negmax = Number.MAX_VALUE;
	let posmin = Number.NEGATIVE_INFINITY;
	let count_neg = 0, count_zero = 0;
	let product = 1;

	for(let i = 0; i < n; i++)
	{
		

		if (a[i] == 0)
		{
			count_zero++;
			continue;
		}

		if (a[i] < 0)
		{
			count_neg++;
			negmax = Math.max(negmax, a[i]);
		}

		if (a[i] > 0 && a[i] < posmin)
		{
			posmin = a[i];
		}

		product *= a[i];
	}


	if (count_zero == n || (count_neg == 0 &&
		count_zero > 0))
		return 0;

	if (count_neg == 0)
		return posmin;

	if (count_neg % 2 == 0 && count_neg != 0)
	{

		product = parseInt(product / negmax, 10);
	}
	return product;
}


let a = [ -1, -1, -2, 4, 3 ];
let n = 5;

document.write(minProductSubset(a, n));

</script>
