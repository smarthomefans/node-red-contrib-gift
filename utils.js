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

    isBrithday(day) {
        var as = day.split('-')
        if (as && as.length > 1) {
            const date = new Date();
            const solar2lunarData = solarLunar.solar2lunar(date.getFullYear(), date.getMonth() + 1, date.getDate());
            const lunar2solarData = solarLunar.lunar2solar(solar2lunarData['lYear'], Number(as[0]), Number(as[1]), solar2lunarData['isLeap']);

            var date1 = new Date(date.getFullYear(), date.getMonth(), date.getDay())
            var date2 = new Date(lunar2solarData['cYear'], lunar2solarData['cMonth'] - 1, lunar2solarData['cDay'] + 1)

            var t1 = date1.getTime();
            var t2 = date2.getTime();
            var dateTime = 1000 * 60 * 60 * 24; //每一天的毫秒数
            var minusDays = Math.floor(((t2 - t1) / dateTime));//计算出两个日期的天数差
            return minusDays
        }else {
            return 1000
        }
    }

}