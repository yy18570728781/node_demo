const csv = require("csv-parser");
const fs = require("fs");

// 文件路径
const filePath = "./file/hdb-carpark-information.csv";

const readStream = fs.createReadStream(filePath);
// console.log(readStream)

const results = [];

fs.createReadStream(filePath)
  .pipe(csv())
  .on("data", (data) => {
    results.push(data);
  })
  .on("end", () => {
    console.log(results);
    // 打印第一行数据
    console.log(results[0]);
  });
