import {addDays, format as fmt, isBefore} from 'date-fns'

export const add_days = async (datetime: string, days: number) => {
    const dt = new Date(datetime);
    return addDays(dt, days);
}
