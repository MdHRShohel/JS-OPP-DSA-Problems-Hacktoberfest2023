//leetcode 11th problem


int maxArea(int* height, int heightSize){
    int i=0;
    int j=heightSize-1;
    int area=0,area1=0;
    while(i<j)
    {
if(height[i]>height[j])
{
    area=(j-i)*height[j];
    j--;

}
else
{
    area=(j-i)*height[i];
    i++;
}
if(area1<area)
area1=area;
    }
    
    return area1;

}
