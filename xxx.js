var solarLunar  = require('solarlunar');

var a = '11-30'
var as = a.split('-')
const date = new Date();
const solar2lunarData = solarLunar.solar2lunar(date.getFullYear(), date.getMonth() + 1, date.getDate());
const lunar2solarData = solarLunar.lunar2solar(solar2lunarData['lYear'], Number(as[0]), Number(as[1]), solar2lunarData['isLeap']);

var date1 = new Date(date.getFullYear(), date.getMonth(), date.getDay())
var date2 = new Date(lunar2solarData['cYear'], lunar2solarData['cMonth'] - 1, lunar2solarData['cDay'] + 1)

var t1 = date1.getTime();
var t2 = date2.getTime();
var dateTime = 1000*60*60*24; //每一天的毫秒数
var minusDays = Math.floor(((t2-t1)/dateTime));//计算出两个日期的天数差
var days = Math.abs(minusDays);//取绝对值
console.log(minusDays)
