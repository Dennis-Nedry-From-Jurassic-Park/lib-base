import {addDays} from 'date-fns'

const format = require('date-fns/format');
const { utcToZonedTime } = require('date-fns-tz')

export const add_days = async (datetime: string, days: number) => {
    const dt = new Date(datetime);
    return addDays(dt, days);
}

export const now_utc = () => format(utcToZonedTime(new Date(), 'UTC'), 'yyyy-MM-dd HH:mm:ss', { timeZone: 'UTC' })
export const now_utc0 = () => format(new Date(), "yyyy-MM-dd HH:mm:ss.SSS", { timeZone: 'Europe/London' })
export const now_iso = () => format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")