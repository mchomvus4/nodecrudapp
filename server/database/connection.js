const mongoose = require('mongoose');

const conectDB = async()=>{
 try {
  // mongodb connection string
  const con = await mongoose.connect(process.env.MONGO_URI,{
   //will stop unwanted warning in the console
   useNewUrlParser:true,
   useUnifiedTopology:true,
   useFindAndModify:false,
   useCreateIndex:true
  });
  console.log(`MongoDB connected :${con.connection.host}`)

 } catch (error) {
  console.log(error);
  process.exit(1);
 }
}
module.exports = conectDB