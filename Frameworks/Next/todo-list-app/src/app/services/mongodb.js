//arrow function

import mongoose from "mongoose"

const connectMongo = async () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("Conectado ao MongoDB"))
}

export default connectMongo;