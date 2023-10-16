import java.util.*;

public class EulerPhiAlgorithm {
    public static int phi(int n) {
        int result = n; // Initialize result as n
 
        // Check for all prime factors of n and subtract their multiples from result
        for (int p = 2; p * p <= n; p++) {
            if (n % p == 0) { // p is a prime factor of n
                while (n % p == 0) { // Remove all multiples of p from n
                    n /= p;
                }
                result -= result / p;
            }
        }
        // If n has a prime factor greater than sqrt(n), then add its contribution
        if (n > 1) {
            result -= result / n;
        } 
        return result;
    }
    // Main method to test the program
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the value of n: ");
        int n = sc.nextInt();
        int phi_n = phi(n);
        System.out.println("phi(" + n + ") = " + phi_n);
        sc.close();
    }
}
