const Koa = require("koa");
const Router = require("koa-router");
const cors = require("koa-cors");
const bodyParser = require("koa-bodyparser");

const useRouters = require("./router/index");

require("./config/db");

const app = new Koa();

// 使用中间件处理跨域
app.use(
  cors({
    origin: "*", // 允许所有来源，
    credentials: true,
  })
);

app.use(bodyParser());
useRouters(app); // 注册路由

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
