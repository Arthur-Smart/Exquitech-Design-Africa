import mongoose from "mongoose"
import {Request, User} from './models';
import{connectToDb} from './utils';

interface IRequest{
    owner: mongoose.Types.ObjectId,
    category:string;
    description: string;
    phone: string;
}

interface IUser {
  username: string;
  email: string;
  avatar?: string;
  password?:string;
  isAdmin?:boolean
}

export const getAllRequests = async ():Promise<Array<IRequest>> => {
    try {
        connectToDb();
        const requests = await Request.find();
        return requests;
    } catch (error:any) {
        throw new Error(error)
    }
}

export const getAllUserPost = async (id:mongoose.Types.ObjectId):Promise<Array<IRequest>> => {
    try {
        connectToDb();
        const userRequests = await Request.find({owner:id});
        return userRequests;
    } catch (error:any) {
        throw new Error(error)
    }
}

export const getUser = async (id:string):Promise<IUser> => {
    try {
        connectToDb();
        const user = await User.findById(id);
        return user;
    } catch (error:any) {
        throw new Error(error)
    }
}