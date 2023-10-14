/**
 * To convert binary ot decimal number 
 * example : 
 * input : 111
 * output : 7
 */

package BitWise;

import java.util.Scanner;

public class BinaryToDecimalConversion {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("Enter binary number : ");
        int n = scan.nextInt();
        System.out.println(binaryToDecimal(n));
    }

    //to convert binary to decimal number
    public static int binaryToDecimal(int n){
        int num=n;
        int temp = num;
        int res=0;
        int base = 1;
        while (temp>0){
            int last_digit = temp%10;
            temp /=10;
            res+=base*last_digit;
            base*=2;
        }
        return res;
    }
}
