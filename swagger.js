// swagger.js
const swaggerJsdoc = require("swagger-jsdoc");

// 定义 Swagger 规范选项
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Koa Parking System API",
      version: "1.0.0",
      description: "API for managing parking lots",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"], // 指定包含路由的文件位置
};

// 生成 Swagger 规范文档
const specs = swaggerJsdoc(options);

module.exports = specs;
