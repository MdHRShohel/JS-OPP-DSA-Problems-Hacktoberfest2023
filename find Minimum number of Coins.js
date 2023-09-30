<script>



let deno=[1, 2, 5, 10, 20,
	50, 100, 500, 1000];
let n = deno.length;

function findMin(V)
{

		let ans = [];

		for (let i = n - 1; i >= 0; i--)
		{
			// Find denominations
			while (V >= deno[i])
			{
				V -= deno[i];
				ans.push(deno[i]);
			}
		}


		for (let i = 0; i < ans.length; i++)
		{
			document.write(
				" " + ans[i]);
		}
}

n = 93;
document.write(
"Following is minimal number "
+"of change for " + n + ": ");
findMin(n);


</script>
