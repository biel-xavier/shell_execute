import { WeekDay } from "./date.js";


export function validateWeekDay(days) {
    const dateNow = WeekDay();

    return days.filter(day => day == dateNow);
}