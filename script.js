// if, else, nestad if

let kondisi1 = true;
let kondisi2 = true;

if (kondisi1) {
  console.log("jika aku menang");
  if (kondisi2) {
    console.log("Aku dapat hadiah");
  } else {
    console.log("tidak dapat hadiah");
  }
} else {
  console.log("tidak ada hadiah");
}

// Switch case

let pilihan = "X";

switch (pilihan) {
  case "X":
    console.log("X");
    break;
  case "Y":
    console.log("Y");
    break;
  default:
    console.log("null");
}
console.log(pilihan);

// for statemen

for (let i = 0; i <= 20; i++) {
  console.log("nilai " + i);
}

//While, do while

let h = 0;
while (h <= 10) {
  console.log("angka" + h);
  h++;
}

let z = 30;
do {
  console.log("angka " + z);
  z -= 5;
} while (z >= 10);

// function

function latihanThrow(x, y) {
  if (y == 0) {
    throw new Error("error");
  }
  return x / y;
}
try {
  let hasil = latihanThrow(10, 5);
  console.log("nilai " + hasilBagi);
} catch (error) {
  console.log("");
}
