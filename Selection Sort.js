function SelectionSort(x)
{
    for (let index = 0; index < x.length; index++) {
        var min = Number.MAX_VALUE;
        var min_id = 0;
        var found = false;
        for (let j = index; j < x.length; j++) {
            if(min> x[j])
            {
                min = x[j];
                min_id = j;
                found = true;
            } 
        }

        if(found)
        {
            var temp = x[index];
            x[index] = min;
            x[min_id] = temp;
        }   
    }  
}

function PrintArray(x)
{
    console.log(x);
}

const arr =  [1,0,2,9,144,4,5,6,8,1];
SelectionSort(arr);
PrintArray(arr);