// server.js
import express from 'express';
import studentRoutes from './src/Back_End/routes/student.js';
import { swaggerUi, swaggerSpec } from './src/Back_End/config/swagger.js';

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/', studentRoutes);

app.listen(5000, () => {
  console.log('✅ Server running at http://localhost:5000');
  console.log('📚 Swagger docs at http://localhost:5000/api-docs');
});
