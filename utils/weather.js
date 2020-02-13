const request = require('request')


const weather = ({xAxis,yAxis},call)=>
{
    let url = 'https://api.darksky.net/forecast/c93e8078151e562fde33db7e62c7f1dc/'+xAxis+','+yAxis+'?units=si&exclude=minutely,hourly,daily,flags'

    request({url:url ,  json:true} ,  (error,response)=>
    {
        if(error)
        call(error,undefined)
        else
        call(undefined,response.body.currently.summary+' '+response.body.currently.temperature+'c')
    })


}

module.exports =  weather;