// gettime
// /1000
// now()
// let mDate=new Date()

console.log(mDate); //printing normally give2024-08-01T16:10:12.993Z
console.log(mDate.toDateString());//Thu Aug 01 2024
console.log(mDate.toISOString());//2024-08-01T16:13:36.841Z
console.log(mDate.toLocaleDateString());//8/1/2024
console.log(mDate.toLocaleString());//8/1/2024, 5:02:57 PM
console.log(mDate.toJSON());//2024-08-01T17:02:57.842Z
console.log(mDate.toString());//Thu Aug 01 2024 17:02:57 GMT+0000 (Coordinated Universal Time)
let time=(mDate.getTime()/1000)//getTime gives miliseconds

//divide by 1000 is used to convert to milisec to sec 
// its also an important interview question
//time of two different variables are compared using getTime()
let date=new Date(25,0,2001)
console.log(date.toLocaleDateString())
// console.log((date.getTime()/1000));




