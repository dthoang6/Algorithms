/* 
1. listen
2. example
3. brute force solution
4. optimization
5. walk though solution
6. implement
7. testing

Write a JavaScript program to get the current day
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

let day = new Date()

let yyyy = day.getFullYear()
let mm = day.getMonth() + 1
let dd = day.getDate()

if (mm < 10) {
  mm = "0" + mm
}

if (dd < 10) {
  dd = "0" + dd
}

console.log(mm + "-" + dd + "-" + yyyy)
