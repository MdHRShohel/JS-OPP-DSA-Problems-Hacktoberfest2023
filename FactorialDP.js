let arr = new Array(100000);

function CreateFactorial()
{
    arr[0] = 1;
    arr[1] = 1;
    for (let index = 2; index < arr.length; index++){
        arr[index] = arr[index-1] * index;
    }
}

CreateFactorial();

let x = prompt("Enter One Number: ");

console.log(arr[x]);