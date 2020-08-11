// importing mongoose module
const mongoose = require('mongoose')

// import schema 
const Schema = mongoose.Schema;

let DailyData=new Schema({
    uniqueId:{
        type:String,
        unique:true
    },
    data:[]
})

let Distance=new Schema({
    uniqueId:{
        type:String,
    },
    startTime:{
        type:String
    },
    endTime:{
        type:String
    },
    speed:{
        type:Number
    },
    distance:{
        type:Number
    }
})
mongoose.model('dailyData', DailyData);
mongoose.model('Distance', Distance);
