import mongoose from "mongoose";

const deviceSchema = mongoose.Schema (
    {
        title: {
            type:String ,
            required: true ,
        },
        DeviceName: {
            type:String ,
            required: true,
        },
        DSN: {
            type:Number,
            required:true,
        },
    },
        {
            timestamps: true,
          }
        );



export const Device = mongoose.model('Devices',deviceSchema);