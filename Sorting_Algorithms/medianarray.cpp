
#include <bits/stdc++.h>
class Solution
{
public:
  double MedianOfArrays(vector<int> &array1, vector<int> &array2)
  {
    for (int i = 0; i < array2.size(); i++)
    {
      array1.push_back(array2[i]);
    }

    int size;
    double m;
    size = array1.size();
    sort(array1.begin(), array1.end());
    if (size % 2)
    {
      return array1[size / 2];
    }
    else
    {
      m = (array1[size / 2] + array1[(size / 2) - 1]) / 2.0;
      return m;
    }
  }
};