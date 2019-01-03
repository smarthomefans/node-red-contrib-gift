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
        let s1 = this.server.s1
        let s2 = this.server.s2
        let s3 = this.server.s3
        let brithDay = this.server.deviceList

        node.on('input', function (msg) {
            let payload = []
            for (let i in brithDay) {
                let day = brithDay[i]
                let days = miDevicesUtils.isBrithday(day.mac)
                if (days >= 0 && days < 7) {
                    let notify = Object.assign(day)
                    if (days == 0 && s1) {
                        notify['day'] = 0
                    }else if(days == 3 && s2) {
                        notify['day'] = 3
                    }else if(days == 7 && s3) {
                        notify['day'] = 7
                    }else {
                        continue
                    }
                    payload.push(notify)
                }
            }
            msg.payload = payload
            node.send(msg)
        });
    }

    RED.nodes.registerType("gift-notify", giftNotify);
}