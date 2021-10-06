var convert = require('convert-units')
{
    let inch = 42;
    let ftValue = convert(inch).from('in').to('ft');
    console.log("inches: " + inch + " in feet is " + ftValue)
    let length=60;
    let width=40;
    let lengthInMeters=convert(length).from('ft').to('m');
    let widthInMeters=convert(width).from('ft').to('m');
    console.log("plot value in meters is"+lengthInMeters+" "+widthInMeters);
    let numberOfPlots=25;
    let areaInSquareFeet=length*width*numberOfPlots;
    let areaInAcre=convert(areaInSquareFeet).from('ft2').to('ac');
    console.log("Area of "+numberOfPlots+" plots in acres is:"+areaInAcre);

}
