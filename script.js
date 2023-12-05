for (var i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

for (var x = 100; x >= 0; x -= 1) {
  if (x % 3 === 0) {
    console.log(x);
  }
}

var y = 4;
while (y >= -3.5) {
  console.log(y);
  y = y - 1.5;
}

var sum = 0;
for (var z = 1; z <= 100; z++) {
  sum = sum + z;
}
console.log(sum);

var product = 1;
for (var f = 1; f <= 12; f++) {
  product = product * f;
} 
console.log(product);