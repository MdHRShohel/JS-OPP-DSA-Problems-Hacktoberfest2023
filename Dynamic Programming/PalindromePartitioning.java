//
public class PalindromePartitioning {

	// Function to Check if a substring is a palindrome
	static boolean isPalindrome(String str, int i, int j)
	{
		while (i < j) {
			if (str.charAt(i) != str.charAt(j))
				return false;
			i++;
			j--;
		}
		return true;
	}

	// Function to find the minimum number of cuts needed
	// for palindrome partitioning
	static int minPalPartition(String str, int i, int j)
	{
		// Base case: If the substring is empty or a
		// palindrome, no cuts needed
		if (i >= j || isPalindrome(str, i, j))
			return 0;

		int minCuts = Integer.MAX_VALUE;

		// Iterate through all possible partitions and find
		// the minimum cuts needed
		for (int k = i; k < j; k++) {
			int cuts = minPalPartition(str, i, k)
					+ minPalPartition(str, k + 1, j) + 1;
			minCuts = Math.min(minCuts, cuts);
		}

		return minCuts;
	}

	// Driver code
	public static void main(String[] args)
	{
		String str = "ababbbabbababa";

		// Find the minimum cuts needed for palindrome
		// partitioning and display the result
		System.out.println(
			"Min cuts needed for Palindrome Partitioning is "
			+ minPalPartition(str, 0, str.length() - 1));
	}
}
