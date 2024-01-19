import {addDays} from 'date-fns'

const format = require('date-fns/format');
const { utcToZonedTime } = require('date-fns-tz')

export const add_days = async (datetime: string, days: number) => {
    const dt = new Date(datetime);
    return addDays(dt, days);
}

export const now_utc = () => format(utcToZonedTime(new Date()), 'yyyy-MM-dd HH:mm:ss.SSS', { timeZone: 'UTC' })
export const now_utc0 = () => format(new Date(), "yyyy-MM-dd HH:mm:ss.SSS", { timeZone: 'Europe/London' })
export const now_iso = () => format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")

export const getTimestampInSeconds = () => {
    return Math.floor(Date.now() / 1000)
}

export const getMillisFromEndOfDay =() => {
    const now = Date.now();
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);
    const nowInMillis = now;
    const endOfDayInMillis = endOfDay.getTime();
    return endOfDayInMillis - nowInMillis // millisFromEndOfDay
}