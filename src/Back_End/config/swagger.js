// src/Back_End/config/swagger.js
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Quản Lý Học Viên',
      version: '1.0.0',
      description: 'Tài liệu API sử dụng Swagger cho hệ thống quản lý học viên',
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
  },
  apis: ['./src/Back_End/routes/*.js'], // ✅ đảm bảo đường dẫn đúng thực tế
};

const swaggerSpec = swaggerJsDoc(options);

export { swaggerUi, swaggerSpec }; // ✅ đúng cú pháp export trong ES module
