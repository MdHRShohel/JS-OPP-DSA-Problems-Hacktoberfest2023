package Array_Optimized;

import java.util.Scanner;

public class duplicate_array {
	public static int find_num(int arr[], int n) {
		for(int i = 0; i<n; i++) {
			int c = 0;
			for(int j = 0; j<n; j++) {
				if(arr[i]==arr[j]) {
					c++;
				}
			}
			if(c>1) {
				return arr[i];
			}
		}
		return -1;
	}
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int arr[]=new int[n];
		for(int i = 0; i<n; i++) {
			arr[i]=sc.nextInt();
		}
		System.out.println("Duplicate number is"+ " "+ find_num(arr, n));
	}

}
