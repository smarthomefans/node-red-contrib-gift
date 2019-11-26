/*
 * @Author        : fineemb
 * @Github        : https://github.com/fineemb
 * @Description   : 
 * @Date          : 2019-11-26 23:51:05
 * @LastEditors   : fineemb
 * @LastEditTime  : 2019-11-26 23:52:18
 */
module.exports = function (RED) {

    function GiftConfiguratorNode(n) {
        RED.nodes.createNode(this, n);
        this.name = n.name;
        this.days = n.days
        this.deviceList = n.deviceList || [];
        
    }
    RED.nodes.registerType("gift-configurator", GiftConfiguratorNode);

}