function max_of_three(x, y, z) {
  return (a>b)?((a>c)?a:c):((b>c)?b:c);
}

console.log(max_of_three(2, 0, 1));
console.log(max_of_three(0, -10, -20));
console.log(max_of_three(1000, 550, 440));
