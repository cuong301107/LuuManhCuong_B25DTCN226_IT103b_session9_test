let orders = [
  "Đơn hàng A",
  "Đơn hàng B",
  "Đơn hàng C",
  "Đơn hàng D",
  "Đơn hàng E",
];

let revenues = [1500, 2800, 1200, -500, 3200];

// task1

let coDonHangAm = revenues.some((revenue) => revenue < 0);
let allAbove500 = revenues.every((revenue) => revenue > 500);
console.log("Có đơn hàng âm:", coDonHangAm);
console.log("Tất cả trên 500:", allAbove500);

// task2

// let netProfits = [];
// netProfits[i] = revenues[i] * 0.9;

let netProfits = revenues.map((revenue) => revenue * 0.9);
console.log("Net Profits:", netProfits);
