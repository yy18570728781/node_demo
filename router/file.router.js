/**
 * @swagger
 * /parking-lots:
 */

const Router = require("koa-router");
const fileRouter = new Router();

fileRouter.get("/parking-lots", async (ctx) => {
  const { freeParking, nightParking, vehicleHeight } = ctx.query;

  let query = {};

  if (freeParking === "true") query["free_parking"] = /SUN/;
  if (nightParking === "true") query["night_parking"] = "YES";
  if (vehicleHeight)
    query["gantry_height"] = { $gte: parseFloat(vehicleHeight) };

  const parkingLots = await ParkingLot.find(query);

  ctx.body = parkingLots;
});

fileRouter.put("/parking-lots/:id/favorite", async (ctx) => {
  const parkingLotId = ctx.params.id;
  const updatedLot = await ParkingLot.findByIdAndUpdate(
    parkingLotId,
    { is_favorite: true },
    { new: true }
  );

  if (!updatedLot) {
    ctx.status = 404;
    ctx.body = { message: "Parking lot not found" };
  } else {
    ctx.body = updatedLot;
  }
});

module.exports = fileRouter;
