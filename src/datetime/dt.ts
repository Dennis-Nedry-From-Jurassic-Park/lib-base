//import addDays from 'date-fns/utc/addDays'
import {addDays, isBefore} from 'date-fns'
//const {addDays} = require('date-fns');

export const add_days = async (datetime: string, days: number) => {
    const dt = new Date(datetime);
    return addDays(dt, days);
}

export const is_before = async (date: Date | number, dateToCompare: Date | number) => {
    return isBefore(date, dateToCompare)
}

const exec = async () => {
    const res = await add_days('2022-07-20T21:00:00.000Z', 1)
    console.log(res);
}
//exec();
