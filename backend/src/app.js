const express=require('express');
const aiRoutes=require('./routes/ai.routes');
const cors=require('cors');
const app=express();

app.use(cors({
  origin: 'https://code-critic-ai.vercel.app',
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true
}));



app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});



app.use('/ai', aiRoutes);


app.use((req, res) => {
  res.status(404).send('Route not found');
});
module.exports=app;
