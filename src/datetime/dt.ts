import {addDays} from 'date-fns'

const format = require('date-fns/format');
const { utcToZonedTime } = require('date-fns-tz')

import { UTCDate } from "@date-fns/utc";


export const add_days = async (datetime: string, days: number) => {
    const dt = new Date(datetime);
    return addDays(dt, days);
}
export const zonedDate = () => utcToZonedTime(new Date().toUTCString(), 'Europe/London')
export const getUTCDate = (date = new Date()) => {
    return new Date(date.getTime() + date.getTimezoneOffset()*1*1000)
}

export const now_utc1 = () => format(utcToZonedTime(new Date(), 'UTC'), 'yyyy-MM-dd HH:mm:ss')
export const now_utc = () => new UTCDate().toISOString().slice(0, -1).replace('T', ' ')
export const now_utc0 = () => format(new Date(), "yyyy-MM-dd HH:mm:ss.SSS", { timeZone: 'Europe/London' })
export const now_iso = () => format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")