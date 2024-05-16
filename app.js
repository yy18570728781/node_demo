const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const ParkingLot = require("./models/parkingLot");
require("./config/db");

const app = new Koa();
const router = new Router();

app.use(bodyParser());

router.get("/parking-lots", async (ctx) => {
  const { freeParking, nightParking, vehicleHeight } = ctx.query;

  let query = {};

  if (freeParking === "true") query["free_parking"] = /SUN/;
  if (nightParking === "true") query["night_parking"] = "YES";
  if (vehicleHeight)
    query["gantry_height"] = { $gte: parseFloat(vehicleHeight) };

  const parkingLots = await ParkingLot.find(query);

  ctx.body = parkingLots;
});

router.put("/parking-lots/:id/favorite", async (ctx) => {
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

app.use(router.routes()).use(router.allowedMethods());
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
