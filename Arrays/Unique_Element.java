package Array_Optimized;

import java.util.Scanner;

public class Unique_Element {
	public static int find_num(int arr[], int n) {
		for(int i = 0; i<n; i++) {
			int count = 0;
			for(int j = 0; j<n; j++) {
				if(arr[i]==arr[j]) {
					count++;
				}
			}
			if (count == 1) {
		        return arr[i];
		      }
		}
		return -1;
	}
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int arr[]= new int[n];
		for(int i = 0; i<n; i++) {
			arr[i]=sc.nextInt();
		}
		System.out.println("Element occurring once is " + find_num(arr, n));
	}

}
