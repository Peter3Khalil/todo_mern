import mongoose from "mongoose";
import Joi from "joi";
const taskSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        validate:{
            validator:(v)=>{
                const schema = Joi.string().required();
                const {error} = schema.validate(v);
                return !error;
            },
            message:"{VALUE} is not valid"
        }
    }
});

const task = new mongoose.model("task",taskSchema);
export default task;