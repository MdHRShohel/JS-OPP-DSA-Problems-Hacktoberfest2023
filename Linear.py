def linear_search(array, key):
  """Searches for a given element in an array using the linear search algorithm.

  Args:
    array: A list of elements to be searched.
    key: The element to be searched for.

  Returns:
    The index of the element in the array if it is found, or -1 if it is not found.
  """

  # Iterate over the array and compare each element to the key.
  for i in range(len(array)):
    if array[i] == key:
      # Return the index of the element if it is found.
      return i

  # Return -1 if the element is not found.
  return -1


# Example usage:

array = [5, 3, 8, 6, 7, 2]
key = 8

# Search for the key in the array using the linear search algorithm.
index = linear_search(array, key)

# If the key is found, print its index. Otherwise, print a message indicating
# that the key is not found.
if index != -1:
  print("The key is found at index", index)
else:
  print("The key is not found in the array.")
