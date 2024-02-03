import mongoose from "mongoose"

interface IUser {
  username: string;
  email: string;
  avatar?: string;
  password?:string;
  isAdmin?:boolean
}

interface IRequest{
    owner?: mongoose.Types.ObjectId,
    category:string;
    description: string;
    phone: string;
}

const userSchema = new mongoose.Schema<IUser>({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    avatar:{
        type:String
    },
    password:{
        type:String,
        min:6
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
});

const requestSchema = new mongoose.Schema<IRequest>({
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        // required:true
    },
    category:{
        type:String,
        required:true,
        enum:['design', 'web', 'mobile', 'erp']
    },
    description: {
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
}, {timestamps:true});

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Request = mongoose.models?.Request || mongoose.model("Request", requestSchema);
