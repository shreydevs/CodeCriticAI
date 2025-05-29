const express = require('express');


// Add this middleware to enable CORS
express.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://code-criticai.vercel.app'); // Or '*' to allow any origin
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // Allowed methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allowed headers
  next();
});


const app = require('./src/app');
  require('dotenv').config();



  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
