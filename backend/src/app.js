const express=require('express');
const aiRoutes=require('./routes/ai.routes');
const cors=require('cors');
const app=express();

app.use(cors())

app.use(cors(
  {
    origin: [https://code-criticai.vercel.app/"],
    methods: ["POST","GET"],
    credentials: true
  }
));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/ai', aiRoutes);
module.exports=app;
