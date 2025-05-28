const express=require('express');
const aiRoutes=require('./routes/ai.routes');
const cors=require('cors');
const app=express();

app.use(cors())

const corsOptions = {
  origin: "https://code-criticai.vercel.app", // no trailing slash, string not array
  methods: ["POST", "GET"],
  credentials: true
};

app.use(cors(corsOptions));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/ai', aiRoutes);
module.exports=app;
