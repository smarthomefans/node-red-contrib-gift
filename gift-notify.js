/*
 * @Author        : fineemb
 * @Github        : https://github.com/fineemb
 * @Description   : 
 * @Date          : 2019-11-26 23:51:05
 * @LastEditors   : fineemb
 * @LastEditTime  : 2019-11-27 22:06:55
 */
module.exports = function (RED) {
    const miDevicesUtils = require('./utils');

    function giftNotify(config) {
        RED.nodes.createNode(this, config);

        // Retrieve the config node
        this.server = RED.nodes.getNode(config.server);
        
        var node = this;
        if (this.server) {
            node.status({fill:"blue", shape:"ring", text: "ok"});
        } else {
            node.status({fill:"red", shape:"ring", text: "没有配置正确的人员信息"});
            return
        }
        let days = this.server.days
        let brithDay = this.server.deviceList
        let type = this.server.name

        node.on('input', function (msg) {
            let payload = [];
            let nd = msg.nowDate?msg.nowDate:-1
            for (let i in brithDay) {
                let day = brithDay[i]
                let datas = miDevicesUtils.isBrithday(day.mac,nd)
                if (datas['days'] <= days && datas['days'] > -1) {
                    let notify = Object.assign(day)
                        notify['datas'] = datas;
                        notify['type'] = type;
                    payload.push(notify)
                }
            }
            msg.payload = payload
            node.send(msg)
        });
    }

    RED.nodes.registerType("gift-notify", giftNotify);
}