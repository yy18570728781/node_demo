const csv = require("csv-parser");
const fs = require("fs");
const parkingModel = require("./models/parkingLot");
const Parking = parkingModel.model("ParkingLot");
// console.log(Parking);

require("./app");
// 文件路径
const filePath = "./file/hdb-carpark-information.csv";

const readStream = fs.createReadStream(filePath);
// console.log(readStream)

const results = [];

readStream
  .pipe(csv())
  .on("data", async (data) => {
    // results.push(data);
    try {
      // await Parking.save(data);
      // 创建一个新的ParkingLot实例
      const parkingLot = new Parking(data);
      const result = await parkingLot.save();
      // console.log(result);
      results.push(data);
    } catch (error) {
      console.error("Error saving parking lot:", error);
    }
  })
  .on("end", async () => {
    // console.log(results);
    // 打印第一行数据
    // const parkingLot = new Parking(results[0]);
    // const result = await parkingLot.save();
    // console.log(result);
    // console.log(results[0]);
  });
