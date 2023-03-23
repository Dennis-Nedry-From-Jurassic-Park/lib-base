import {getUTCDate, now_utc, now_utc1} from "./datetime/dt";


console.log(getUTCDate())
console.log(now_utc())


const {format,zonedTimeToUtc,utcToZonedTime} = require("date-fns-tz");
const today = new Date(); // Wed Sep 16 2020 13:25:16
const timeZone = 'UTC'; // Let's see what time it is Down Under
const timeInBrisbane = zonedTimeToUtc(today, timeZone);
console.log(`
Default time zone: ${format(today, 'yyyy-MM-dd HH:mm:ss')}
Time in Paris: ${format(timeInBrisbane, 'yyyy-MM-dd HH:mm:ss')
}`);

const timeInBrisbane2 = utcToZonedTime(today, timeZone);
console.log(`
Default time zone: ${format(today, 'yyyy-MM-dd HH:mm:ss')}
Time in Paris: ${format(timeInBrisbane2, 'yyyy-MM-dd HH:mm:ss')
}`);

console.log(now_utc1());

let obj: any[] = []

// for(;;) {
//     let new_obj = {
//         a: '1',
//         b: '2',
//         c: {
//             x: '42'
//         }
//     }
//     obj.push(new_obj)
//     if(JSON.stringify(obj).length * 2 > 64000){
//         obj.pop()
//         // TODO: send obj to mq ycloud
//         obj = []
//         obj.push(new_obj)
//         break;
//     }
// }