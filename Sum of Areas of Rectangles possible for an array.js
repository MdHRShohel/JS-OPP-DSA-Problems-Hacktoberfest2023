<script>
function MaxTotalRectangleArea( a, n)
{

	a.sort();
	a.reverse();

	let sum = 0;
	let flag = false;


	let len;
	
	for (let i = 0; i < n; i++)
	{
		

		if ((a[i] == a[i + 1] || a[i] -
			a[i + 1] == 1) && (!flag))
		{
		
			flag = true;

			
			len = a[i + 1];

	
			i++;
		}

		
		else if ((a[i] == a[i + 1] ||
				a[i] - a[i + 1] == 1) && (flag))
			{
			
				sum = sum + a[i + 1] * len;

				
				flag = false;

				i++;
			}
	}

	return sum;
}



let a = [ 10, 10, 10, 10,
		11, 10, 11, 10,
		9, 9, 8, 8 ];
let n = a.length;
	
document.write(MaxTotalRectangleArea(a, n));

</script>
