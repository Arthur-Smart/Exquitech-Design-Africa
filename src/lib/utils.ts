const {default:mongoose} = require("mongoose")

const connection:any = {};

export const connectToDb = async() => {
    try {
        if(connection.isConnected){
            console.log("Using Existing connection")
            return;
        }
        const db = await mongoose.connect(process.env.MONGO_URL)
        connection.isConnected = db.connections[0].readyState;
    } catch (error:any) {
        throw new Error(error)
    }
}