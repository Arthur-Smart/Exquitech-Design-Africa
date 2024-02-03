"use server"

import { Request } from "./models";
import { connectToDb } from "./utils";


export const createRequest = async (formData:any) => { 
    const {category, description, phone,} = Object.fromEntries(formData);
    console.log(category, description, phone)
   
    try {
        connectToDb();
        const newRequest = new Request({
            category,
            description,
            phone,
        })

        await newRequest.save();
        return {message:"Request has been sent successfully"}
    } catch (error) {
        return {error: "Something went wrong"}
    }
}