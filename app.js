const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const ParkingLot = require("./models/parkingLot");
const useRouters = require("./router/index");

require("./config/db");

const app = new Koa();
app.use(bodyParser());
useRouters(app); // 注册路由

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
