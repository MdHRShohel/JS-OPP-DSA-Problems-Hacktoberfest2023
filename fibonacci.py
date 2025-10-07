def fibonacci(n):
    # Initialize the first two Fibonacci numbers
    a, b = 0, 1
    # Continue generating numbers while the current number is less than 'n'
    while a < n:
        print(a, end=' ')  # Print the current Fibonacci number
        a, b = b, a + b    # Update the values: 'a' becomes 'b', and 'b' becomes 'a+b'
    print()  # Newline after the loop ends

# Generate Fibonacci sequence up to 1000
fibonacci(1000)

