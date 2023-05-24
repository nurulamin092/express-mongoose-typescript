
import mongoose from 'mongoose';
import app from "./app";

const port:Number = 9000;



async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/mongoose-practice');
        console.log('Database connect successfully')
        app.listen(port,()=>{
            console.log(`Server is listening on port ${port}`)
        })
       
    } catch (err) {
        console.log(`Failed to connect database ${err}`)
    }

  }

  main();




