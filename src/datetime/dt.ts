import {addDays} from 'date-fns'
var format = require('date-fns/format')

export const add_days = async (datetime: string, days: number) => {
    const dt = new Date(datetime);
    return addDays(dt, days);
}

export const now_iso = () => format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")