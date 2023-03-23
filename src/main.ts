import {now_utc} from "./datetime/dt";

console.log(now_utc());

let obj: any[] = []

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