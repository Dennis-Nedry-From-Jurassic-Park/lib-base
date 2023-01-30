//import addDays from 'date-fns/utc/addDays'
const {addDays} = require('date-fns');

export const add_days = async (datetime: string, days: number) => {
    const dt = new Date(datetime);
    return await addDays(dt, days)
}

const exec = async () => {
    const res = await add_days('2022-07-20T21:00:00.000Z', 1)
    console.log(res);
}
//exec();
