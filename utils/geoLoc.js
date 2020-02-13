const request = require('request')

const geoloc = (location, call) =>
{
    let url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(location) + '.json?access_token=pk.eyJ1Ijoic2hlaGFia2hhbGlkIiwiYSI6ImNrNjdhNmM3NzBmbjIza3A2d2UzOGFzMWoifQ.S_nlzUP9urhAqxc80tGjkA'
    request({ url: url, json: true }, (error, response) =>
    {
        if(error)
        call(error,undefined)
        else
        call(undefined,{
        place: response.body.features[1].place_name,
        xAxis: response.body.features[2].center[0],
        yAxis: response.body.features[2].center[1]
        })
    }
    )
}

module.exports = geoloc