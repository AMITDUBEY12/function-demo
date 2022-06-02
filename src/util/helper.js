// const date = new Date();
// // get the date as a string
// const n = date.toDateString();
// this date function

const date1 = function(){
const d = new Date();
console.log(d);
}

//this month function
const month1 = function(){
const date = new Date(2022, 5, 1) ; // 2009-11-10
const month = date.toLocaleString('default', { month: 'long' });
console.log(month);
}

// this is getbatchinfo code
const getBatchinfo = function(){
console.log('Radon, W3D4, the topic for today is Nodejs module system')

}


// module.exports.date =new Date
// module.exports.n = date.toDateString

module.exports.date1 = date1
module.exports.month1 = month1
module.exports.getBatchinfo = getBatchinfo


