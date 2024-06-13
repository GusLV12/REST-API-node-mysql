import express from 'express';
import employeesRoutes from './routes/employees.routes.js';
import indexRoutes from './routes/index.routes.js';
import {port} from'./config.js';

const app = express();
app.use(express.json());

app.use(indexRoutes);
app.use(employeesRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message: 'endpoint not Found'
  })
})

app.listen(port);
console.log("escuchando servidor", port);