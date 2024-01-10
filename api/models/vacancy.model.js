import mongoose from "mongoose";

const vacancySchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
        },
        salaryRange:{
            type:String,
            required:true,
        },
        location:{
            type:String,
            required:true,
        },
        country:{
            type:String,
            required:true,
        },
        countryFlag:{
            type:String,
            required:true,
        },
        food:{
            type:Boolean,
            required:true,
        },
        accommodation:{
            type:Boolean,
            required:true,
        },
        medical:{
            type:Boolean,
            required:true,
        },
        airTicket:{
            type:Boolean,
            required:true,
        },
        contractPeriod:{
            type:String,
            required:true,
        },
        adminRef:{
            type:String,
            required:true,
        }
    },{timestamps:true});

    const Vacancy = mongoose.model("Vacancy", vacancySchema);
    export default Vacancy;