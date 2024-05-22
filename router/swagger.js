const Router = require("koa-router");
const swaggerUI = require("koa-swagger-ui");
const specs = require("./swagger"); // 引入 Swagger 规范

// 设置 Swagger UI 路由
const swaggerRouter = new Router();
// swaggerRouter.get("/swagger", swaggerUI.setup(specs));

module.exports = swaggerRouter;
