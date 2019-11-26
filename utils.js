/*
 * @Author        : fineemb
 * @Github        : https://github.com/fineemb
 * @Description   : 
 * @Date          : 2019-11-26 23:51:05
 * @LastEditors   : fineemb
 * @LastEditTime  : 2019-11-26 23:54:15
 */
var solarLunar = require('solarlunar');


module.exports = {
    set: function (node, data) {
        let global = node.context().global
        let db = node.server.db
        let key = `/${node.sid}`
        console.log(`phone: ${key}`)
        global.set(node.sid, data)
        db.push(key, data)
    },

    get: function (node) {
        let db = node.server.db
        let key = `/${node.sid}`
        console.log(`phone: ${key}`)
        return db.exists(key) ? db.getData(key) : {}
    },

    delete: function (node) {
        let db = node.server.db
        let key = `/${node.sid}`
        console.log(`phone: ${key}`)
        db.exists(key) ? db.delete(key) : {}
    },

    isBrithday(day,nowdate) {
        var as = day.split('-')
        if (as && as.length > 1) {
            const date = new Date();
            if(nowdate!=-1){
              date.setTime(nowdate);
            }

            const solar2lunarData = solarLunar.solar2lunar(date.getFullYear(), date.getMonth() + 1, date.getDate());
            const lunar2solarData = solarLunar.lunar2solar(solar2lunarData['lYear'], Number(as[0]), Number(as[1]), solar2lunarData['isLeap']);
            var minusDays = 1000;
            if(solar2lunarData['lMonth']==Number(as[0])){
              minusDays = Number(as[1])-solar2lunarData['lDay'];
            }else if(solar2lunarData['lMonth']<Number(as[0])){
              minusDays = solarLunar.monthDays(solar2lunarData['lYear'], solar2lunarData['lMonth']) - solar2lunarData['lDay'] + Number(as[1]);
            }else if(solar2lunarData['lMonth'] == 12 && Number(as[0]) == 1){
              minusDays = solarLunar.monthDays(solar2lunarData['lYear'], solar2lunarData['lMonth']) - solar2lunarData['lDay'] + Number(as[1]);
            }

            console.log("天数差:"+minusDays)
            return {"days":minusDays,"nWeek":lunar2solarData['nWeek'],"ncWeek":lunar2solarData['ncWeek'],"cMonth":lunar2solarData['cMonth'],"cDay":lunar2solarData['cDay']}
        }else {
            return 1000
        }
    }

}