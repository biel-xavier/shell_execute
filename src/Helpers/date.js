import { format } from "date-fns";

export function Now() {
    return format(Date.now(), "d/M/yyyy HH:mm:ss");
}   

export function WeekDay() {
    return format(Date.now(), "i");
}