import { addDays } from "date-fns";
// import * dateFns from 'date-fns';

const today = new Date();

const tommorrow = addDays(today, 1);

const dayAfterTommorrow = addDays(today, 2);

console.log(today, tommorrow, dayAfterTommorrow);
