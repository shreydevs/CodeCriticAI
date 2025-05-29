const express=require('express');
const aiRoutes=require('./routes/ai.routes');
const cors=require('cors');
const app=express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://code-criticai.vercel.app'); // Or '*' to allow any origin
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // Allowed methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allowed headers
  next();
});



app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/ai', aiRoutes);
module.exports=app;
