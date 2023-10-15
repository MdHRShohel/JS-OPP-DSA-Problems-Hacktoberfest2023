package Array_Optimized;

import java.util.Scanner;

public class print_intersection {
//	public static int printNum(int a[], int b[], int m, int n) {
//		int count = 0;
//		for(int i = 0; i<n; i++) {
//			for(int j = 0; j<m; j++) {
//				if(a[i]==b[j]) {
//					return a[i];
//				}
//				
//			}
//			
//		}
//		return -1;
//
//	}
	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int m = sc.nextInt();
		int a[]= new int[n];
		int b[]= new int[m];
		for(int i = 0; i<n;i++) {
			a[i]=sc.nextInt();
		}
		for(int j = 0; j<m; j++) {
			b[j]=sc.nextInt();
		}
		for(int i = 0; i<n; i++) {
			for(int j = 0; j<m; j++) {
				if(a[i]==b[j]) {
					System.out.println(b[j]);
				}
			}
		}
		
	}
}