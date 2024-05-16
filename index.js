const csv = require("csv-parser");
const fs = require("fs");
const ParkingLot = require("./models/parkingLot");

// 文件路径
const filePath = "./file/hdb-carpark-information.csv";

const readStream = fs.createReadStream(filePath);
// console.log(readStream)

const results = [];

readStream
  .pipe(csv())
  .on("data", async (data) => {
    results.push(data);
    try {
      await parkingLot.save();
      results.push(parkingLot);
    } catch (error) {
      console.error("Error saving parking lot:", error);
    }
  })
  .on("end", async () => {
    console.log(results);
    // 打印第一行数据
    console.log(results[0]);
  });
