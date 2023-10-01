function isPrime(x)
{
    let flag = true;
    if(x == 0 ||x == 1 || x % 2 == 0)
    {
        flag = false;
    }else
    {
        for(let i=3; i*i<=x; i+=2)
        {
            if(x % i == 0 && i != x)
            {
                flag = false;
            }
        }
    }

    if(flag)
    {
        console.log(x + " is a prime");
    }else
    {
        console.log(x + " is not a prime!");
    }
}

let num = parseInt(prompt("Enter a Number: "));
isPrime(num);