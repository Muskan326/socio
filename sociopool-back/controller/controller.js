const mongoose = require('mongoose');
const response=require('../library/response')
const dailyData = mongoose.model('dailyData')
const Distance = mongoose.model('Distance')

let dailydata=(req,res)=>{
    let daily=JSON.parse(req.body)
    let dataentry={
        distance:daily.distance,
        date:daily.date,
        time:daily.time
    }
    dailyData.findOne({'uniqueId':daily.uniqueId},(err,result)=>{
        if(result==null){
            let entry=new dailyData({
                uniqueId:daily.uniqueId
            })
        
        entry.save((err,succ)=>{
            if(err){
                let apiresponse=response.generate(true,500,"Some Error Occured",null)
                    res.send(apiresponse)
            }
            else if(succ!=null){
                dailyData.findOneAndUpdate({'uniqueId':daily.uniqueId},{$push:{'data':dataentry}},(err,result)=>{
                    if(result){
                        let apiresponse=response.generate(false,200,"Successfully saved",succ)
                        res.send(apiresponse)
                    }
                    else{
                        let apiresponse=response.generate(true,500,"Some Error Occured",null)
                        res.send(apiresponse)
                    }
                })
            }
        })
        }

        else{
            dailyData.findOneAndUpdate({'uniqueId':daily.uniqueId},{$push:{'data':dataentry}},(err,result)=>{
                if(res){
                    let apiresponse=response.generate(false,200,"Successfully saved",result)
                    res.send(apiresponse)
                }
                else{
                    let apiresponse=response.generate(true,500,"Some Error Occured",null)
                    res.send(apiresponse)
                }
            })
        }
        
    })

}
    let distance=(req,res)=>{
        let request=JSON.parse(req.body)
        dailyData.findOne({'uniqueId':request.uniqueId},(err,result)=>{
            if(result==null){
                let apiresponse=response.generate(true,404,"UniqueId Not Found",null)
                res.send(apiresponse)
            }
            else if(result!=null){
                start = request.starttime.split(":");
                end = request.endtime.split(":");
                let startDate = new Date(0, 0, 0, start[0], start[1], 0);
                let endDate = new Date(0, 0, 0, end[0], end[1], 0);
                diff=(endDate-startDate)/1000
                let dist=diff*request.speed
                let entry=new Distance({
                    uniqueId:request.uniqueId,
                    startTime:request.starttime,
                    endTime:request.endtime,
                    speed:request.speed,
                    distance:dist
                })
                entry.save((err,result)=>{
                    if(result){
                        let apiresponse=response.generate(false,200,"Successfully saved",result)
                        res.send(apiresponse)
                    }
                    else if(err){
                        let apiresponse=response.generate(true,500,"Some Error Occured",null)
                        res.send(apiresponse)
                    }
                })
            }
        })
    }



module.exports={
    dailydata:dailydata,
    distance:distance
}