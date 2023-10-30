// Day 70
// https://codeforces.com/problemset/problem/935/A
// 935 A. Fafa and his Company

import java.util.*;

public class fafaAndCompanyCF {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int count = 0;
        for (int i = 1; i < n; i++) {
            if ((n - i) % i == 0)
                count++;
        }
        System.out.println(count);
    }
}
