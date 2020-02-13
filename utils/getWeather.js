const geoLoc = require('./geoLoc')
const weather = require('./weather')




const getWeather = (location , call)=>
{
    geoLoc(location,(error,respnose)=>{
    
        weather({xAxis : respnose.xAxis, yAxis: respnose.yAxis},(error1,respnose1)=>{
    
           
            call(undefined,{
                Location: respnose.place,
                Temp: respnose1
    
            })
    
        } )
    })
}


module.exports =  getWeather