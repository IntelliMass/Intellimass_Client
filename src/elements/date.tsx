import { Request } from "../modules/requests/request.iterface";

export const sortByDate = (array: Request[]) => {

  let newArray: {
    time: number;
    date: string;
    id: string;
    userID: string;
    path: string;
    method: string;
    statusCode: number;
  }[] = [];
  array.forEach((element, index) => {
    let newTime = Date.parse(array[index].time);
    newArray.push({ ...array[index], time: newTime });
  });

  newArray.sort(function (requestA, requestB) {
    if (requestB.time > requestA.time) return -1;
    else if (requestB.time < requestA.time) return 1;
    else return 0;
  });

  const dates:string[] = [];

  let finalArray: Request[] = [];
  newArray.forEach((element, index) => {
    let dateTemp = new Date(newArray[index].time);
    dates.push(dateFromTime(dateTemp));
    let dateObject = new Date(newArray[index].time).toLocaleString();
    finalArray.push({ ...newArray[index], time: dateObject });
  });


  const unique = new Set(dates.map((item) => item));
  let differentDates:string[] = Array.from(unique);
  
};

export const dateFromTime = (time:Date) => {
  const months = ['January','Febuary','March','April','May','June','July','August','September','October','November','December'];
  let year = time.getFullYear();
  let month = months[time.getMonth()];
  let date = time.getDate();
  let stringTime = date + ' ' + month + ' ' + year;
  return stringTime;
}
