const app=require('./src/app');
require('dotenv').config();

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});