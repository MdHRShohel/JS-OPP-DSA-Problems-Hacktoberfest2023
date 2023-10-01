function InsertionSort(x)
{
    for (let index = 1; index < x.length; index++) {
        var holder = x[index];
        var j = index-1;
        while (x[j] > holder && j>=0) {
            x[j+1] = x[j];
            j--;
        }
        j++;
        x[j] = holder;  
    }
}

function PrintArray(x)
{
    console.log(x);
}

const arr =  [5,7,2,1,9,3,8,0,6];
InsertionSort(arr);
PrintArray(arr);