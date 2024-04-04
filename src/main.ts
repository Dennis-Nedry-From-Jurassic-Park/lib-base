import {unix_to_dt} from "./datetime/dt";
import {DAY} from "./constants/date.time.formats";

console.log(unix_to_dt("1711957727"));

let obj: any[] = []
console.log(DAY);
/*
for(;;) {
    let new_obj = {
        a: '1',
        b: '2',
        c: {
            x: '42'
        }
    }
    obj.push(new_obj)
    if(JSON.stringify(obj).length * 2 > 64000){
        obj.pop()
        // TODO: send obj to mq ycloud
        obj = []
        obj.push(new_obj)
        break;
    }
}
 */
